import "./shopping.css"
import axios from "axios";
import { useEffect, useState } from "react";
import PreviewBox from "../../comps/previewbox/previewBox";
import MODEL from "../../images/shirtmodel.png"

/*
const lisTestData = [{id: "jabfiasnifsdf",title: "shirt1",cost: 20, quantity: 10}, {id: "jabfiasnifsdf",title: "shirt2",cost: 22, quantity: 12}, 
{id: "jabfiasnifsdf",title: "shirt3",cost: 20, quantity: 6}, {id: "jabfiasnifsdf",title: "shirt4",cost: 25, quantity: 14},
{id: "jabfiasnifsdf",title: "shirt5",cost: 18, quantity: 6}, {id: "jabfiasnifsdf",title: "shirt6",cost: 28, quantity: 11}];
const lisTestData2 = [{id: "jabfiasnifsdf",title: "Pants",cost: 20, quantity: 10}, {id: "jabfiasnifsdf",title: "Pants2",cost: 22, quantity: 12}, 
{id: "jabfiasnifsdf",title: "Pants3",cost: 20, quantity: 6}, {id: "jabfiasnifsdf",title: "Pants4",cost: 25, quantity: 14},
{id: "jabfiasnifsdf",title: "Pants5",cost: 18, quantity: 6}, {id: "jabfiasnifsdf",title: "Pants6",cost: 28, quantity: 11}];
*/
function ShoppingPage(){
    const [loading, setLoading] = useState<boolean>(false);
    const [shirts, setShirts] = useState([]);
    const [pants, setPants] = useState([]);
    const getPants = async() => {
        const url:string = "http://localhost:8000/v1/pants/getAllPants";
        try{
            const data = await axios.get(url);
            console.log(data.data);
            setPants(data.data);
        }catch(err){
            console.log(err);
        }
    }
    const getShirts = async() => {
        const url:string = "http://localhost:8000/v1/shirts/getAllShirts";
        try{
            const data = await axios.get(url);
            console.log(data.data);
            setShirts(data.data);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        const getData = async () => {
            setLoading(false);
            await getPants();
            await getShirts();
            setLoading(false);
        }
        getData();
    },[])


    return(
        <div id="shopMain">
            <div id="topShop">
                <h1 id="activeWear">Active Wear</h1>
                <img alt="" id="bigImg" src={MODEL}></img>
                <div id="slash"></div>
            </div>
            {
                loading ? (<p>loading...</p>) : (//shirts
                    <PreviewBox lisObj={shirts} name="joe" lisObj2={pants}></PreviewBox>
                )
            }
        </div>
    )
}
export default ShoppingPage;