import React from 'react'

const CryptoCoinsUsingFetch = () => {

    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(response =>{
        console.log("got info back from API, here  is the response", response)
    }).catch(err => {
        console.log("error!! ====> ", err);
    })

    console.log("got info back from API, here  is the response")

    return (
        <div>
            <h1>From crypto</h1>
        </div>
    )
}

export default CryptoCoinsUsingFetch

