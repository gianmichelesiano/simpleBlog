const express = require('express');
const fs = require('fs');
const cors = require('cors');

const config = require('config');
const PORT = config.get('server.port');
const HOST = config.get('server.host');

const postRouter = require('./api/posts')
const commentRouter = require('./api/comments')

const app = express();
app.use(cors());
app.use(express.json());


app.use("/posts", postRouter);
app.use("/comments", commentRouter);


app.use("/", express.static(__dirname + "/public"))

app.listen(PORT,  () =>{
    console.log(`Running on http://${HOST}:${PORT}`);
})

module.exports = app;