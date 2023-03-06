# ABOUT PROJECT
This project help to know the weather of specific place around the world, using two public API's 
1. GEOCODING API: This api return five coordinates from the specific searched place, this information it going to use in the second API.
2. WEATHER API: This api recives a few params like a longitude and latitude and return the weather of the specific place.

***

## Installation
1. Clone repository or download files
2. npm install - to install all dependencies for the package file
3. create a .env file and put in those code lines
```
PORT = "any port"
TOKEN_GEOCODING = "token from page https://docs.mapbox.com/api/search/geocoding/"
TOKEN_WEATHER = "token frome page https://openweathermap.org/current"
API_GEOCODING = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
API_WEATHER = "https://api.openweathermap.org/data/2.5/weather?"
```
4. run project with node index.js

***
## Usage

_How can you use this project_

**GET HTTP**

* /geocoding/place/:place -> return five coordinates from the searched place
* /weather/history -> return all searched places

**POST HTTP**
* /weather -> return the specific weather from searched place

Example: This information return from /geocoding/place/izabal
```
{
    "place_name": "Morales, Morales, Izabal, Guatemala",
    "lng": -88.82438,
    "alt": 15.500581
}
```


## Features
1. express
2. dotenv
3. axios