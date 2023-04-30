import { Outlet, Navigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

function ProtectedRoute(){
    const {currentUser} = useContext(UserContext);
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

    return(
        auth ? (<Outlet></Outlet>) : (<Navigate to="/"></Navigate>)
    )
}
export default ProtectedRoute;