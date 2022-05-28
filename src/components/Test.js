import React, {useState} from 'react';
import { Row, Col} from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import Assets from './Assets';
import Deposit from './Deposit';


export function Test() {
    const [assets, setAssets] = useState(
        [{name: 'wbtc', addr: '0x577D296678535e4903D59A4C929B718e1D575e0A', logo: 'images/btc.svg'},
         {name: 'weth', addr: '0x577D296678535e4903D59A4C929B718e1D575e0A', logo: 'images/eth.svg'},
         {name: 'aave', addr: '0x577D296678535e4903D59A4C929B718e1D575e0A', logo: 'images/aave.svg'},
         {name: 'crv', addr: '0x577D296678535e4903D59A4C929B718e1D575e0A', logo: 'images/crv.svg'},
         {name: 'ftm', addr: '0x577D296678535e4903D59A4C929B718e1D575e0A', logo: 'images/ftm.svg'},
         {name: 'link', addr: '0x577D296678535e4903D59A4C929B718e1D575e0A', logo: 'images/link.svg'},
         {name: 'matic', addr: '0x577D296678535e4903D59A4C929B718e1D575e0A', logo: 'images/matic.svg'},
         {name: 'avax', addr: '0x577D296678535e4903D59A4C929B718e1D575e0A', logo: 'images/avax.svg'}    
        ]
    );
    const [myAssets, setMyAssets] = useState([])

    return (
        <div  style={styles.con} >
            <Row  className="row h-100 align-middle">
                <Col className="my-auto" >
                    <Deposit style={styles.test} assets={assets} setMyAssets={setMyAssets}/>
                </Col>
                <Col className="my-auto">
                    <Assets style={styles.test} assets={myAssets}  />
                </Col>
            </Row>
        </div>
    )
}

const styles = {
    test: {
        backgroundColor: 'black',
        height: '40vh'
    },
    con: {
        height: '50vh'
    }
}
//className="row h-100 align-middle"
//className="card card-block w-75 mx-auto"