import React, { useState } from "react";
import styles from "./Ninja.module.css"


const Ninja =() => {
    // creating stare variable to keep track of information collected
    let [ninjaName, setNinjaName] = useState('')
    let [imgUrl, setimgUrl] = useState('')
    let [favColor, setfavColor] = useState('')

    // create state var for every ninja that has been submitted in the form
    let[listOfNinjas, setlistOfNinjas] = useState([]);

    let[graduated, setGraduated] = useState(false)


    const createNinja = (e) => { 
        e.preventDefault();
        console.log("submitted the form")
        console.log(ninjaName, imgUrl, favColor, graduated)  //should be able to see state var from form
        let ninjaObj = {ninjaName, imgUrl, favColor, graduated}
        console.log(ninjaObj)
        
        setlistOfNinjas([...listOfNinjas, ninjaObj]) // ...to keep objs that were already there
    }

    const toggleGraduation = (i) => {
        console.log("grad click " +i)
        let[...copyOfListOfNinjas] = listOfNinjas
        copyOfListOfNinjas[i].graduated = !copyOfListOfNinjas[i].graduated
        setlistOfNinjas(copyOfListOfNinjas)
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
            listOfNinjas.map((ninja, i) => {
                return (
                    <div className={styles.ninja} key={i }style={{backgroundColor: ninja.favColor, textDecoration: ninja.graduated? "line-through":"none"}}>
                    <h1>{ninja.ninjaName}</h1>
                    <p><img src={ninja.imgUrl} alt='' width="100px"></img></p>
                    <p>Favorite Color: {ninja.favColor}</p>
                    <p><input type="checkbox" className="" onClick = {()=>toggleGraduation(i)}/>Graudate</p>
                    </div>
                )
            })
        }
        </div>

    )

}

export default Ninja