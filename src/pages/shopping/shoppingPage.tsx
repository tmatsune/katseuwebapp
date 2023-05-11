import "./shopping.css"
import axios from "axios";
import { useEffect, useState } from "react";
import PreviewBox from "../../comps/previewbox/previewBox";
import MODEL from "../../images/shirtmodel.png"
import { CLOTHES } from "../../utils/hardCodedClothes";


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
        //getData();
    },[])


    return(  
        <div id="shopMain">
            <div id="topShop">
                <h1 id="activeWear">Active Wear</h1>
                <h5 id="activeTxt">with many styles and clothes from shirts to pants
                <br></br>we have it all with unique styles </h5>
                <img alt="" id="bigImg" src={MODEL}></img>
                <div id="slash"></div>
            </div>
            {
                loading ? (<p>loading...</p>) : (//shirts
                    <PreviewBox lisObj={CLOTHES[0]} name="joe" lisObj2={CLOTHES[1]}></PreviewBox>
                )
            }
        </div>
    )
}
export default ShoppingPage;