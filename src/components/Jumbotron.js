import React from "react";
import {Row, Col, Container } from "react-bootstrap";
import { ArrowRightSquareFill } from 'react-bootstrap-icons';
import { ReactComponent as USDC } from '../assets/usd-coin-usdc-logo.svg'


export function Jumbo(props) {
  return (
    <Container fluid >
        <Row className="d-flex justify-content-between cardStyle" style={styles.jumbo}>
            <Row className="d-flex justify-content-between ">
                <Col>
                    <div className="logo-font">
                        <h1 className="shopifyFont">Welcome to tETF</h1>
                    </div>
                </Col>
            </Row>
        <Row className="d-flex justify-content-between text-center mx-auto align-items-center" >
            <div className="col-3" style={styles.explainer}>
                <Row className="centerRow">
                    <Col>
                        Deposit USDC
                    </Col>
                </Row>
                <Row className="mx-auto">
                    <Col className="my-auto">
                        <USDC style={styles.token} />
                    </Col>
                </Row>
            </div>
            <div className="col-1 " style={styles.explainer}>
                <ArrowRightSquareFill className="vertical" size={75}/>
            </div>
            <div className="col-3" style={styles.explainer}>
                <Row className="centerRow">
                    <Col>
                        Select Assets
                    </Col>
                </Row>
                <Row className="mx-auto">
                    <Col className="my-auto">
                        <USDC style={styles.token} />
                    </Col>
                </Row>
            </div>
            <div className="col-1" style={styles.explainer}>
                <ArrowRightSquareFill className="vertical" size={75}/>
            </div>
            <div className="col-3" style={styles.explainer}>
                <Row className="centerRow">
                    <Col>
                        Deposit USDC
                    </Col>
                </Row>
                <Row className="mx-auto">
                    <Col className="my-auto">
                        <USDC style={styles.token} />
                    </Col>
                </Row>
            </div>
        </Row>
        </Row>
    </Container>
  );
}
const styles = {
    jumbo: {
        backgroundColor: 'red',
        marginTop: '5%',
    },
    explainer: {
        height: '20vh',
        backgroundColor: 'green',
        alignItems: 'center'

    },
    containerCol: {
     width: '100%',
     textAlign: 'center'
    },
    token: {
        height: '50%',
        width: '50%'
    },
    centerRow: {
        width: '100%',
        textAlign: 'center',
        display: 'inline-block'
    }
}