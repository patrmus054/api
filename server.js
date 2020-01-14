// import express from 'express'
// import {
//     `json,
//     urlencoded`
// } from 'body-parser'
// import morgan from 'morgan'
// import config from './config'
// import cors from 'cors'
// import {
//     connect
// } from './db'
// import foodRouter from './food.router'
const express = require("express");
const {
    json,
    urlencoded
} = require("body-parser");
const config = require("./config");
const cors = require("cors");
const foodRouter = require("./food.router");
const connect = require("./db");

const food = require('./food');

const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(
    urlencoded({
        extended: true
    })
);

//app.use("/api/food", foodRouter);

const start = async () => {
    try {
        await connect();

        app.post('/food/add', food.add);

        app.get('/', (req, res) => {
            res.send('hi')
        });

        app.listen(3000, () => {
            console.log(`REST API on http://localhost:${3000}`);
        });
    } catch (e) {
        console.error(e);
    }
};

module.exports = start;