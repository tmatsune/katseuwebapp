import "./footerPage.css"
import { Link } from "react-router-dom"

function FooterPage(){
    return (
        <footer id="footer">
        <div id="footerMain">
            <div id="links">
                <Link to="https://www.instagram.com/terencematsune/"><img alt='' src={'https://cdn-icons-png.flaticon.com/512/87/87390.png'}></img></Link>
                <Link to="https://github.com/tmatsune?tab=repositories"><img alt='' src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'}></img></Link>
                <Link to="https://www.linkedin.com/in/terence-matsune-bb4957195/"><img alt='' src={'https://cdn-icons-png.flaticon.com/512/1384/1384014.png'}></img></Link>
            </div>
            <div id="footerDiv">
                <h3>Creater: Terence Matsune</h3>
                <h3>FrontEnd: React</h3>
                <h3>BackEnd: Golang</h3>
            </div>
        </div>
        </footer>
    )
}
export default FooterPage