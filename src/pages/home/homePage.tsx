//import axios from "axios";
import './home.css';
import SHOE from '../../images/katsueshoe.png';
import NIKE from "../../images/shirts/nike1.jpeg"
import NIKE1 from "../../images/shirts/nike2.webp"
import NIKE2 from "../../images/shirts/nike3.jpg"

function HomePage(){

    return(
        <div id="homeMain">
            <div id="homeWrapper">
            <div>
                <h1 id="title">ATSUE</h1>
                <h5 id="titleUnder">Active wear .co</h5>
                <img alt="" id="shoeImg" src={SHOE}></img>
            </div>
            <h5 id="desc1">The best place to buy active wear for perfoemance and styleasdfdfdffasdfsdfsffsdf
            <br></br>afadfoadnfodnfklsadnfklsdnfsanflasadsfasdffdfmlasdflasdfsdf</h5>
            <div id="dot"></div>
            <h1 id="kLogo">K</h1>
            </div>
            <div id="homeWrapper2">
                <div id="homeCard">
                    <div id="homeImg" style={{backgroundImage:`url(${NIKE})`}}></div>
                    <div id="cardDesc">
                        <h4>New Designs</h4>
                    </div>
                </div>
                <div id="homeCard">
                    <div id="homeImg" style={{backgroundImage:`url(${NIKE1})`}}></div>
                    <div id="cardDesc">
                        <h4>Comfortable and stylish</h4>
                    </div>
                </div>
                <div id="homeCard">    
                    <div id="homeImg" style={{backgroundImage:`url(${NIKE})`}}></div>
                    <div id="cardDesc">
                        <h4>Affordable prices</h4>
                    </div>
                </div>
            </div>
            <div id="homeWrapper3">
                <img alt="" id="h3Img" src={NIKE}></img>
                <div id="h3Desc">
                    <h3>Discover New Styles</h3>
                    <p>We offer the best styles, cost, and comfort</p>
                </div>
            </div>
        </div>
    )

}
export default HomePage;