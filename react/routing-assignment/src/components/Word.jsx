import React from "react";
import { useParams } from "react-router-dom"

const Word = () => {
    let { word, color = "black", backColor = "white" } = useParams();
    console.log(word, color, backColor)

    return (
        <div>
            {
                isNaN(word) ?
                    <h1 style={{backgroundColor: `${backColor}`, color: `${color}`}}>Your word is: {word}</h1> :
                    <h1>Not a word!</h1>
            }

        </div>
    )
}

export default Word;