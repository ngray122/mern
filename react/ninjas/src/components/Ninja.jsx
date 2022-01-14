import React, { useState } from "react";


const Ninja =() => {
    // creating stare variable to keep track of information collected
    let [ninjaName, setNinjaName] = useState('')
    let [imgUrl, setimgUrl] = useState('')
    let [favColor, setfavColor] = useState('')


    const createNinja = (e) => { 
        e.preventDefault();
        console.log("submitted the form")
        console.log(ninjaName, imgUrl, favColor)  //should be able to see state var from form
        let ninjaObj = {ninjaName, imgUrl, favColor}
        console.log(ninjaObj)
    }


    return (

        <form onSubmit= {createNinja}>

            <div className="form-group">
                <label htmlFor="">Ninja name:</label>
                <input type="text" className="form-control" onChange = {(e) => setNinjaName(e.target.value) }/>
            </div>
            <div className="form-group">
                <label htmlFor="">Img url:</label>
                <input type="text" className="form-control" onChange = {(e) => setimgUrl(e.target.value) }/>
            </div>
            <div className="form-group">
                <label htmlFor="">Favorite Color:</label>
                <input type="text" className="form-control" onChange = {(e) => setfavColor(e.target.value) }/>
            </div>
            <input type="submit" />
        </form>

    )

}

export default Ninja