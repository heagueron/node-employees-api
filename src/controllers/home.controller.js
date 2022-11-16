import { pool } from "../db.js";

//HOME
export const home = (req, res) => {
  return res.status(403).json({
    message: "Access denied ... ",
  });
};

export const companySalaries = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM employee as result");
    let companySalaries = 0;
    result.forEach(
      (emp) => (companySalaries = companySalaries + parseInt(emp.salary))
    );
    //res.json(result)
    res.json(companySalaries);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Ha ocurrido un error ... ",
      error,
    });
  }
};
