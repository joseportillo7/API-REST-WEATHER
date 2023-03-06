const path = require('path')
const fs = require('fs')
const axios = require('axios')
const { Config } = require('../config')


const filePath = path.join(__dirname, '../../db/database.json');
let history = []

const dataGeo = async(place) =>{
    const datageo = await axios.get(`${Config.apigeo}${place}.json?access_token=${Config.tokengeo}`)
    let {data} = datageo
    return data.features
}

const dataWeather = async(lat = 14.6228,lon=-90.5314)=>{
    const dataweather = await axios.get(`${Config.apiweather}lat=${lat}&lon=${lon}&appid=${Config.tokenweather}&units=metric`)
    let { data } = dataweather

    const jsonweather = {
        place: data.name,
        temp: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        weather_desc: data.weather[0].description,
    }
    saveDB(jsonweather)

    return jsonweather
}


const saveDB = (jsonresponse) =>{

    history.push(jsonresponse)

    const filePath = path.join(__dirname, '../../db/database.json');

    fs.writeFileSync(filePath,JSON.stringify(history))
}

const getDB = ()=> {
    const data = fs.readFileSync(filePath, 'utf-8')
    const obj = JSON.parse(data)
    return obj
}


module.exports.ServiceWeather = {
    dataGeo,
    dataWeather,
    getDB,
}