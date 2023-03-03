require('dotenv').config()

module.exports.Config = {
    port: process.env.PORT,
    tokengeo: process.env.TOKEN_GEOCODING,
    apigeo: process.env.API_GEOCODING,
    tokenweather: process.env.TOKEN_WEATHER,
    apiweather: process.env.API_WEATHER,
}