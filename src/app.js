import express from "express";
import { pool } from "./db.js";
import employeesRoutes from "./routes/employees.routes.js";



const app = express();

app.use(express.json());

//HOME
app.get("/", (req, res) => {
  res.send("Hola papi!");
});

app.get("/ping", async (req, res) => {
  const [result] = await pool.query("SELECT * FROM employee as result");
  let nomina = 0;
  result.forEach((emp) => (nomina = nomina + parseInt(emp.salary)));
  //res.json(result)
  res.json(nomina);
});

app.use("/api", employeesRoutes); // rutas con prefijo 'api'

//Para rutas no existentes:
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

export default app

//conexion.end();