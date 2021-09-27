import './right.css';

function Right() {
    return (
        <div className="resume">

            <div className="resume_right">
                <div className="resume_item resume_about">
                    <div className="title">
                        <p className="bold">Acerca de mí</p>
                    </div>
                    <p>Soy un programador full stack con mas de 2 años de experiencia he desarrollado grandes proyectos siguiendo estandares de programacion, soy aotodidacta y </p>
                </div>
                <div className="resume_item resume_work">
                    <div className="title">
                        <p className="bold">Experiencia de trabajo</p>
                    </div>
                    <ul>
                        <li>
                            <div className="date">2019</div>
                            <div className="info">
                                <p className="semi-bold">Tecnico</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                            </div>
                        </li>
                        <li>
                            <div className="date"></div>
                            <div className="info">
                                <p className="semi-bold">Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                            </div>
                        </li>
                        <li>
                            <div className="date">2017</div>
                            <div className="info">
                                <p className="semi-bold">Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="resume_item resume_education">
                    <div className="title">
                        <p className="bold">Educacion</p>
                    </div>
                    <ul>
                        <li>
                            <div className="date">2019</div>
                            <div className="info">
                                <p className="semi-bold">SENA</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                            </div>
                        </li>
                        <li>
                            <div className="date">2020</div>
                            <div className="info">
                                <p className="semi-bold">Colegio Alberto Lleras Camargo</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="resume_item resume_hobby">
                    <div className="title">
                        <p className="bold">Hobby</p>
                    </div>
                    <ul>
                        <li><i className="fas fa-book"></i></li>
                        <li><i className="fas fa-gamepad"></i></li>
                        <li><i className="fas fa-music"></i></li>
                        <li><i className="fab fa-pagelines"></i></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Right;