/////////////////////////////////////////////////
//ACCESSING YOUR DATA FILES OR FOLDERS ////////////////////////////
/////////////////////////////////////////////

// 1. First you need to make sure that your server file is set up correctly.
// Check out this file '/basic_server_setUp.js'

//ACCESSING ONE DB FILE:
//this Variable you set up at the top of the page 'art' will allow you to access the JSON file directly.
const art = require('./data/art.json')

//ACCESSING MULTIPLE DB FILES:
//you can also create a varible for the DIRECTORY containing multiple DBs.
const db = require('../db')

//if doing it this way your index file or main DB file NEEDS to reference which DB file you want to access through the function.
//this function returns the db folder and specifically the (locations db file)
function updateLocation(updatedLocation, db = connection) {
  return db('locations')
    .update(updatedLocation)
    .where({ id: updatedLocation.id })
}

/////////////////////////////////////////////////
//ACCESSING THE DATA WITHIN YOUR FILES OR FOLDERS  ////////////////////////////
/////////////////////////////////////////////


///-----------//
//// ROUTES ////
// In this route we are creating a variable within to access the database file

server.get('/', (req, res) => {
  const viewData = {
    title: 'Gallery Home',
    artist: 'Van Gogh',
    art: art,
  }
  const template = 'home'
  res.render(template, viewData)
})

    // art: art, is pulling the variable art that we assigned at the top of the page that 'requires' our data file.
    // const art = require('./data/art.json')

    // NOTE the other two variables 'title' and 'artist' are strings that we have created for the purpose of this route.
    // They are both new pieces of data.

///-----------//
/// THE 'HOME' VIEW ///
// The above route is rendering the 'home' view. (in this case through the variable that we created called template)

// Example data for this....
[
  {
    "id": 1,
    "title": "Kea in Flight",
    "comments": [
      "Very arty."
    ],
    "artwork": "/images/kea.jpg",
    "artist": {
      "name": "Ben",
      "url": "https://www.flickr.com/photos/seabirdnz/"
    },
    "license": {
      "name": "CC BY-ND 2.0",
      "url": "https://creativecommons.org/licenses/by-nd/2.0/"
    }
  },
  {
    "id": 2,
    "title": "Kowhai Flowers",
    "comments": [
      "Yellow.",
      "So yellow."
    ],
    "artwork": "/images/kowhai.jpg",
    "artist": {
      "name": "Sid Mosdell",
      "url": "https://www.flickr.com/photos/sidm/"
    },
    "license": {
      "name": "CC BY 2.0",
      "url": "https://creativecommons.org/licenses/by/2.0/"
    }
  },
]

/* <h2>Welcome to the {{title}} page</h2>

<p></p>
  <div>
    <ol>
      {{#each art}}
      <div class="container">
          <li>
            <a href="/artwork/{{id}}"><h2>{{title}}</h2></a>
            <img src="{{artwork}}" alt="{{title}}">
            <p>Artist: {{artist.name}}</p>
            <a href={{artist.url}}><p>Click here to view other artwork by {{artist.name}}</p></a> 
            <p>({{license.name}})</p>
          </li>
        </div>  
      {{/each}}
    </ol> */

// LETS WALK THROUGH THE ABOVE CODE:
// {{title}} at the top is being pulled directly from the object we created in our route. Title = Gallery Home
// {{#each art}} = is going to look at object in our route and see 'art: art'. In this case we set up 'art' as the const variable that is pulling our data file directly. So what this is saying is for each object in our JSON file.....
// href="/artwork/{{id}}" is linking us to the browser address. and the {{id}} is the key value that changes depending on which variable is selected on the home page.   
// {{title}} within #each art , /each - is now looking at just the title in each of the objects within the data file. 
// you can work through the others and see the patterns. 

//NOTE: Accessing an object within an object - isnt complicated. You just follow the keys. E.G.
[
{"artwork": "/images/kea.jpg",
    "artist": {
      "name": "Ben",
      "url": "https://www.flickr.com/photos/seabirdnz/"
    }},
{
"artwork": "/images/kowhai.jpg",
"artist": {
  "name": "Sid Mosdell",
  "url": "https://www.flickr.com/photos/sidm/"
}}
]

// {{artist.name}} under an each value will start to pull out the name of the artist = 'ben' or 'sid mosdell'




///-----------//
//// ROUTE TO ACCESS AN OBJECT BY ITS KEY:ID VALUE ////
// 

erver.get('/artwork/:id', (req, res) => {
  let banana_id = Number(req.params.id)
  const selectedArt = art.find((obj) => obj.id === banana_id)

  //decontructed:
  // const selectedArt = art.finc((selectedArt.id === Number(req.params.id)))

  const data = {
    artists: selectedArt,
  }
  const template = 'artworks'
  res.render(template, data)
})

//so the first thing we want to do is create a variable to identify the id within an object. 
//req.params.id is how you identify the id. 
// its easier to follow if you create a variable to use in your code. In the above case we called that variable 'banana_id'
// We want to create a line of code that goes through the data file and locates objects by their id. 
const selectedArt = art.find((obj) => obj.id === banana_id)
// find is the array method that we use. 
// remember art is the variable that we used to access the data file. So art.find is using that array method on the data file. 

//obj.id  is the key we want to access. 
// this code says for the obj (obj) => the objects key id (obj.id) must be strictly equal to (===) the banana.id variable that we stated above (let banana_id = Number(req.params.id)) 

