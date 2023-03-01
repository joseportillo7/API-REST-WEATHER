const {ServiceWeather} = require('./service')

module.exports.ControllerWeather = {
    getWeather: async(req, res)=>{
        try {
            // const country = req.params.country
            const place = req.params.place
            let infoweather = await ServiceWeather.getData(place)
            
            res.json(infoweather)
        } catch (error) {
            res.status(500).json({message: "Internal server error"})
        }
    }
}