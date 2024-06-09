const express = require('express');
const cors = require('cors');
// const phones = require('phones');
const phones = require('./house.json');
const app = express();
app.use(cors());
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', (req, res) => {
  res.send('Hello World with data!')
})
app.get('/phones', (req, res) => {
  res.send(phones);
})
app.get('/phones/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log('data id: ', id);
  const phone = phones.find(phone => phone._id === id) || {};
  res.send(phone);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})