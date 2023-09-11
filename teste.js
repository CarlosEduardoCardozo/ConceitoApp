const axios = require("axios")

async function products () {


    const myproduct = await axios.get('http://127.0.0.1:8000/api/camisetas/')
    console.log(myproduct.data)  
    return myproduct.data
    }
products()