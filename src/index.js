import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client'
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
  import { ApolloProvider } from '@apollo/client';
  import { apolloClient } from './components/Calc'

const myvar = process.env.REACT_APP_API_KEY
const container = document.getElementById('root')
const root = createRoot(container)

// polyfill Buffer for client
if (!window.Buffer) {
    window.Buffer = Buffer
  }
  
  const alchemyId = 'LC41wuWL0Es9BlPEnZnI5nCRSN8ZPjfJ'
  
  const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
    alchemyProvider({ alchemyId }),
  ])
  
  const client = createClient({
    autoConnect: true,
    connectors: [
        new InjectedConnector({
            options: {
              shimDisconnect: false,
            },
          })
    ],
    provider,
    webSocketProvider,
  })
root.render(
    <ApolloProvider client={apolloClient}>
<WagmiConfig client={client}>
    <App />
</WagmiConfig>
</ApolloProvider>
)
