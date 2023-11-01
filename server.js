require("dotenv").config()

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express()

const port = process.env.PORT;

// middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// routes



app.listen(port, () => console.log(`Server is running on ${port}`))