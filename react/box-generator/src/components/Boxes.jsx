import React, { useState } from "react";

const Boxes = props => {

    let [color, setColor] = useState('');


    return (
        <div className="container">

            <h1>Pick a color and add a box!</h1>

            <form action="">
                <div className="form-group">
                    <label htmlFor="" className="form-label"></label>
                    <input type="text" className="form-control" />
                    <input type="submit" value="Create Box"/>
                </div>

            </form>

        </div>

    )


}




export default Boxes;