const express = require('express'); //  realizamos un Micro Frame
const mongoose = require('mongoose'); // instalacionde la base de datos mongoDB
const routes = require("./routes"); 

const app = express();



// coneccion de nuestra base de datos...
mongoose.connect("mongodb+srv://omnistack:omnistack@cluster0-vbu0z.mongodb.net/week10?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes); // rutas de mi aplicacion estan    


// METODOS DE HTTP:
// GET --> es para listar, buscar usuarios...
// POST --> es para crear o salvar un producto...
// DELETE --> para eliminar seria

// TIPOS DE PARAMETROS:
// Query Params: request.query (filtros, ordenacion, paginacion)
// Router Params: request.params es p/ identificar un recuerso en alteracion o romovicion
// Body: Resquest.Body son dados para la creación o modificacion de un registro.

//MongoDB (No Relacional)


app.listen(3333); // puesta de nuestro localhost

