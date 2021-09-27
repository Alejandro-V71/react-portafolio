import {
    Link
} from "react-router-dom";

function Home() {
    return (
        // <h1>Pagina principal</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Portafolio">Portafolio</Link>
                </li>
            </ul>
        </nav>

        

        // <a href="/Portafolio">Ir al Portafolio</a>
    );
}

export default Home;