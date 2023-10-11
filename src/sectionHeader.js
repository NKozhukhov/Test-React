import React from 'react'
import "./styles/style.sass"


class SectionHeader extends React.Component {
    render(){
        return(
            <h2 className='section_header'>
                {this.props.title}
            </h2>


        )
    }
}

export default SectionHeader