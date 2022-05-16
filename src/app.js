//Módulos
const path = require("path")
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');



const app = express();

//Configuración
app.use(express.static(path.join(__dirname, '../public')))

//Engine (ejs)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))
app.use(express.urlencoded({ extended: false }));

// Sesiones y cookies
app.use(session({
  secret: 'rodawise secret',
  resave: false,
  saveUninitialized: true,
}));
app.use(cookieParser());
app.use(logger('dev'));

// method-override para procesamiento de put y delete //
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//Middleware para la autentificacion de usuario
const auth = require('./middlewares/auth');
app.use(auth);

//requerir middlewares para las rutas
const adminRoute = require('./middlewares/adminRoute');


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

/* rutas administradores, todo lo relacionado a admin */
const adminRoutes = require ('./routes/adminRoutes');
app.use('/admin', adminRoute, adminRoutes);

/*rutas api*/
const apiRoutes = require ('./routes/apiRoutes');
app.use('/api', apiRoutes);

/* Error 404 */ 
app.use((req, res, next) => {
    res.status(404).render("error404", {styles:'styles-error404.css'});
  })


//Levantar servidor 
app.listen(3001, ()=>{
    console.log('Servidor funcionando en el puerto 3001');
});
