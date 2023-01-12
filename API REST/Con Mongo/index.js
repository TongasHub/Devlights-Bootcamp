const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//------------------ Middlewares ------------------
const log = require('./middlewares/log');

//------------------ Routes ------------------
const usersRoute = require('./routes/usersRoute');
const rolesRoute = require('./routes/rolesRoute');
const tasksRoute = require('./routes/tasksRoute');



app.use(log);
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Pagina principal');
});

app.use('/users', usersRoute);
app.use('/roles', rolesRoute);
app.use('/tasks', tasksRoute);


mongoose.connect("mongodb://127.0.0.1:27017/entregaApiRest", (err) => {
    if(err) {
        console.log("Error al conectar a la base de datos");
    } else {
        console.log("Conectado a la base de datos");
    }
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });
  