import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Asset from './Asset';

function Deposit(props) {
    return ( 
        <div className='cardStyle' style={props.style} >
            <div className='container'>
                <div className="input-group mb-3" style={styles.assets}>
                    <input type="text" className="form-control" placeholder="How much USDC do you want to invest" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn btn-primary" type="button">Button</button>
                        </div>
                </div>
            </div>
            <div className='container' style={styles.assets}>
                <div className='row mx-auto'>
                    {props.assets.map( asset => <Asset assets={asset} setMyAssets={props.setMyAssets} />)}
                </div>
            </div>
        </div>
     );
}

export default Deposit;

const styles= {
    assets: {
        marginTop: '10%'
    }
}