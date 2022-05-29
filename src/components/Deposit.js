import React, {useState} from 'react';
import { Form, Button, Table, Row, Col } from 'react-bootstrap';
import Asset from './Asset';
import { Calc } from './Calc'

function Deposit(props) {
    const [myInvest, setMyInvest] = useState('0')

    const handleChange = event => setMyInvest(event.target.value)
    return ( 
        <div className='cardStyle' style={props.style} >
            <div className='container'>
                <div className="input-group mb-3" style={styles.assets}>
                    <input type="text" className="form-control" placeholder="How much USDC do you want to invest" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleChange} />
                        <div className="input-group-append">
                            <button className="btn btn btn-primary" type="button">Invest</button>
                        </div>
                </div>
            </div>
            {/* <div className='container' style={styles.assets}>
                <div className='row mx-auto'>
                {props.assets && props.assets.map(asset => <Calc asset={asset} />)}
                </div> 
            </div> */}
            <Row className="ml-1">
                <Col className="align-self-end">
                <Table size="sm" borderless>
                    <tbody>
                        {props.assets && props.assets.map(asset => <Calc asset={asset} principle={myInvest} />)}
                    </tbody>
                </Table>
                </Col> 
 
            </Row>
        </div>
     );
}

export default Deposit;

const styles= {
    assets: {
        marginTop: '10%'
    }
}

