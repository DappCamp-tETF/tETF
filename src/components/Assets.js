import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Asset from './Asset';
import { useAccount, useEnsName, useBalance } from 'wagmi'
import { Badge } from 'react-bootstrap'
import { trim } from '../utils/helpers'

function Assets(props) {

    // const { data, isError, isLoading } = useAccount({
    //     suspense: true,
    // })

    // const balance = useBalance({
    //     addressOrName: data?.address,
    //     watch: true,
    //     token: '0xeb8f08a975Ab53E34D8a0330E0D34de942C95926'
    // })
    // console.log(balance)
    return ( 
        <div className='cardStyle' style={props.style}>
            <div className='container'>
                <div className='row'>
             
                        <div style={styles.assets}>My Wallet</div> 
                  
                </div>
                <div className='row'>
                {/* {balance.data.formatted ? USDC : ''} */}

                </div>
            </div>
            {/* <div className='container' style={styles.assets}>
                <div className='row'>
                    <div className='col'>
                        {props.assets && props.assets.map(asset => <Asset assets={asset} setMyAssets={props.setMyAssets} />)}
                    </div>
                </div>
            </div> */}
        </div>
     );
}

export default Assets;

const styles= {
    assets: {
        marginTop: '10%'
    }
}