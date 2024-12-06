const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'boxdb',
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected...');
});

app.get('/squares', (req, res) => {
  db.query('SELECT * FROM squares', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post('/squares', (req, res) => {
  const { title } = req.body;
  db.query('INSERT INTO squares (title) VALUES (?)', [title], (err) => {
    if (err) throw err;
    res.send({ message: 'Square added' });
  });
});

app.delete('/squares/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM squares WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.send({ message: 'Square deleted' });
  });
});

app.get('/squares/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM squares WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    res.send(results[0]);
  });
});

app.listen(3000, () => console.log('Server started on port 3000'));
