
import "./allSalesBox.css";
import { useState } from "react";
import { avgSalePrice } from "../../utils/salesData";
import UP from "../../images/up.png"
import DOWN from "../../images/down1.png"

type salesLis = {
    objLis: {
        amount: number;
        items: { [key:symbol]: number; }//[key: string
    }[]
}

type pSale = {
    amount: number;
    items: { [key:string|number]: number }
    avg: number
}

function AllSales({objLis}:salesLis){
    const avg:number = avgSalePrice(objLis)

    return (
        <div id="salesBox">
            {
                objLis.map((item, idx) => {
                    return (
                        <OneSale key={idx} amount={item.amount} items={item.items} avg={avg}></OneSale>
                    )
                })
            }
        </div>
    )
}

function OneSale({amount, items, avg}:pSale){//{amount, items}:pSale
    const [show, setShow] = useState(false);
    const toggle = () => {
        if(show){
            setShow(false);
        }else{
            setShow(true);
        }
    }

    return (
        <div id="oneSale">
            <div id="totalWrapper">
                <h3>Total:</h3>
                <h1>${amount}</h1>
            </div>
            <div id="itemWrapper">
            <h3 onClick={toggle}>Clothes:</h3>
            <div id="itemBox">
            {  
                Object.keys(items).map((item, idx) => {
                    return(
                        <div key={idx} id="item">
                            <p >{item}: {items[item]}</p>
                        </div>
                    )
                })
            }
            </div>
            </div>

            <div id="avg">
            {
                amount > avg ? (<img id="up" alt="" src={UP}></img>) 
                : (<img id="up" alt="" src={DOWN}></img>)
            }
            </div>

        </div>  
    )
}
export default AllSales;