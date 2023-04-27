import "./previewBox.css";
import { Link } from 'react-router-dom'
import DisplayCard from "../displaycard/displayCard";

type prevBox = {
    lisObj: {
        id: string;
        title: string;
        cost: number;
        quantity: number;
        img: string;
    }[]
    name: string;
    lisObj2: {
        id: string;
        title: string;
        cost: number;
        quantity: number;
        img: string;
    }[]
}

function PreviewBox({lisObj, name, lisObj2}:prevBox) {
    console.log(lisObj);
    console.log(name)
    return (
        <div id="prevBox">
            <Link to="/type/Shirts" id="clothLink"><h4>Shirts</h4></Link>
            <div id="prevType">
            {
                lisObj
                .filter((_, idx) => idx < 4)
                .map((item, idx) => {
                    return (
                        <DisplayCard key={idx} obj={item}></DisplayCard>
                    )
                })
            }
            </div>
            <Link to="/type/Pants" id="clothLink"><h4>Pants</h4></Link>
            <div id="prevType">
            {
                lisObj2
                .filter((_, idx) => idx < 4)
                .map((item, idx) => {
                    return (
                        <DisplayCard key={idx} obj={item}></DisplayCard>
                    )
                })
            }
            </div>
        </div>
    )

}
export default PreviewBox