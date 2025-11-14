const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');
const express = require('express');
const app = express();

const PORT = 8080;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/home', (req, res) => {
  res.redirect('/');
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact-me.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
