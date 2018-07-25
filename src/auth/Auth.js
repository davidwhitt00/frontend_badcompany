import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Members from './Members';
import './auth.css';


const Auth = (props) => {
    return (
        <Container className="auth-container">
            <Row md="12">
                <Col md="6">
                    <Signup setToken={props.setToken}/>
                </Col>   
            
            
                <Col md="6" className="login-col">
                    <Members setToken={props.setToken}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;