import React from 'react';
import Main from './main';
import './card.css';
export default (props) => {
    const estilo = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'

    }
    return (
        <div className='Card' style={estilo}>
            <div className='Title' >{props.titulo} </div>
            <div className='Content'>
                <Main></Main>
            </div>
        </div>
    )
}