const express = require('express');
const { v4: uuidv4 } = require('uuid')
const fs = require('fs');
const postRouter = express.Router();
const helper = require('./helper');


// LOAD DATA
const dataPath = './data/posts.json';


postRouter.get('/',   (req, res) => {
    helper.readFile(data => {
        //filter from comment
        res.send(data);
    },
    true);
});

// GET ONE POST
postRouter.get('/:postId', (req, res) => {
    helper.readFile(data => {
        if (req.params.postId in data){
            const posts =  data[req.params.postId];
            res.send(posts);
        } else {
            res.status(200).send('the postId is not in data');
        }

    },
    true);
});

module.exports = postRouter;