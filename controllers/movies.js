const MovieSchema = require('../models/Movie.js')

module.exports.controller = (app) => {
  // fetch all movies
  app.get('/movies', (req, res) => {
    MovieSchema.find({}, 'name description release_year genre', (error, movies) => {
      if (error) { console.log(error) }
      res.send({
        movies
      })
    })
  })

  // add a new movie
  app.post('/movies', (req, res) => {
    const newMovie = new MovieSchema({
      name: req.body.name,
      description: req.body.description,
      release_year: req.body.release_year,
      genre: req.body.genre
    })

    newMovie.save((error, movie) => {
      if (error) { console.log(error) }
      res.send(movie)
    })
  })
}
