//Módulos
const path = require("path")
const express = require('express');
const app = express();
//Configuración
app.use(express.static('public'));

//Engine (ejs)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

// Rutas
const rutasMain = require("./routers/mainRouter")
app.use('/', rutasMain);

//Levantar servidor 
app.listen(3000, ()=>{
    console.log('Servidor funcionando en el puerto 3000');
});
