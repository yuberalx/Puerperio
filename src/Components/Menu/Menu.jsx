import React from 'react'
import "../../css/Menu.css";
import Logo from "../../img/logo_PUERPERIO.svg"

function Home(props) {
    return (
        <div class="Headernav">
            <nav>
                <div class="Lista">
                    <div class="Navlogo">
                        <img src={Logo} />
                    </div>
                    <div class="Item">
                        <ul>
                            <li><a href="#">artistas</a></li>
                            <li><a href="#">Acerca</a></li>
                            <li><a href="#">Galería</a></li>
                            <li><a href="#">Encuentro</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}



export default Home
