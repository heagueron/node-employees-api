import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    //res.send("Aqui te mostrare la lista de empleados")
    const [rows] = await pool.query("SELECT * FROM employee as result");
    res.json(rows);
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Ha ocurrido un error ... ",
      error
    });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    //res.send("Aqui te mostrare la lista de empleados")
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);
    if (rows.length <= 0)
      return res.status(404).json({
        message: "Empleado no encontrado",
      });
    res.json(rows[0]);
  } catch {}
};

export const createEmployees = async (req, res) => {
  try {
    //console.log(req.body)
    const { name, salary } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES (?, ?)",
      [name, salary]
    );
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch {
    return res.status(500).json({
      message: "Ha ocurrido un error ... ",
    });
  }
};

export const updateEmployees = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;
    //console.log(id, name, salary)
    //res.send('got them')
    const [rows] = await pool.query(
      "UPDATE employee SET name = ?, salary = ? WHERE id = ?",
      [name, salary, id]
    );
    if (rows.affectedRows <= 0)
      return res.status(404).json({
        message: "Empleado no encontrado",
      });
    res.send("Empleado actualizado");
  } catch {
    return res.status(500).json({
      message: "Ha ocurrido un error ... ",
    });
  }
};

export const deleteEmployees = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Empleado no encontrado",
      });
    res.send("Empleado eliminado");
  } catch {
    return res.status(500).json({
      message: "Ha ocurrido un error ... ",
    });
  }
};

// *** para actualizaciones parciales (patch) ****
// UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?", [name, salary, id]

// el modulo express-promise-router incluye manejo de errores