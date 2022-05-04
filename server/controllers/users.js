const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const testController = (req, res) => {
    res.send("Ride BMX!");
}

const getAllUsers = (req, res) => {
    pool.query("SELECT * FROM users", (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

const createUser = (req, res) => {
    const { firstName, lastName } = req.body
    let sql = "INSERT INTO users (first_name, last_name) VALUES (?, ?)"
    sql = mysql.format(sql, [ firstName, lastName ])
  
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err)
      return res.json({ newId: results.insertId });
    })
  }

module.exports = {
    testController,
    createUser,
    getAllUsers
}