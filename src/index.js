import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    WagmiConfig,
    configureChains,
    createClient,
    defaultChains,
  } from 'wagmi'
  import { alchemyProvider } from 'wagmi/providers/alchemy'
  import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
  import { InjectedConnector } from 'wagmi/connectors/injected'
  import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
  import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
  
  import { Buffer } from 'buffer'
  


  
  // polyfill Buffer for client
  if (!window.Buffer) {
    window.Buffer = Buffer
  }
  
  const alchemyId = process.env.REACT_APP_ALCHEMY_ID
  
  const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
    alchemyProvider({ alchemyId }),
  ])
  
  const client = createClient({
    autoConnect: true,
    connectors: [
      new MetaMaskConnector({ chains }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: 'wagmi',
        },
      }),
      new WalletConnectConnector({
        chains,
        options: {
          qrcode: true,
        },
      }),
      new InjectedConnector({
        chains,
        options: {
          name: 'Injected',
          shimDisconnect: true,
        },
      }),
    ],
    provider,
    webSocketProvider,
  })

ReactDOM.render(
   <React.StrictMode>
    <WagmiConfig client={client}>
      <App />
    </WagmiConfig>
  </React.StrictMode>,
  document.getElementById('root')
);
