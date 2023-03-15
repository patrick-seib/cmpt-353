const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());

const mysql = require('mysql')

const pool = mysql.createConnection({
    host: process.env.MYSQL_HOST_IP,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

app.get('/get-posts', (req, res) => {
  const q = pool.query("SELECT * FROM posts")
  pool.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
})

app.get("/", (req,res)=>{
  res.json("this is the home")
})

app.get('/test', (req, res) => {
  const { table } = req.query;
  pool.query(`SELECT * FROM sample`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
});

app.post("/add-post", (req,res)=>{
  const q = "INSERT INTO posts(`topic`,'data') VALUES (?)";
  const values = [
    req.body.topic,
    req.body.data,
  ];
  pool.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Post has been created.");
  });
})

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(`App server now listening on port ${process.env.REACT_APP_SERVER_PORT}`);
});