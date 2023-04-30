import "./navbar.css";
import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from "react";
import { UserContext } from "../../context/userContext";

function NavBar(){
    const {currentUser, setCurrentUser} = useContext(UserContext);
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
    const auth = isAuth()

    return (
        <Fragment>
            <header id="navMain">
                <h4 id="logo">KATSUE</h4>
                <ul>
                    {
                        auth ? (
                           <li><Link to="/admin" id="admin">ADMIN</Link></li>
                        ) : (
                            <li><Link to="/" id="admin"></Link></li>
                        )
                    }
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/shop">SHOPPING</Link></li>
                    <li><Link to="/checkout">CHECKOUT</Link></li>
                    {
                        currentUser ? (
                           <li><Link to="/" onClick={logout}>LOGOUT</Link></li>
                        ) : (
                            <li><Link to="/login">LOGIN</Link></li>
                        )
                    }
                </ul>    
            </header>
            <Outlet></Outlet>
        </Fragment>
    )

}
export default NavBar;