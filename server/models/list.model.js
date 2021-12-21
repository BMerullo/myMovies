const mongoose =require("mongoose");

const ListSchema = new mongoose.Schema({
//NAME OF THE LIST
    name: {
        type: String,
        required: [true, "Your list needs a name"],
    },
//GENRE OF THE LIST
    genre: {
        type: String,
    },

    movies: [{
        type: mongoose.Schema.Types.ObjectId,

        ref: "Movie"
    }],

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,

        ref: "User"
    }
}, {timestamps: true})

const List = mongoose.model("List", ListSchema);
module.exports = List;
