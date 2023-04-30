
import axios from "axios";
import { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import "./login.css";

function LoginPage(){
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const {setCurrentUser} = useContext(UserContext);
    
    function resetvals():void{
        setName("");
        setUsername("");
        setEmail("");
        setPass("");
    }
    const createUser = async() => {
        const url = "http://localhost:8000/v1/users/createUser";
        const logInData = {
            "name": name,
            "username": username,
            "email": email,
            "password": pass
        }
        try{
            const data = await axios.post(url, logInData);
            setCurrentUser(data.data);
            resetvals();
        }catch(err){
            console.log(err);
            alert("invalid password or email");
        }     
    }
    //<button onClick={()=>{console.log(currentUser)}}>check</button>
    return(
        <div id="loginMain">
            <h2>SIGN IN</h2>
        <div id="logWrapper">
            <div id="create">
                <h2>CREATE ACCOUNT</h2>
                <hr></hr>
                <div>
                    <p>Name</p>
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="name"></input>
                </div>
                <div>
                    <p>Username</p>
                    <input value={username} onChange={e => setUsername(e.target.value)} placeholder="username"></input>
                </div>
                <div>
                    <p>email</p>
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="email"></input>
                </div>
                <div>
                    <p>password</p>
                    <input value={pass} onChange={e => setPass(e.target.value)} placeholder="password" type="password"></input>
                </div>
                <span id="createBtn" onClick={createUser}>CREATE ACCOUNT</span>
            </div>
            <LogIn></LogIn>
        </div>
        </div>
    )
}
function LogIn(){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const {setCurrentUser} = useContext(UserContext);

    const logInUser = async() => {
        const url = "http://localhost:8000/v1/users/loginUser";
        const logInData = {
            "email": email,
            "password": pass
        }
        try{
            const data = await axios.post(url, logInData);
            console.log(data.data);
            setCurrentUser(data.data);
            setEmail("");
            setPass("");
        }catch(err){
            console.log(err);
            alert("invalid password or email!");
        } 
    }
    return(
            <div id="login">
                <h2>LOG IN</h2>
                <hr></hr>
                <div>
                    <p>Email</p>
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="email" type="email"></input>
                </div>
                <div>
                    <p>Password</p>
                    <input value={pass} onChange={e => setPass(e.target.value)} placeholder="password" type="password"></input>
                </div>
                <span id="signBtn" onClick={logInUser}>SIGN IN</span>
            </div>
    )
}
export default LoginPage;