const express = require('express')
const { ControllerWeather } = require('./controller')

const app = express()

app.get('/weather/:place',ControllerWeather.getWeather)
app.get('/weather/api/history', ControllerWeather.getHistory)

module.exports = app