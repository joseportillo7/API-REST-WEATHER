const axios = require('axios')
const {api,token} = require('../config')

const getData = async(place) =>{
    const dataweather = await axios.get(`${api}${place}.json?access_token=${token}`)
    let {data} = dataweather
    return data.features.map(place => ({
        id: place.id,
        name: place.place_name,
        lng: place.center[0],
        alt: place.center[1]
    }))
}

module.exports.ServiceWeather = {
    getData,
}