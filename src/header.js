import React from 'react'
import "./styles/style.sass"
import logo from "./img/Logo.png"


class Header extends React.Component {
    render(){
        return(
            <header className='header'>
                <img src={logo} className='logo'></img>
                <nav>
                    <a href="#" class="active">В начало</a>
                    <a href="#">Глава 1</a>
                    <a href="#">Глава 2</a>
                    <a href="#">Глава 3</a>
                    <a href="#">Глава 4</a>
                </nav>
                
                


            </header>


        )
    }
}

export default Header 