import React, { useState } from "react";

const Boxes = props => {

    let [color, setColor] = useState('');

    let [listOfBoxes, setListOfBoxes] = useState([]);

    const createBox = (e) => {
        e.preventDefault();
        let boxObj = { color }
        setListOfBoxes([...listOfBoxes, boxObj])
        document.getElementById('boxcol').value = ''
    }


    return (
        <div className="container">

            <form onSubmit={createBox}>
                <div className="form-group">
                    <label htmlFor="" className="form-label"></label>
                    <input id="boxcol" type="text" className="form-control" onChange={(e) => setColor(e.target.value)} />

                    <input type="submit" value="Create Box" />
                </div>
            </form>
            <h3>Boxes are displayed below</h3>


            {
                listOfBoxes.map((box, idx) => {
                    return (
                        <div key={idx} style={{ width: "200px", height: "200px", backgroundColor: box.color, display: "inline-block" }}>
                            <p>{}</p>
                        </div>
                    )

                })
            }

        </div>

    )

}




export default Boxes;