const mongoose =require("mongoose");

const movieSchema = new mongoose.Schema({
    imdbID:{
        type: String,
        required: [true]
    },
    title: {
        type: String,
        required: [true]
    },
    haveWatched: {
        type: Boolean,
        default: false
    }
})
const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
