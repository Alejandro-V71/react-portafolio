import './left.css';
import foto from '../../assets/img/cd.jpg';

function Left() {
    return (
        <div className="resume">
            <div className="resume_left">
                <div className="resume_profile">
                    <img src={foto} alt="profile_pic" />
                </div>
                <div className="resume_content">
                    <div className="resume_item resume_info">
                        <div className="title">
                            <p className="bold">Alejandro Villamil</p>
                            <p className="regular">Desarrollador</p>
                        </div>
                        <ul>
                            <li>
                                <div className="icon">
                                    <i className="fas fa-map-signs"></i>
                                </div>
                                <div className="data">
                                    Bogotá <br /> Suba
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <div className="data">
                                    3506339468
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="data">
                                    alejandro@gmail.com
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fab fa-weebly"></i>
                                </div>
                                <div className="data">
                                    www.cd.com
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="resume_item resume_skills">
                        <div className="title">
                            <p className="bold">Habilidades</p>
                        </div>
                        <ul>
                            <li>
                                <div className="skill_name">
                                    HTML
                                </div>
                                <div className="skill_progress">
                                    <span className="span1"></span>
                                </div>
                                <div className="skill_per">80%</div>
                            </li>
                            <li>
                                <div className="skill_name">
                                    CSS
                                </div>
                                <div className="skill_progress">
                                    <span className="span2"></span>
                                </div>
                                <div className="skill_per">70%</div>
                            </li>
                            <li>
                                <div className="skill_name">
                                    SASS
                                </div>
                                <div className="skill_progress">
                                    <span className="span3"></span>
                                </div>
                                <div className="skill_per">90%</div>
                            </li>
                            <li>
                                <div className="skill_name">
                                    JS
                                </div>
                                <div className="skill_progress">
                                    <span className="span4"></span>
                                </div>
                                <div className="skill_per">60%</div>
                            </li>
                            <li>
                                <div className="skill_name">
                                    JQUERY
                                </div>
                                <div className="skill_progress">
                                    <span className="span5"></span>
                                </div>
                                <div className="skill_per">88%</div>
                            </li>
                        </ul>
                    </div>
                    <div className="resume_item resume_social">
                        <div className="title">
                            <p className="bold">Redes Sociales</p>
                        </div>
                        <ul>
                            <li>
                                <div className="icon">
                                    <i className="fab fa-facebook-square"></i>
                                </div>
                                <div className="data">
                                    <p className="semi-bold">Facebook</p>
                                    <p>Alejandro@facebook</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fab fa-twitter-square"></i>
                                </div>
                                <div className="data">
                                    <p className="semi-bold">Twitter</p>
                                    <p>Alejandro@twitter</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fab fa-youtube"></i>
                                </div>
                                <div className="data">
                                    <p className="semi-bold">Youtube</p>
                                    <p>Alejandro@youtube</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fab fa-linkedin"></i>
                                </div>
                                <div className="data">
                                    <p className="semi-bold">Linkedin</p>
                                    <p>Alejandro@linkedin</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Left;