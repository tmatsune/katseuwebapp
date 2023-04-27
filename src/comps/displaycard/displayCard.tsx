import "./displayCard.css";
import SHIRT from "../../images/shirt6.webp"
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";

type objClothes = {
    obj: {
        title: string;
        cost: number;
        quantity: number;
        img: string;
    }
}
function DisplayCard( {obj}:objClothes ){//props : clothesObj
    const {addItem} = useContext(CartContext);

    const plusItem = () => {
        const data = {
            title: obj.title,
            cost: obj.cost,
            quantity: obj.quantity,//1,
            img: obj.img
        }
        addItem(data);
    }

    return (
        <div id="card">
            <div id="dot1"></div>
            <div id="cardProps">
                <img alt="" id="cardImg" src={obj.img}></img>
                <div id="cardDetails">
                    <h3>{obj.title}</h3>
                    <p>Cost: {obj.cost}</p>
                    <p>In Stock: {obj.quantity}</p>
                </div>
            </div>
            <span onClick={plusItem} id="addToCart">Add to Cart</span>
        </div>
    )

}
export default DisplayCard