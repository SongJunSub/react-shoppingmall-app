import './App.css';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import React, {createContext, useEffect, useState} from "react";
import simpleData from "./sampleData";
import {Link, Outlet, Route, Routes, useNavigate} from "react-router-dom";
import Detail from "./routes/Detail";
import axios from "axios";
import Cart from "./routes/Cart";
import {useQuery} from "react-query";

export const Context1 = createContext();

function App(){

    /*const object = {name: "kim"};
    localStorage.setItem("data", JSON.stringify(object));
    const result = localStorage.getItem("data");
    const parsedResult = JSON.parse(result).name;*/

    /*useEffect(() => {
        localStorage.setItem("watched", JSON.stringify([]));
    }, []);*/

    const [shoes, setShoes] = useState(simpleData);
    const navigate = useNavigate();
    const [inventory] = useState(10, 11, 12);

    const userData = useQuery("userData", () => {
        return axios.get("https://codingapple1.github.io/userdata.json")
            .then((a) => {
                return a.data;
            })
    })

    return (
        <div className="App">
            <Navbar bg="white" data-bs-theme="white">
                <Container>
                    <Navbar.Brand onClick={() => {navigate("/")}}>Jun's Shopping Mall</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => {navigate("/detail")}}>Detail</Nav.Link>
                        <Nav.Link onClick={() => {navigate("/cart")}}>Cart</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        {userData.isLoading && "Loading..."}
                        {userData.data && "반가워요, " + userData.data.name + "님"}
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
                    <Detail shoes={shoes}/>
                }/>

                <Route path="/cart" element={
                    <Cart/>
                }/>
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