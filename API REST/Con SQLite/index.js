const express = require('express');
const db = require('./models/indexsql');

//------------------Routes------------------//
const tasksRoute = require('./routes/tasksRoute');
const rolesRoute = require('./routes/rolesRoute');
const usersRoute = require('./routes/usersRoute');

const app = express();
app.use(express.json());

app.use('/tasks', tasksRoute);
app.use('/roles', rolesRoute);
app.use('/users', usersRoute);

db.sync().then(() => {
    console.log('Conectado a la base de datos');
}).catch((error) => {
    console.log(error);
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
