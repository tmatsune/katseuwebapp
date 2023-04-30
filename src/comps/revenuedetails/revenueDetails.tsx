
import "./revenueDetails.css"
import CART from "../../images/cart.png"
import MONEY from "../../images/moneyBag.png"

type revDetails = {
    total : number;
    totalOrders: number;
    
}
function RevenueDetails({total, totalOrders}:revDetails){
    console.log(total, totalOrders)
    return (
        <div id="revOrders">
            <div id="rev">
                <div id="cartWrapper">
                    <img alt="" id="icon1" src={CART}></img>
                </div>
                <div id="desc">
                    <h1 id="descH1">Orders:</h1>
                    <h1 id="descH1">{totalOrders}</h1>
                </div>
                
            </div>
            <div id="orders">
                <div id="moneyWrapper">
                    <img alt="" id="icon1" src={MONEY}></img>
                </div>
                <div id="desc">
                    <h1 id="descH1">Total Sales:</h1>
                    <h1 id="descH1">${total}</h1>
                </div>
            </div>
        </div>
    )

}
export default RevenueDetails