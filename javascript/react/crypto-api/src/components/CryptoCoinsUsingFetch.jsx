import React, {useState} from 'react'


const CryptoCoinsUsingFetch = () => {
    let[listOfCoins, setListOfCoins] = useState([])




    const getCoins = () => {
        console.log("button clicked")
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(response =>{
            return response.json();
        })
        .then(response => {
            console.log("response =>", response);
            setListOfCoins(response)
        })
        .catch(err => {
            console.log("error!! ====> ", err);
        })
    }




    return (
        <div>
            <h1>From crypto</h1>
            <p><button onClick={getCoins} style={{border:"2 px solid"}}>Click to fetch</button></p>

            {
                listOfCoins.map((coinObj, i)=>{
                    return (
                        <div>
                            <h3>{coinObj.name}</h3>
                            <p>Price: {coinObj.current_price}</p>
                            <img src={coinObj. image} alt="" />
                            <p>Symbol: {coinObj.symbol}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CryptoCoinsUsingFetch

