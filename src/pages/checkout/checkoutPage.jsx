import "./checkout.css";
import { CartContext } from "../../context/cartContext";
import { useContext, useEffect } from "react";
import CartItem from "../../comps/cartitem/cartItem";
import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
//import axios from "axios";


function CheckoutPage(){
    const {cartItems, total, calculateTotal, amount, totalAmountItems} = useContext(CartContext);
    const {currentUser} = useContext
    const stripe = useStripe();
    const elements = useElements();

    const navigate = useNavigate();

    useEffect(() => {
        calculateTotal();
        totalAmountItems();
    }, [cartItems])

    const paymentHandler = async() => {
        const url = "http://localhost:8000/v1/pay/stp";
        const res = await fetch(url, {
            method: "post",
            headers: {
                'Content-Type':"application/json"
            },
            body:JSON.stringify({ amount:total }),
        }).then((res) => console.log(res))

        const client_secret = res.message.client_secret

        const paymentResponse = await stripe?.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements?.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.name : "john doe"//currentUser.name
                }
            }
        })
        if(paymentResponse.error){
            console.log(paymentResponse.error);
        }else{
            console.log(paymentResponse)
            console.log(paymentResponse.status)
            if(paymentResponse.paymentIntent.status === "succeeded"){
                alert("payment successful");
                addSaleToDb()
                updateInventory()
                navigate("/");
            }
        }

    }
    const addSaleToDb = async() => {
        const dbUrl = "http://localhost:8000/v2/adminSale/addSale";
        const sales = {
            amount: total,
            items: await getItems()
        }
        const res = await fetch(dbUrl, {
            method: "post",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(sales)
        }).then(res => res.json())
        console.log(res);
    }
    const getItems = async() => {
        const salMap = {}
        cartItems.forEach(item => {
            salMap[item.title] = item.quantity
        })
        return salMap;
    }
    const updateInventory = async() => {
        const dbUrl = "http://localhost:8000/v2/adminSale/udpateInventory";
        const sales = {
            amount: total,
            items: await getItems(),
        }
        const res = await fetch(dbUrl, {
            method: "put",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(sales)
        })

    }
    //<button onClick={addSaleToDb}>db</button>
    //<button onClick={updateInventory}>log</button>
    const getPayment = async(e) =>{
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const num = total * 100
        const res = await fetch("/.netlify/functions/create-payment-intent", {
           method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: num })
        }).then(res => res.json());
        console.log(res)
        const CS = res.paymentIntent.client_secret
        const payamentRes = await stripe.confirmCardPayment(CS, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        })
        if(payamentRes.error){
            alert(payamentRes.error)
        }else{
            if(payamentRes.paymentIntent.status === "succeeded"){
                alert("order sucessful")
            }
        }

    }
    return(
        <div id="checkMain">
            <div id="checkContainer">
            <h2>Checkout</h2>
            <p>Items in your bag are not reserved — check out now to make them yours.</p>
            <div id="checkoutWrapper">
                <div id="lisItems">
                {
                    cartItems.length > 0 ? (
                        cartItems.map((item, idx) => {
                            return(
                                <CartItem key={idx} obj={item}></CartItem>
                            )
                        })
                    ) : (<p>no items in cart</p>)
                }
                </div>
                <div id="checkoutDetails">
                    <h1>Order Summary</h1>
                    <p>Sales Tax: -</p>
                    <p>Delivery: -Free</p>
                    <p>Total Items: {amount}</p>
                    <hr></hr>
                    <p>Total Cost: ${total}</p>
                    <div style={{display:"flex"}}>
                        <input placeholder="Enter Promo Code" id="promo"></input>
                        <span id="promoBtn">+</span>
                    </div>
                    <form>
                        <CardElement id="stripeCard"></CardElement>
                        <span onClick={getPayment} id="checkoutBtn">Checkout</span>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}


export default CheckoutPage;