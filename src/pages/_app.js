

import React from 'react'
import '../styles/globals.scss'
import '../styles/styles.scss'
import Head from 'next/head'
import Script from 'next/script'
import io from 'socket.io-client'
import { SocketContainer } from '/modules/socket'
import { resolveVariables } from '/app.config'
import { checkSignedIn } from '/modules/utility/onboarding/SignIn'
import { LocalEventEmitter } from '/modules/events/LocalEventEmitter'
import { handleRouteChange, registerCheckLocalStorageSize, registerCheckMobile } from '/modules/util'
import { useRouter } from 'next/router'
import { forceUpdateProps, handleGlobalEvent, handleSetCart, handleSetLoggedIn, registerGoogleSignIn, registerSocket, toggleSingleOpenMenu } from '/modules/utility/_app'


function MyApp({ Component, pageProps }) {
	const [ appDidMount, setAppDidMount ] = React.useState(false)
	const [ _loggedIn, _setLoggedIn ] = React.useState(false)
	const [ _stripeSecret, _setStripeSecret ] = React.useState(false)
	const [ _loginError, _setLoginError ] = React.useState(false)
	const [ _pageError, _setPageError ] = React.useState(null)
	const [ _openMenu, _setOpenMenu ] = React.useState({})
	const [ _cart, _setCart ] = React.useState({})
	const [ fetchBusy, setFetchBusy ] = React.useState(false)
	const [ _rooms, _setRooms ] = React.useState({})
	const [ _isMobile, _setIsMobile ] = React.useState(false)
	const [ _adminAuth, _setAdminAuth ] = React.useState(null)

	const router = useRouter()
	try {
		registerCheckLocalStorageSize(window)
		registerCheckMobile(window)
	} catch (err) {
		// fail silently
	}

	React.useEffect(() => {
		if (!appDidMount) {
			setAppDidMount(true)
		} else {
			const mobile = window.mobileCheck()
			_setIsMobile(mobile)
		}
	}, [ appDidMount ])

	React.useEffect(() => {
        const muteLoginErr = () => {
            _setLoginError(null)
        }
        document.addEventListener("mute-login-error", muteLoginErr, { once: true })
    }, [])

	React.useEffect(() => {
		handleSetLoggedIn(pageProps, checkSignedIn, _setLoggedIn)
	}, [ _loggedIn, pageProps._loggedIn ])

	const handleToggleSingleOpenMenu = (e, menu, force) => {
		toggleSingleOpenMenu(e, menu, _openMenu, _setOpenMenu, force)
	}

	React.useEffect(() => {
		handleSetCart(_loggedIn, _setCart)
	}, [ _loggedIn ])

	pageProps._LocalEventEmitter = LocalEventEmitter
	pageProps._loggedIn = _loggedIn
	pageProps._setLoggedIn = _setLoggedIn
	pageProps._stripeSecret = _stripeSecret
	pageProps._setStripeSecret = _setStripeSecret
	pageProps._loginError = _loginError
	pageProps._setLoginError = _setLoginError
	pageProps._pageError = _pageError
	pageProps._setPageError = _setPageError
	pageProps._toggleSingleOpenMenu = handleToggleSingleOpenMenu
	pageProps._openMenu = _openMenu
	pageProps._cart = _cart
	pageProps._rooms = _rooms
	pageProps._isMobile = _isMobile
	pageProps._adminAuth = _adminAuth
	pageProps._setAdminAuth = _setAdminAuth
	pageProps.fetchBusy = fetchBusy
	pageProps.setFetchBusy = setFetchBusy
	pageProps = Object.assign(resolveVariables(), pageProps)

	LocalEventEmitter.unsubscribe('forceUpdateProps')
    LocalEventEmitter.subscribe('forceUpdateProps', e => {
		forceUpdateProps(e, _setCart)
    })

	LocalEventEmitter.unsubscribe('global_event')
	LocalEventEmitter.subscribe('global_event', async e => {
		console.log(e)
		handleGlobalEvent(e, pageProps, fetchBusy, setFetchBusy)
	})

	const [ _socket, setSocket ] = React.useState(null)
	const [ socketTimeout, setSocketTimeout ] = React.useState(null)
	React.useEffect(() => {
		registerSocket(io, _socket, setSocket, socketTimeout, pageProps, setSocketTimeout)
	}, [ _socket, socketTimeout ])

	/**
	 * Tracks user Route change ***Analytics***
	 */
	 React.useEffect(() => {
		const doHandleRouteChange = (route, context) => {
			handleRouteChange(pageProps, route, context)
		}
		router.events.on('routeChangeComplete', doHandleRouteChange)
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [ router.events, pageProps._loggedIn, pageProps.apiUrl, pageProps.domainKey ])

	console.log('Socket', _socket)

  	return (
		<div>
			<Head>
				<meta name="google-signin-client_id" content="169701902623-9a74mqcbqr38uj87qm8tm3190cicaa7m.apps.googleusercontent.com"/>
				<title>{pageProps.siteTitle}</title>
			</Head>
			<>
				<Script src="https://accounts.google.com/gsi/client" async defer></Script>
				<Script strategy="lazyOnload" id='script_one_tap_sign_in' className="lazyOnload">
				{
					registerGoogleSignIn
				}
				</Script>
			</>
			<SocketContainer _socket={_socket} setRooms={_setRooms} {...pageProps}></SocketContainer>
			<div className={`${fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy'}`}></div>
    		<Component _socket={_socket} {...pageProps} />
		</div>
  	)
}

export default MyApp
