import '../assets/error404.css';
import imagen from '../assets/img/img1.svg';

import {
    Link
} from "react-router-dom";

function Error404() {
    return (
        <div className="container">
            <img src={imagen} alt="" />
            <h1>La página que ha solicitado no se encuentra disponible</h1>
            <div className="boton">
                <button>
                    <Link to="/">Inicio</Link>
                </button>
            </div>
        </div>
    );
}

export default Error404;