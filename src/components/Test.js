import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

export function Test() {

    return (
        <div  style={styles.con} >
            <Row  className="row h-100 align-middle">
                <Col className="my-auto" >
                    <div style={styles.test}>Card</div>
                </Col>
                <Col className="my-auto" >
                    <div style={styles.test}>Card</div>
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
        height: '100vh'
    }
}
//className="row h-100 align-middle"
//className="card card-block w-75 mx-auto"