import "./cartItem.css"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import IMG from "../../images/hoodie.png"

type cartData = {
    obj: {
        title:string;
        cost:number;
        quantity:number;
        img:string;
    }
}

function CartItem( {obj}:cartData ){
    const {remItem, addItem, } = useContext(CartContext);

    const remove = () => {
        const data = {title: obj.title, cost: obj.cost, quantity: 1 };
        remItem(data);
    }
    const add = () => {
        const data = {title: obj.title, cost: obj.cost, quantity: 1 };
        addItem(data);
    }

    return(
        <div id="cartItem">
            <img id="cartItemImg" alt="" src={obj.img}></img>
            <div id="cartItemDetails">
                <h4>{obj.title}</h4>
                <p>Cost: ${obj.cost} X {obj.quantity}</p>
            </div>

            <div id="remAdd">
                <span id="addBtn" onClick={add}>+</span>
                <span id="remBtn" onClick={remove}>-</span>
            </div>
            <div id="dot2"></div>
        </div>
    )
}
export default CartItem;