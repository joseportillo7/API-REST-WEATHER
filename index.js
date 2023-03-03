const {Config} = require('./src/config')
const app = require('./src/weather')


app.listen(Config.port, ()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${Config.port}`);
})