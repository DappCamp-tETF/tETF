import React, {useState} from 'react';
import { Row, Col} from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import Assets from './Assets';
import { Calc } from './Calc';
import Deposit from './Deposit';


export function Test() {
    const [assets, setAssets] = useState(
        [{name: 'wbtc', addr: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', logo: 'images/btc.svg'},
         {name: 'weth', addr: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', logo: 'images/eth.svg'},
        ]
    );

    return (
        <div  style={styles.con} >
            <Row  className="row h-100 align-middle">
                <Col className="my-auto" >
                    <Row>
                        <Deposit style={styles.test} assets={assets}/>
                    </Row>

                </Col>
                <Col className="my-auto">
                    <Assets style={styles.test} assets={assets}  />
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
        //  {name: 'aave', addr: '0x577D296678535e4903D59A4C929B718e1D575e0A', logo: 'images/aave.svg'},
        //  {name: 'crv', addr: '0x577D296678535e4903D59A4C929B718e1D575e0A', logo: 'images/crv.svg'},
        //  {name: 'ftm', addr: '0x577D296678535e4903D59A4C929B718e1D575e0A', logo: 'images/ftm.svg'},
        //  {name: 'link', addr: '0x577D296678535e4903D59A4C929B718e1D575e0A', logo: 'images/link.svg'},
        //  {name: 'matic', addr: '0x577D296678535e4903D59A4C929B718e1D575e0A', logo: 'images/matic.svg'},
        //  {name: 'avax', addr: '0x577D296678535e4903D59A4C929B718e1D575e0A', logo: 'images/avax.svg'} 