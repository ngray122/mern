import React from "react";
import { useParams } from "react-router-dom";


const Number = (props) => {
    let { num } = useParams();
    return (
        <div>
            {
                !isNaN(num) ?
                    <h1>The number is: {num}</h1> :
                    <h1>Not a number</h1>
            }

        </div>
    )
}


export default Number;
