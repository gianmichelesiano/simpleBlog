const request = require('supertest')
const app = require('../index')
const config = require('config');



// data for testing
let postId = '2282cb0c-f1d6-427a-bec8-4e31826c4b8e'
let postIdDummy = '2282cb0c-f1d6-427a-bec8-4e31826c4b8'
let commentId = '68e98af4-a854-40cb-8f36-22c169dc312a'

// Posts list all
test("GET /posts", async () => {
  await request(app).get('/posts')
    .expect(200)
    .then(  (response) => {
      expect(typeof response.body).toBe('object');
    })
})

// Posts single one 
test("GET /posts/:postId", async () => {
  await request(app).get('/posts/'+postId)
    .expect(200)
    .then(  (response) => {
      expect(typeof response.body).toBe('object');
    })
})


// List comments
test("GET /comments/:postId", async () => {
  await request(app).get('/comments/'+postId)
    .expect(200)
    .then(  (response) => {
      expect(typeof response.body).toBe('object');
    })
})


// Add new comment 
test("POST /comments/:postId", async  () => {
  const commentNew = {  "name": "test name new", "text": "test text new" }
  await  request(app).post('/comments/'+postId)
    .send(commentNew)
    .expect(200)
    .then( async   (response) => {
       expect(response.text).toBe('new comment added');
    })

  const commentRequired = {  "name": "test name new", "text": "" }
    await  request(app).post('/comments/'+postId)
      .send(commentRequired)
      .expect(200)
      .then( async   (response) => {
         expect(response.text).toBe('the text of comment are required');
      })
})

// Update comment 
test("PUT /comments/:postId/:commentId", async  () => {
  let commentUpdate = {  "name": "test name update", "text": "test text update" }
  await  request(app).put('/comments/'+postId+'/'+commentId)
    .send(commentUpdate)
    .expect(200)
    .then( async   (response) => {
       expect(response.text).toBe('comment updated');
    })

  let commentRequired = {  "name": "test name update", "text": "" }
    await  request(app).put('/comments/'+postId+'/'+commentId)
      .send(commentRequired)
      .expect(200)
      .then( async   (response) => {
         expect(response.text).toBe('the text of comment are required');
      })
})


// Test html page
test('test html', async () => {
  const index = await request(app).get('/')
  expect(index.type).toEqual('text/html');
  expect(index.text).toContain('index.js');

  const blogspot = await request(app).get('/blogspot.html')
  expect(blogspot.type).toEqual('text/html');
  expect(blogspot.text).toContain('blogspot.js');
});