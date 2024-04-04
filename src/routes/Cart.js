import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {changeName} from "../store";

const Cart = () => {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                {
                    state.cart.map((result, i) =>
                        <tr key={i}>
                            <td>{state.cart[i].id}</td>
                            <td>{state.cart[i].name}</td>
                            <td>{state.cart[i].count}</td>
                            <td>
                                <button onClick={() => {
                                    dispatch(changeName());
                                }}>+</button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </div>
    )

}

export default Cart;