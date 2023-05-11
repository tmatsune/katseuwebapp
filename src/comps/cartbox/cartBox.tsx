import "./cartbox.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
type topCart = {
        title:string,
        cost:number,
        quantity:number,
        img:string
}
function Cart(){
    useState()
    const {cartItems, addItem, remItem} = useContext(CartContext);
    const remove = (item:topCart) => {
        const data = {title: item.title, cost: item.cost, quantity: 1, img:''}
        remItem(data);
    }
    const add = (item:topCart) => {
        const data = {title: item.title, cost: item.cost, quantity: 1, img:''}
        addItem(data);
    }
 
    return(
        <div id="cartMain">
            {
                cartItems.map((item, idx) => {
                    console.log(item)
                    return(
                        <div key={idx} id="topCartWrapper">
                            <div id="topCartImg" style={{backgroundImage:`url(${item.img})`}}></div>
                            <div id="topCartDesc">
                                <h3>{item.title}</h3>
                                <p>amount: {item.quantity}</p>
                                <div>
                                    <button id="ad" onClick={() => add(item)}>+</button>
                                    <button id="ad" onClick={() => remove(item)}>-</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart;