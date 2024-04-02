import './App.css';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import React, {useState} from "react";
import simpleData from "./sampleData";

function App(){

    const [shoes] = useState(simpleData);

    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Jun's Shopping Mall</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className="main-backgroundImage"></div>
            <br/>

            <Container>
                <Row>
                    {
                        shoes.map((data, i) => {
                            return (
                                <Card shoes={shoes[i]} i={i}/>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    );

}

const Card = (props) => {

    return (
        <Col>
            <img src={props.shoes.image} alt="img" width="80%" height="80%"/>
            <h5>{props.shoes.title}</h5>
            <p>{props.shoes.price}</p>
        </Col>
    )

}

export default App;
