import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import homeRoutes from "./routes/home.routes.js";


const app = express();

app.use(express.json());


app.use("/api", employeesRoutes); // rutas con prefijo 'api'
app.use(homeRoutes);

//Para rutas no existentes:
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

export default app

//conexion.end();