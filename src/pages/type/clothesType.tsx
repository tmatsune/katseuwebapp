
import "./clothesType.css";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import DisplayCard from "../../comps/displaycard/displayCard";
/*
const lisTestData = [{id: "jabfiasnifsdf",title: "shirt1",cost: 20, quantity: 10}, {id: "jabfiasnifsdf",title: "shirt2",cost: 22, quantity: 12}, 
{id: "jabfiasnifsdf",title: "shirt3",cost: 20, quantity: 6}, {id: "jabfiasnifsdf",title: "shirt4",cost: 25, quantity: 14},
{id: "jabfiasnifsdf",title: "shirt5",cost: 18, quantity: 6}, {id: "jabfiasnifsdf",title: "shirt6",cost: 28, quantity: 11}];
*/
function ClothesType(){
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    const [loading, setLoading]= useState(false);
    const [clothData, setClothData] = useState([]);

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
        getData();
    },[])

    return(
        <div id="typeMain">
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
    )

}
export default ClothesType;