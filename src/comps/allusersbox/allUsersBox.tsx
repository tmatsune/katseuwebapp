import "./allUsersBox.css";
import { useState, useEffect} from "react";
import REM from "../../images/delete.png"

type UserLis = {
    lisObj : {
        name: string;
        username: string;
        email: string;
    }[]
}
type User = { name: string; username: string; email: string; }

function AllUsersBox(){

    const [loading, setLoading] = useState<boolean>(false);
    const [allUsers, setAllUsers] = useState<User[]>([])

    const url = "http://localhost:8000/v2/adminUsers/adminRemUser";
    const remUser = async(email:string) => {
        await fetch(url, {
            method: "post",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({"email": email})
        }).then(res => res.json())
        getUsers()
    }

    const getUsers = async() => {
        setLoading(true)
        const url = "http://localhost:8000/v2/adminUsers/getAllUsers";
        const res = await fetch(url, {
            method: "get",
            headers: {
                "Content-Type":"application/json"
            },
        }).then((res) => res.json());
        setAllUsers(res);
        setLoading(false);
    }
    useEffect(() => {
        getUsers();
    },[])

    return (
        <div id="userBox">
            <h3>USERS</h3>
            <hr></hr>
            <div id="insideBox">
            {
                loading ? (<p>...loading</p>) : (
                allUsers.map((user, idx) => {
                    return (    
                        <div key={idx} style={{display:"flex"}}>
                            <div id="usr">
                                <p >{user.name}</p>
                            </div>
                            <div id="usr">
                                <p >{user.username}</p>
                            </div>
                            <div id="usr">
                                <p>{user.email}</p>
                            </div>
                            <img onClick={() => remUser(user.email)} src={REM} alt="" id="rem" ></img>
                        </div>
                        )
                    })
                )
                }
            {/*
                lisObj.map((user, idx) => {
                    return (
                        <div key={idx} style={{display:"flex"}}>
                            <div id="usr">
                                <p >{user.name}</p>
                            </div>
                            <div id="usr">
                                <p >{user.username}</p>
                            </div>
                            <div id="usr">
                                <p>{user.email}</p>
                            </div>
                            <button onClick={() => remUser(user.email)}>REM</button>

                        </div>
                    )
                })
            */}
            </div>
        </div>
    )
}
export default AllUsersBox;