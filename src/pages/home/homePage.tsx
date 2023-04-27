//import axios from "axios";
import './home.css';
import SHOE from '../../images/katsueshoe.png';

function HomePage(){
    
    /*
    const test = async () => {
        const url = 'http://localhost:8000/v1/shirts/getAllShirts';
        try{
            const data = await axios.get(url);
            console.log(data);
        }catch(err){
            console.log(err);
        }
    }
    const getOneUser = async () => {
        const url = "http://localhost:8000/v1/users/getOneUser/bobby";
        try{
            const data = await axios.get(url);
            console.log(data.data);
        }catch(err){
            console.log(err)
        }
    }
    */

    return(

        <div id="homeMain">

            <div>
                <h1 id="title">ATSUE</h1>
                <h5 id="titleUnder">Active wear .co</h5>
                <img alt="" id="shoeImg" src={SHOE}></img>
            </div>
            <h5 id="desc">The best place to buy active wear for perfoemance and styleasdfdfdffasdfsdfsffsdf
            <br></br>afadfoadnfodnfklsadnfklsdnfsanflasadsfasdffdfmlasdflasdfsdf</h5>
            <div id="dot"></div>
            <h1 id="kLogo">K</h1>
        </div>
    )

}
export default HomePage;