import '../assets/portafolio.css';
import Left from '../components/left/left';
import Right from '../components/right/right';

import {
    Link
} from "react-router-dom";


function Portafolio() {
    return (

        <div>
            <Link className="home btn btn-success" to="/"><li><a>HOME</a></li></Link>
            <div className="resume">
                <Left />
                <Right />
            </div>
        </div>
    );
}

export default Portafolio;