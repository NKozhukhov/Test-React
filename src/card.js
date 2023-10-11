import React from 'react'
import "./styles/style.sass"
import Button from './button'
import Image from './image'


class Card extends React.Component {
    render(){
        return(
            <div className='card-box'>
                <img className='card-img'
                src={this.props.url} 
                /> 
                <p>{this.props.text}</p>
                <Button />



            </div>


        )
    }
}



export default Card 