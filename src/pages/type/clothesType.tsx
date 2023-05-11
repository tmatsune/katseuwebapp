
import "./clothesType.css";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import DisplayCard from "../../comps/displaycard/displayCard";
import { CLOTHES } from "../../utils/hardCodedClothes";

//const lisTestData = [{id: 2,title: "shirt",cost: 20, quantity: 10, img:'sdf'}, {id: "jabfiasnifsdf",title: "shirt2",cost: 22, quantity: 12, img:'sdf'} ];

function ClothesType(){
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    const [loading, setLoading]= useState(false);
    const [clothData, setClothData] = useState(CLOTHES[0]);

    useEffect(() => {
        const getData = async() => {
            setLoading(false);  //true
            var path :string = pathId.toLowerCase();//:string
            const url = `http://localhost:8000/v1/${path}/getAll${pathId}`;
            console.log(url);
            try{
                const data = await axios.get(url);
                console.log(data.data)
                setClothData(data.data);
                setLoading(false);
            }catch(err){
                console.log(err);
            }
        }
        if(pathId === "Shirts"){
            setClothData(CLOTHES[0]);
        }
        if(pathId === "Pants"){
            setClothData(CLOTHES[1]);
        }
    },[])

    return(
        <div id="typeMain">
            <div id="typeContainer">
            <h1>{pathId}</h1>
            {
            loading ? (<p>...loading</p>) : (
                <div id="prevType">
                {
                    clothData
                    .map((item, idx) => {
                        return (
                            <DisplayCard key={idx} obj={item}></DisplayCard>
                        )
                    })
                }
                </div>
                )
            }
            </div>
        </div>
    )

}
export default ClothesType;