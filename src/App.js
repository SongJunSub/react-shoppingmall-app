import './App.css';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import React, {useState} from "react";
import simpleData from "./sampleData";
import {Link, Outlet, Route, Routes, useNavigate} from "react-router-dom";
import Detail from "./routes/Detail";

function App(){

    const [shoes] = useState(simpleData);
    const navigate = useNavigate();

    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand onClick={() => {navigate("/")}}>Jun's Shopping Mall</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => {navigate("/detail")}}>Detail</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={
                    <>
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

                        <button onClick={() => {

                        }}>Button
                        </button>
                    </>
                }/>

                <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
            </Routes>
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
