const axios = require('axios')
const {api,token} = require('../config')

const getData = async(req,res) =>{
    const {data} = await axios.get(`${api}${token}`)
    console.log(data);
    res.json(data)
}

module.exports.ServiceWeather = {
    getData,
}