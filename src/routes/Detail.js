import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Detail = (props) => {

    const {id} = useParams();
    const data = props.shoes.find(x => x.id === id);
    const [count, setCount] = useState(0);
    const [alert, setAlert] = useState(true);

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
            {count}
            <button onClick={() => {setCount(count + 1)}}>Button</button>
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
        </div>
    )

}

export default Detail;