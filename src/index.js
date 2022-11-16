import app from './app.js'
import {PORT} from "./config.js";

//START SERVER
//app.listen(3000);
app.listen(PORT);
console.log(`Se ha iniciado un servidor web en el puerto ${PORT}`);
