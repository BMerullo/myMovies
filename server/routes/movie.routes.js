const moviesController = require("../controllers/movie.controller")
const {authenticate} = require("../config/jwt.config");

module.exports = (app) => {
    app.get("/api/movies", moviesController.findAllMovies);
    app.post("/api/lists/movie/:id", authenticate, moviesController.createMovie)
    app.get("/api/movies/:id", moviesController.findOneMovie);
    app.put("/api/movies/:id",authenticate, moviesController.watchedMovie);
    app.delete("/api/movies/:id", moviesController.deleteMovie);
}