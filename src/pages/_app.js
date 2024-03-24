/* AVOID EDITING THIS FILE. DEFAULT APPLICATION ENTRY. MANIPULATE customModules/middleware/Middleware.js FILE FOR MIDDLEWARE LOGIC. If files missing run node init_app.js */

import React from 'react';
import '../styles/globals.scss'; // Place style import declarations in /styles/styles.scss and actual style css files under /styles/appstyles/
import '../styles/features/tailwind.css';
import { Internal } from '/modules/internal/';
import { ThemeProvider } from '../components/provider';

function MyApp({ Component, pageProps }) {
  return (
    <div className='antialiased'>
      <ThemeProvider attribute='class' defaultTheme='dark'>
        <Internal {...pageProps} _MasterPageComponent={Component} />
      </ThemeProvider>
    </div>
  );
}
export default MyApp;
