import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql";
/* eslint-disable no-console */

const GET_ALL_USERS = "SELECT * FROM users";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "asdmc420",
  database: "resource_manager_schema"
});

connection.connect(err => {
  if (err) {
    console.log("Error in makin connection to database");
    return err;
  }
  return 1;
});

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json({ type: ["json"] }));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/users", (req, res) => {
  connection.query(GET_ALL_USERS, (err, result) => {
    if (err) {
      return res.send(err);
    }

    return res.json({ data: result });
  });
});

app.listen(port);

console.log("************************************");
console.log("Api server is Running :)");
console.log("Server running on port:", port);
console.log("************************************");
