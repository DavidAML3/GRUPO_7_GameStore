const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const mainRoutes = require('./routes/mainRoutes');

app.use('/', mainRoutes);

app.listen(3000, () => {
    console.log('Servidor levantado en el puerto 3000');
});