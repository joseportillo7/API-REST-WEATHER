const express = require('express')
const {ServiceWeather} = require('./service')

const app = express()

app.get('',ServiceWeather.getData)

module.exports = app