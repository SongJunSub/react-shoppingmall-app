import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Nav} from "react-bootstrap";

const Detail = (props) => {

    const {id} = useParams();
    const data = props.shoes.find(x => x.id === id);
    const [count, setCount] = useState(0);
    const [alert, setAlert] = useState(true);
    const [tab, setTab] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {setAlert(false)}, 2000);

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    return (
        <div className="container">
            {
                alert === true ? <div className="alert alert-warning">2초 이내 구매 시 할인</div> : null
            }

            {/*{count}
            <button onClick={() => {setCount(count + 1)}}>Button</button>*/}

            <div className="row">
                <div className="col-md-6">
                    <img src={props.shoes[id].image} alt="image" width="100%"/>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}</p>
                    <button className="btn btn-danger">Order</button>
                </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(0)}} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(1)}} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(2)}} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tab={tab} shoes={props.shoes}/>
        </div>
    )

}

const TabContent = ({tab, shoes}) => {

    const [fade, setFade] = useState("");

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setFade("end");
        }, 10)

        return () => {
            clearTimeout(timeOut);
            setFade("");
        }
    }, [tab]);

    return (
        <div className={"start " + fade}>
            {
                [<div>{shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div>][tab]
            }
        </div>
    )

}

export default Detail;