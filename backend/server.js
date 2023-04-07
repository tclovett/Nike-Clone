'use strict';

const dotenv = require('dotenv');
dotenv.config();
console.log(process.env);

//SETUP DEPENDECIES:
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 8000;
app.use(express.json());
app.use(cors());
const { listenerCount } = require('stream');

const dbConn = require('./dbConn');
const pool = dbConn.getPool();

app.get('/api/shoes', (req, res, next) => {
    pool.query('SELECT * FROM shoes', (err, result) => {
        if (err){
            res.status(404).send(err)
        } else {
            const stuff = result.rows;
            res.status(200).send(stuff);
        }
    })
})

app.get('/api/shoes/:id', (req, res, next) =>{
    const id = Number.parseInt(req.params.id);

    pool.query('SELECT * FROM shoes WHERE id=$1', [id], (err, result) => {
        if (err){
            res.status(404).send(err);
        } else {
            const shoe = result.rows;
            res.status(200).send(shoe);
        }
    })
})

//Query provides an extra column on return of query, column 'shoes_name' which is pulled from parent table 'shoes'
app.get('/api/review', (req, res, next) => {
    pool.query('SELECT review.*, shoes.name AS shoes_name FROM review INNER JOIN shoes ON review.review_id = shoes.id;', (err, result) => {
        if (err) {
            res.status(404).send(err);
        } else {
            const reviews = result.rows;
            res.status(200).send(reviews); 
        }
    })
})

app.get('/api/review/:id', (req, res, next) => {
    const id = Number.parseInt(req.params.id);

    pool.query('SELECT * FROM review WHERE id=$1', [id], (err, result) => {
        if (err){
            res.status(404).send(err)
        } else {
            const review = result.rows;
            res.status(200).send(review);
        }
    })
})

app.get('/api/:word', (req, res, next) => {
    const word = req.params.word;
    res.status(405).send(`NOT FOUND!! - 405 ERROR - /api/${word}/ DOES NOT EXIST`)
})

app.post('/api/shoes/', (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const image = req.body.image;
    const image_array = req.body.image_array;
    const description = req.body.description;
    const color_description = req.body.color_description;
    const size_array = req.body.size_array;

    if (!name || !price || !image || !image_array || !description || !color_description || !size_array){
        return res.status(407).send("Error in post data or insufficient data provided for post route shoes")
    }

    pool.query('INSERT INTO shoes (name, price, image, image_array, description, color_description, size_array) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING*;', [name, price, image, image_array, description, color_description, size_array], (err, result) => {
        if (err) {
            res.status(409).send(err);
        } else {
            const shoeInfo = result.rows[0];
            res.status(202).send(shoeInfo)
        }
    })
})

app.post('/api/review/', (req, res) => {
    const review_id = req.body.review_id;
    const stars = req.body.stars;
    const user_name = req.body.user_name;
    const date_created = req.body.date_created;
    const summary = req.body.summary;

    if (!review_id || !stars || !user_name || !date_created || !summary){
        return res.status(408).send("Error in post data or insufficient data provided for post route review")
    }

    pool.query('INSERT INTO review (review_id, stars, user_name, date_created, summary) VALUES ($1, $2, $3, $4, $5) RETURNING*;', [review_id, stars, user_name, date_created, summary], (err, result) => {
        if (err) {
            res.status(410).send(err);
        } else {
            const reviewInfo = result.rows[0];
            res.status(203).send(reviewInfo);
        }
    })
})


//DELETE ROUTES (x2) - NOT NECESSARY
//PATCH ROUTES (x2) - NOT NECESSARY

app.use(function(err, req, res, next){
    res.status(404).send("ERROR 404 ('MIDDLEWARE') - THERE WAS A PROBLEM", err);
});


app.listen(port, function(){
    console.log(`Service is running, listening on ${port}`);
});