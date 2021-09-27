import './right.css';

function Right() {
    return (
        <div className="resume">

            <div className="resume_right">
                <div className="resume_item resume_about">
                    <div className="title">
                        <p className="bold">Acerca de mí</p>
                    </div>
                    <p>Soy un programador full stack innovador y emprendedor empañado en hacaer del mundo un mundo mas unido y conectado. Dominio de desarrollos de software y del trabajo con diferentes estructuras de datos</p>
                </div>
                <div className="resume_item resume_work">
                    <div className="title">
                        <p className="bold">Experiencia de trabajo</p>
                    </div>
                    <ul>
                        <li>
                            <div className="date">2019</div>
                            <div className="info">
                                <p className="semi-bold">Proyecto pequeño almacen</p>
                                <p>Desarrollo en el leguaje de programacion php un pequeño proyecto para gestionar las ventas de un local de ropa llevando la gestion del administrador, gerente, caja y en general el proceso y proyeccion de la organizacion</p>
                            </div>
                        </li>
                        <li>
                            <div className="date">2020</div>
                            <div className="info">
                                <p className="semi-bold">Gestion inyecion electronica</p>
                                <p>Genere un proyecto basico para el manejo de los datos para el control codigos de fallas en motocicletas, toda la transaccion de los datos para poder desplegar informacion puntual para los mecanicos</p>
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
                                <p className="semi-bold">Colegio Alberto Lleras Camargo (SENA)</p>
                                <p>Analisis en programacion de software, modularizacion de los datos, medicion del software y bases de datos relacionales
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="date">2020</div>
                            <div className="info">
                                <p className="semi-bold">Colegio Alberto Lleras Camargo (SENA)</p>
                                <p>Tecnicio en programacion de software, diseño bases de datos, deseño interfaces, metodologias agiles, refactorización</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="resume_item resume_hobby">
                    <div className="title">
                        <p className="bold">Hobby</p>
                    </div>
                    <ul>
                        <li><i class="fas fa-laptop-code"></i></li>
                        <li><i class="fas fa-basketball-ball"></i></li>
                        <li><i class="fas fa-cog"></i></li>
                        <li><i class="fas fa-tools"></i></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Right;