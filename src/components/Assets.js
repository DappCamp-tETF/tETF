import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Asset from './Asset';
import  Calc  from './Calc';
function Assets(props) {
    return ( 
        <div className='cardStyle' style={props.style}>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                    {props.assets && props.assets.map(asset => <Calc assets={asset} setMyAssets={props.setMyAssets} />)}
                    </div>
                </div>
            </div>
            <div className='container' style={styles.assets}>
                <div className='row'>
                    <div className='col'>
                        {props.assets && props.assets.map(asset => <Asset assets={asset} setMyAssets={props.setMyAssets} />)}
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Assets;

const styles= {
    assets: {
        marginTop: '20%'
    }
}