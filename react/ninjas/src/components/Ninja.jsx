import React, { useState } from "react";


const Ninja =() => {
    // creating stare variable to keep track of information collected
    let [ninjaName, setNinjaName] = useState('')
    let [imgUrl, setimgUrl] = useState('')
    let [favColor, setfavColor] = useState('')

    // create state var for every ninja that has been submitted in the form
    let[listOfNinjas, setlistOfNinjas] = useState([]);


    const createNinja = (e) => { 
        e.preventDefault();
        console.log("submitted the form")
        console.log(ninjaName, imgUrl, favColor)  //should be able to see state var from form
        let ninjaObj = {ninjaName, imgUrl, favColor}
        console.log(ninjaObj)
        
        setlistOfNinjas([...listOfNinjas, ninjaObj]) // ...to keep objs that were already there
    }


    return (

        <div>
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
        <hr />
        <h3>Rob's MERN Ninjas!</h3>

        {
            listOfNinjas.map((ninja) => {
                return (
                    <div style={{border: "1px solid black", backgroundColor: ninja.favColor, }}>
                    <h1>{ninja.ninjaName}</h1>
                    <p><img src={ninja.imgUrl} alt='' width="100px"></img></p>
                    <p>Favorite Color: {ninja.favColor}</p>
                    </div>

                )
            })
        }



        </div>

    )

}

export default Ninja