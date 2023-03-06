const express = require('express')
const { ControllerWeather } = require('./controller')

const app = express()

app.use( express.json())

app.get('/geocoding/place/:place',ControllerWeather.getGeo)
app.post('/weather', ControllerWeather.getWeather)
app.get('/weather/history', ControllerWeather.getHistory)

module.exports = app