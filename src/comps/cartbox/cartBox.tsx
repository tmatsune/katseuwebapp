import "./cartbox.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

function Cart(){
    const {cartItems} = useContext(CartContext);

    return(
        <div id="cartMain">
            {
                cartItems.map((item, idx) => {
                    return(
                        <div key={idx}>
                            <p>{item.title}</p>
                            <p>amount: {item.quantity}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Cart;