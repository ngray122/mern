import React from "react";
import { useParams } from "react-router-dom"

const Word = (props) => {
    const { words } = useParams();
    return (
        <div>
            <h1>The word is: {words}</h1>
        </div>
    )
}

export default Word;