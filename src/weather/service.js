const path = require('path')
const fs = require('fs')
const axios = require('axios')
const { Config } = require('../config')


const filePath = path.join(__dirname, '../../db/database.json');
let history = []

const getGeo = async(place) =>{
    const datageo = await axios.get(`${Config.apigeo}${place}.json?access_token=${Config.tokengeo}`)
    let {data} = datageo

    let newdata = []

    for(feature of data.features){
        let weather = await getWeather(feature.center[1], feature.center[0])
        newdata.push(weather)
    }
    saveDB(newdata)

    return newdata
}

const getWeather = async(lat = 14.6228,lon=-90.5314)=>{
    const dataweather = await axios.get(`${Config.apiweather}lat=${lat}&lon=${lon}&appid=${Config.tokenweather}&units=metric`)
    let { data } = dataweather
    return {
        place: data.name,
        weather_desc: data.weather[0].description,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
    }
}


const saveDB = (arr) =>{

    arr.forEach(element =>{
        history.push(element);
    })

    const filePath = path.join(__dirname, '../../db/database.json');

    fs.writeFileSync(filePath,JSON.stringify(history))
}

const getDB = ()=> {
    const data = fs.readFileSync(filePath, 'utf-8')
    const obj = JSON.parse(data)
    return obj
}


module.exports.ServiceWeather = {
    getGeo,
    getDB,
}