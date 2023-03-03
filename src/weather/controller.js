const {ServiceWeather} = require('./service')


module.exports.ControllerWeather = {
    getWeather: async(req, res)=>{
        try {
            const place = req.params.place
            let infoweather = await ServiceWeather.getGeo(place)

            res.json(infoweather)
        } catch (error) {
            res.status(500).json({message: "Internal server error"})
        }
    },
    getHistory: (req,res)=>{
        try {
            const history = ServiceWeather.getDB()
            res.json({history})
        } catch (error) {
            res.status(500).json({message: 'Internal server error DB'})
        }

    }
}