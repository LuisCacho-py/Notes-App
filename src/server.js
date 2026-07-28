const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const methodOverride = require('method-override');

// Initializations
const app = express();

// Settings

app.set('port', process.env.PORT || 4000); // Aqui ponemos el puerto automatico o si no uno default
app.set('views', path.join(__dirname, 'views' )); // Aqui le decimos donde esta la carpeta views
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false})); // Permite leer datos enviados desde formularios HTML (POST), los convierte en objeto JS accesible en req.body
app.use(methodOverride('_method'))

// Global Variables

// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));


// Static Files

app.use(express.static(path.join(__dirname, 'public' )));

module.exports = app;