import './App.css';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import React, {createContext, useState} from "react";
import simpleData from "./sampleData";
import {Link, Outlet, Route, Routes, useNavigate} from "react-router-dom";
import Detail from "./routes/Detail";
import axios from "axios";

export const Context1 = createContext();

function App(){

    const [shoes, setShoes] = useState(simpleData);
    const navigate = useNavigate();
    const [inventory] = useState(10, 11, 12);

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

                                {
                                    shoes.map((data, i) => {
                                        return (
                                            <Card shoes={shoes[i]} i={i}/>
                                        )
                                    })
                                }

                        </Container>

                        <button onClick={() => {
                            axios.get("https://codingapple1.github.io/shop/data2.json")
                                .then((result) => {
                                    const copy = [...shoes, ...result.data];

                                    setShoes(copy);
                                })
                                .catch(() => {
                                    console.log("Error");
                                })
                        }}>더보기</button>
                    </>
                }/>

                <Route path="/detail/:id" element={
                    <Context1.Provider value={{inventory}}>
                        <Detail shoes={shoes}/>
                    </Context1.Provider>
                }/>
            </Routes>
        </div>
    );

}

const Card = (props) => {

    return (
        <Row>
            <Col>
                <img src={props.shoes.image} alt="img" width="80%" height="80%"/>
                <h5>{props.shoes.title}</h5>
                <p>{props.shoes.price}</p>
            </Col>
        </Row>
    )

}

export default App;
