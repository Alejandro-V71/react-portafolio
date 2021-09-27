import {
    Link
} from "react-router-dom";

import '../assets/home.css';
import logo from '../assets/img/logo.jpg';
import shape from '../assets/img/shape.png';
import foto from '../assets/img/foto.png';

function Home() {
    return (

        <div className="hero">
            <nav>
                <img src={logo} className="logo" />
                <ul>  
                    <Link to="/"><li><a>HOME</a></li></Link>
                    <Link to="/Portafolio"><li><a>CURRICULUM</a></li></Link>
                </ul>
            </nav>
            <div className="detel">
                <h1>Soy <span>Alejandro Villamil</span></h1>
                <p>Este es el sitio web oficial de mi portafolio para mostrar todos mis trabajos relacionados <br /> con desarrollo web y diseño ui.</p>
            </div>
            <div className="images">
                <img src={shape} className="shape" />
                <img src={foto} className="girl" />
            </div>

            <div className="social">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
            </div>

        </div>

    );
}

export default Home;