import React from 'react'
import { useParams } from 'react-router-dom'

const ColorWord = () => {

    let { word, color, backColor } = useParams();
    return (
        <div>
            <h1 style={{backgroundColor: `${backColor}`, color: `${color}`}}>Your word is: {word}</h1>

        </div>
    )
}

export default ColorWord
