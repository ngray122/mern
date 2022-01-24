import React, { useState } from "react";

const Boxes = props => {

    let [color, setColor] = useState('');
    let [size, setSize] = useState('')

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
                    <label htmlFor="" className="form-label">Choose Color:</label>
                    <input id="boxcol" type="text" className="form-control" onChange={(e) => setColor(e.target.value)} />
                    <label htmlFor="" className="form-label">Choose Size:</label>
                    <input type="number" className="form-control" onChange={(e) => setSize(e.target.value)} />

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