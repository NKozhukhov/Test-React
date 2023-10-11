import React from 'react'
import "./styles/style.sass"
import Card from "./card"
import SectionHeader from "./sectionHeader"


class Section extends React.Component {

    /* text1 = "Удилище болонское Daiwa Ninja Bolo 600 max 25гр"
    text2 = "Удилище болонское Okuma Astral Bolognese 16'6 5005M 5-25гр"
    text3 = "Удилище поплавочное Maximus Rebel Tele Match 420" */

    render(){
        
        return(
            <section className='section1'>
                <SectionHeader title="Удочки" />
                <div className='container'>
                    <Card url="./img/1.png" text="Удилище болонское Daiwa Ninja Bolo 600 max 25гр"/>
                    <Card url="./img/2.png" text="Удилище болонское Okuma Astral Bolognese 16'6 5005M 5-25гр"/>
                    <Card url="./img/3.png" text="Удилище поплавочное Maximus Rebel Tele Match 420" />
                </div>
            </section>


        )
    }
}

export default Section 