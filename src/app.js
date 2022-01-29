//Módulos
const path = require("path")
const express = require('express');
const app = express();


//Configuración
app.use(express.static(path.join(__dirname, '../public')))

//Engine (ejs)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

// Rutas
/* rutas main, las rutas generales que no se agupan en ningun modulo de la web */
const mainRoutes = require('./routes/mainRoutes')
app.use('/', mainRoutes); 
/* rutas productos, todo lo relacionado a productos */
const productRoutes = require ('./routes/productRoutes')
app.use('/products', productRoutes);
/* rutas usuarios, todo lo relacionado a usuarios */
const userRoutes = require ('./routes/userRoutes')
app.use('/user', userRoutes);

//Levantar servidor 
app.listen(3000, ()=>{
    console.log('Servidor funcionando en el puerto 3000');
});
