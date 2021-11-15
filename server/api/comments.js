const express = require('express');

const { v4: uuidv4 } = require('uuid')
const fs = require('fs');

const helper = require('./helper');
const commentRouter = express.Router();

// LIST COMMENTS SPECIFIC POSTS
commentRouter.get('/:postId', (req, res) => {
    helper.readFile(data => {

        if ((req.params.postId in data) && ("comments" in data[req.params.postId])) {
            res.send(data[req.params.postId]["comments"]);
        } else {
            res.status(200).send('There is no comment for this postId');
        }
    },
    true);
});

// CREATE NEW COMMENT
commentRouter.post('/:postId', (req, res) => {
    helper.readFile(data => {
        let postId = req.params.postId
        if (req.body['text'] === ""){
            res.status(200).send('the text of comment are required');
        } else {
            comments = data[postId]["comments"]
            comments[uuidv4()] = req.body;

            helper.writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('new comment added');
            });
        }
    },
    true);
});


// UPDATE COMMENT
commentRouter.put('/:postId/:commentId', (req, res) => {
    helper.readFile(data => {
        const postId = req.params["postId"];
        const commentId = req.params["commentId"];

        if (req.body['text'] === ""){
            res.status(200).send('the text of comment are required');
        } else {

            commments = data[postId]["comments"]            
            commments[commentId] = req.body;

            helper.writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('comment updated');
            });
        }
    },
    true);
});


module.exports = commentRouter;