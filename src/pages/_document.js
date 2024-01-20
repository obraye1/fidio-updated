import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Script
            src='https://unpkg.com/@glidejs/glide'
            crossorigin='anonymous'
            strategy='beforeInteractive'
          ></Script>
          <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"></link>
          <script src="//js.paystack.co/v1/inline.js"></script>
        </Head>
        <body>
          <div version='0.3.18' style={{ display: 'none' }}></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument