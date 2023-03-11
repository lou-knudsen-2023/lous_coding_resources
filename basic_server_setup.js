/////////////////////////////////////////////////////////////
//SERVER USING EXPRESS, AND HANDLEBARS. ALSO USING 3 ROUTES

const { join } = require('node:path')
const express = require('express')
const hbs = require('express-handlebars')

const locationRoutes = require('./routes/locations.js')
const scheduleRoutes = require('./routes/schedule.js')
const eventRoutes = require('./routes/events.js')

/*let banana_id = Number(req.params.id)
 * create the server
 *************************/

const server = express()
module.exports = server

/*
 * configure the server
 *************************/

const publicFolder = join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', join(__dirname, 'views'))

/*
 * define the routes
 *************************/

server.get('/', (req, res) => {
  res.redirect('/schedule/friday')
})

server.use('/locations', locationRoutes)
server.use('/schedule', scheduleRoutes)
server.use('/events', eventRoutes)

/////////////////////////////////////////////////////////////
//SERVER USING EXPRESS, AND HANDLEBARS.
//BASIC ROUTES WITHIN THIS SERVER PAGE

const express = require('express')
const hbs = require('express-handlebars')
const art = require('./data/art.json')

const server = express()

// Middleware
server.use(express.static(__dirname + '/public'))
server.use(express.urlencoded({ extended: true }))

server.engine(
  'hbs',
  hbs.engine({
    extname: 'hbs',
  })
)
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')

// Routes

//viewData obj passed into the pages rendering so we can use that data.
server.get('/', (req, res) => {
  const viewData = {
    title: 'Gallery Home',
    artist: 'Van Gogh',
    art: art,
  }
  const template = 'home'
  res.render(template, viewData)
})

server.get('/artwork/:id', (req, res) => {
  let id = Number(req.params.id)
  const selectedArt = art.find((element) => element.id === id)

  //decontructed:
  // const selectedArt = art.finc((selectedArt.id === Number(req.params.id)))

  const data = {
    artists: selectedArt,
  }
  const template = 'artworks'
  res.render(template, data)
})

module.exports = server
