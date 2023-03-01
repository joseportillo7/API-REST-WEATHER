const express = require('express')
const { ControllerWeather } = require('./controller')

const app = express()

app.get('/weather/:place',ControllerWeather.getWeather)

module.exports = app