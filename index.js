const {port} = require('./src/config')
const app = require('./src/weather')


app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
})