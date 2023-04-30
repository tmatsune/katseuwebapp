

import "./adminPage.css"
import AllUsersBox from "../../comps/allusersbox/allUsersBox";
import AllSales from "../../comps/allsalesbox/allSalesBox";
import { useState, useEffect } from "react";
import BarChart from "../../comps/barchart/barChart";
import { getSalesTotal, avgSalePrice } from "../../utils/salesData";
import DonutChart from "../../comps/donutchart/donutChart";
import RevenueDetails from "../../comps/revenuedetails/revenueDetails";

var users = [
    {name:"terence", username:"terencematsune", email:"terence@gmail.com"},{name:"dean", username:"deanematsune", email:"dean@gmail.com"},
    {name:"joe", username:"joeksfsdf", email:"joe@gmail.com"},{name:"bob", username:"tbobne", email:"bob@gmail.com"},
    {name:"joe", username:"joeksfsdf", email:"joe@gmail.com"},{name:"bob", username:"tbobne", email:"bob@gmail.com"},
]

var sales = [
    {amount:40, items:{"Shirt0":1, "Shirt1":1}, },{amount:50, items:{"Shirt4":1, "Shirt3":1},},
    {amount:46, items:{"Shirt2":2, "Shirt3":1},},{amount:38, items:{"Shirt0":1, "Shirt1":1},}
    ,{amount:38, items:{"Shirt0":1, "Shirt1":1},},{amount:38, items:{"Shirt0":1, "Shirt1":1},}
    ,{amount:38, items:{"Shirt0":1, "Shirt1":1},},{amount:38, items:{"Shirt0":1, "Shirt1":1},}
]

/*
var sales = [
    {amount:40, items:{"Shirt2": 1}, },{amount:50, items:{"Shirt0": 1},},
    {amount:46, items:{"Shirt1": 2},},{amount:38, items:{"Shirt1": 1},}
]
*/



function AdminPage(){
    const [alUsers, setAllUsers] = useState([]);
    const [allSales, setAllSales] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalSales, setTotalSales] = useState<number>(0);

    useEffect(() => {
        //getUsers();
        getAllSales();
    }, [])
    /*
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
    */

    const getAllSales = async() => {
        const url = "http://localhost:8000/v2/adminSale/getAllSales";
        setLoading(true)
        const res = await fetch(url, {
            method: "get",
            headers: {
                "Content-Type":"application/json"
            },
        }).then((res) => res.json());
        var total:number = getSalesTotal(res)
        setTotalSales(total)
        setAllSales(res);
        setLoading(false)
    }

    return (
        <div id="adminMain">
            <h1>ADMIN DASHBOARD</h1>
            <h3>SALES</h3>
            <div id="salesDiv">
            {
                loading ? ( <p>...loading</p>) : (<AllSales objLis={allSales}></AllSales>)
            }
            </div>
            {
                loading ? ( <p>...loading</p>) : (
                <div id="middleWrapper">
                    <AllUsersBox ></AllUsersBox>
                    <div id="tst">
                        <BarChart></BarChart>
                    </div>
                </div>
                )   
            }
            <div id="chartsDiv">
                {
                    loading ? (<p>...loading</p>) : (<DonutChart n={totalSales}></DonutChart>)
                }
                {
                    loading ? (<p>...loading</p>) 
                    : (<RevenueDetails total={totalSales} totalOrders={allSales.length}></RevenueDetails>)
                }

            </div>

            
        </div>
    )
}

export default AdminPage;