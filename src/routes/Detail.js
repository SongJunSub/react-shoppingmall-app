import React from "react";
import {useParams} from "react-router-dom";

const Detail = (props) => {

    const {id} = useParams();
    const data = props.shoes.find((x) => {
        return x.id === id;
    });

    return (
        <div className="container">
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