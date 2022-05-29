import React from 'react';
import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Row, Image } from 'react-bootstrap';
import { computeShareAmt } from '../utils/helpers'





    export const apolloClient = new ApolloClient({
        link: new HttpLink({
          uri: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
        }),
        fetchOptions: {
          mode: "no-cors",
        },
        cache: new InMemoryCache(),
      });
      
      const TOKEN_QUERY = gql`
        query tokens($tokenAddress: Bytes!) {
          tokens(where: { id: $tokenAddress }) {
            derivedETH
            totalLiquidity
          }
        }
      `;
      
      const ETH_PRICE_QUERY = gql`
        query bundles {
          bundles(where: { id: "1" }) {
            ethPrice
          }
        }
      `;
      
     export function Calc(props) {
        const { loading: ethLoading, data: ethPriceData } = useQuery(
          ETH_PRICE_QUERY,
          {
            pollInterval: 1000,
          }
        );
        const { loading: tokenLoading, data: tokenData } = useQuery(TOKEN_QUERY, {
          variables: {
            tokenAddress: props.asset.addr,
          },
          pollInterval: 1000,
        });
      
        const daiPriceInEth = tokenData && tokenData.tokens[0].derivedETH;
        const daiTotalLiquidity = tokenData && tokenData.tokens[0].totalLiquidity;
        const ethPriceInUSD = ethPriceData && ethPriceData.bundles[0].ethPrice;
      


    return ( 
        <tr key={props.asset.addr} className="d-flex justify-content-center">
          <th scope='row' style={styles.textColor}><Image src={props.asset.logo} style={styles.logo} /> {" "}is currently </th>
          <td style={styles.textColor}>
            {ethLoading || tokenLoading
              ? "Loading token data..."
              : "$" +
                // parse responses as floats and fix to 2 decimals
                (parseFloat(daiPriceInEth) * parseFloat(ethPriceInUSD)).toFixed(
                  2
                )} USDC
          </td>
          <td style={styles.textColor}>
                    and you will receive 
          </td>
          <td style={styles.textColor}>
             
                  {parseInt(props.principle) > 0 ? computeShareAmt(props.principle, (parseFloat(daiPriceInEth) * parseFloat(ethPriceInUSD)).toFixed(
                  2))  : '---'}
          </td>
          <td style={styles.textColor}>
          {parseInt(props.principle) > 0 ? props.asset.name : ''}
          </td>
        </tr>
     );
}



const styles = {
    cards: {
        height: '100px',
        width: '100px',
        display: 'inline-block'
    },
    logo: {
        height: '25px',
        width: '25px'
    },
    name: {
        fontSize: '14px'
    },
    textColor: {
        color: 'white'
    },
}