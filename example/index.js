const express = require('express')
const app = express()
const help = require('../src')

app.get(
  '/greeting/:name',
  help(`
  Returns a greeting

    params:
      name: A word that would would like to be called by 
  `),
  function(req, res) {
    res.send(`Hello ${req.params.name}!`)
  }
)

app.post(
  '/greeting',
  help(
    `Creates a greeting
    
      body: 
        name: <string>
        langauge: <string> default english
    `
  ),
  function(req, res) {
    res.sendStatus(201)
  }
)

app.use(
  (req, res, next) => {
    res.status(404)
    next()
  },
  // display full routes on 404
  help('Welcome to my greeting API')
)
module.exports = app
