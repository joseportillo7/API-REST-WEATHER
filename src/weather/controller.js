const {ServiceWeather} = require('./service')


module.exports.ControllerWeather = {
    getGeo: async(req, res)=>{
        try {
            const place = req.params.place
            let infoweather = await ServiceWeather.dataGeo(place)
            let geo_array = []
            for(geo of infoweather){
                geo_array.push({
                    place_name: geo.place_name,
                    lng: geo.center[0],
                    alt: geo.center[1]
                })
            }

            res.json(geo_array)
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
    },
    getWeather: async(req,res) =>{
        try {
            const weather = await ServiceWeather.dataWeather(req.body.alt,req.body.lng)

            res.json(weather)

        } catch (error) {
            res.status(500).json({message: 'Internal server error from weather'})
        }
    }
}