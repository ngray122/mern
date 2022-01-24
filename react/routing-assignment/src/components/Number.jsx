import React from "react";
import { useParams } from "react-router-dom";


const Number = () => {
    let { num } = useParams();
    console.log(num)
    return (
        <div>
            {
                !isNaN(num) ?
                    <h1>Your number is: {num}</h1> :
                    <h1>Not a number</h1>
            }

        </div>
    )
}


export default Number;
