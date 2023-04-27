
import {createContext, useState} from "react"
import React from "react";

type cartItemLis = {
    title: string;
    cost: number;
    quantity: number
}[]
type itemType = { title: string; cost: number; quantity: number}
type CartProviderProps = {
    children : React.ReactNode
}

type CartType = {
    cartItems: cartItemLis | [];
    setCartItems: React.Dispatch<React.SetStateAction<cartItemLis|[]>>
    addItem: (itemToAdd: itemType) => void;
    remItem: (itemToRem: itemType) => void;
    total: number;
    calculateTotal: () => void;
    amount: number;
    totalAmountItems: ()=> void
}

const addItemToCart = (cartItems:cartItemLis, itemAdding:itemType) => {
    const itemInCart = cartItems.find(item => 
        item.title === itemAdding.title
    )
    if(itemInCart ){
        return cartItems.map(item => 
            item.title === itemAdding.title && item.quantity < 5 ? {...item, quantity: item.quantity + 1} : item
        )//&& item.quantity < itemAdding.quantity
    }
    return [...cartItems, {...itemAdding, quantity: 1}]
}
const removeItem = (cartItems:cartItemLis, itemRemoving:itemType) => {
    const items:cartItemLis = [];
    cartItems.forEach(item => {
        if(item.title !== itemRemoving.title){
            items.push(item);
        }if(item.title === itemRemoving.title && item.quantity > 1){
            items.push({...item, quantity: item.quantity -= 1})
        }
    })
    return items
}
const calcTotal = (cartItems: cartItemLis) => {
    var total:number = 0;
    cartItems.forEach(item => {
        var itemAmount:number = item.cost * item.quantity
        total += itemAmount
    })
    return total;
}
const totalItems = (cartItems: cartItemLis) => {
    var amount:number = 0;
    cartItems.forEach(item => {
        var numItems:number = item.quantity;
        amount += numItems;
    })
    return amount;
}

export const CartContext = createContext({} as CartType);

export const CartProvider = ({children}: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<cartItemLis>([]);
    const [total, setTotal] = useState<number>(0);
    const [amount, setAmount] = useState<number>(0)

    const addItem = (itemToAdd: itemType) => {
        setCartItems(addItemToCart(cartItems, itemToAdd));
    }
    const remItem = (itemToRem: itemType) => {
        setCartItems(removeItem(cartItems, itemToRem));
    }
    const calculateTotal = () => {
        setTotal(calcTotal(cartItems));
    }
    const totalAmountItems = () => {
        setAmount(totalItems(cartItems));
    }


    const value={cartItems, addItem, setCartItems, remItem, calculateTotal, total, amount, totalAmountItems};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}