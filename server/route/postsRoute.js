const express = require('express')
const router = express.Router()

router.get('/posts',  async function(req, res){
  res.json([{
    id:1,
    title: 'REST API:Métodos',
    content:'...',
    date: new Date()
  }])
})
router.get('/posts/:id',  async function(req, res){

})
router.post('/post/',  async function(req, res){

})
router.put('/posts/:id',  async function(req, res){

})
router.delete('/posts/:id',  async function(req, res){

})


module.exports = router

