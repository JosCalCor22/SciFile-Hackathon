/* Hooks */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { MetaMaskUIProvider } from '@metamask/sdk-react-ui'
/* Components */
import App from './assets/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* SDK Metamask */}
    <MetaMaskUIProvider
      sdkOptions={{
        dappMetadata: {
          name: "SciFile",
          url: window.location.href,
        },
      }}
    >
    {/* Component App */}
      <App />
    </MetaMaskUIProvider>
  </React.StrictMode>,
)
