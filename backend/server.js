const express = require('express')
const app = express()
const dotenv = require('dotenv')
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose')
const connectDB = require('../backend/db/db')
const routes = require('../backend/routes/routes')

dotenv.config()

const PORT = process.env.PORT || 4000
connectDB();

app.use(express.static(path.join(__dirname, '../frontend')));

app.use(cors());
app.use('/api', routes)


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});


app.get('/', (req, res) => {
    res.send("Hello Anurag")
})


app.listen(PORT, () => {
    console.log(`Server Listening on Port ${PORT}`)
})