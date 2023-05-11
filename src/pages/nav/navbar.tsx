import "./navbar.css";
import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import FooterPage from "../footerpage/footerPage";
import CART from "../../images/cart.png"
import { CartContext } from "../../context/cartContext";
import Cart from "../../comps/cartbox/cartBox";

function NavBar(){
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const {cartItems} = useContext(CartContext)

    const logout = () => {
        setCurrentUser(null);
    }
    const isAuth = () => {
        if(currentUser){
            if(currentUser.email === "terence@gmail.com"){
                return true;
            }else{
                return false;
            }
        } 
    }
    const auth = isAuth();

    const [active, setActive] = useState(true);
    const toggleBtn = () => {
        setActive(!active); 
        //console.log(active)
    };
    const [show, setShow] = useState(false)
    const toggle = () => {
        setShow(!show)
    }

    return (//id="navMain"
        <Fragment>
            <div id="hamburger" onClick={toggleBtn}>
                <span id="ham" ></span>
                <span id="ham" ></span>
                <span id="ham" ></span>
            </div>
            <header id={active ? 'navMain' : 'navMain1'}>
                <h4 id="logo">KATSUE</h4>
                <ul id="navMainul">
                    {
                        auth ? (
                           <li id="navMainli"><Link to="/admin" id="admin">ADMIN</Link></li>
                        ) : (
                            null
                        )
                    }
                    <li id="navMainli"><Link to="/" id="navMainA">HOME</Link></li>
                    <li id="navMainli"><Link to="/shop" id="navMainA">SHOPPING</Link></li>
                    <li id="navMainli"><Link to="/checkout" id="navMainA">CHECKOUT</Link></li>
                    {/*
                        currentUser ? (
                           <li id="navMainli"><Link to="/" onClick={logout} id="navMainA">LOGOUT</Link></li>
                        ) : (
                            <li id="navMainli"><Link to="/login" id="navMainA">LOGIN</Link></li>
                        )*/
                    }
                    <img alt='' id="cart" src={CART} onClick={toggle}></img>
                    <h3 id="numItems">{cartItems.length}</h3>
                </ul>  
                <div id="cartDrop" style={show ? {top:90} : {top:-600}}>
                    <Cart></Cart>
                </div>  
            </header>
            <Outlet></Outlet>
            <Fragment>
                    <FooterPage></FooterPage>
            </Fragment>
        </Fragment>
    )

}
export default NavBar;