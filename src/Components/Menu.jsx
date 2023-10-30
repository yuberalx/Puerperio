import React from 'react'
import "../css/Menu.css";
import Logo from "../img/logo_PUERPERIO.svg"

function Menu(props) {
    return (
        <div className="Headernav">
            <div className="Logo">
                <img src={Logo} />
            </div>
            <nav className='Links'>
                <ul>
                    <li><a href="#">artistas</a></li>
                    <li><a href="#">Acerca</a></li>
                    <li><a href="#">Galería</a></li>
                    <li><a href="#">Encuentro</a></li>
                </ul>
            </nav>
        </div>
    )
}



export default Menu
