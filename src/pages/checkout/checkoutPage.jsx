import "./checkout.css";
import { CartContext } from "../../context/cartContext";
import { useContext, useEffect } from "react";
import CartItem from "../../comps/cartitem/cartItem";
import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";

function CheckoutPage(){
    const {cartItems, total, calculateTotal, amount, totalAmountItems} = useContext(CartContext);
    const {currentUser} = useContext
    const stripe = useStripe();
    const elements = useElements();

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
        }).then((res) => res.json())

        const client_secret = res.message.client_secret
        
        console.log(res.message.client_secret);
        //console.log(res);
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
            }
        }

    }


    return(
        <div id="checkMain">
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
                    <CardElement id="stripeCard"></CardElement>
                    <span onClick={paymentHandler} id="checkoutBtn">Checkout</span>
                </div>
            </div>
        </div>
    )
}


export default CheckoutPage;