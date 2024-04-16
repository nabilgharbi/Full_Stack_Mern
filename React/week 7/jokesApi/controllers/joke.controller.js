//!---- the controller does the CRUD for DB

//?---- import the model here
const Joke = require("../models/joke.model")


module.exports = {

    //?=========Read All

    GetAllJokes: (req, res) => {
        Joke.find() //[]
            .then((allJokes) => {
                console.log(">>>> Joke.find()", allJokes)
                res.json(allJokes)
            })
            .catch((err) => {
                console.log(err)
                res.json(err)
            })

    },

    //?========= CREATE

    AddNewJokes: (req, res) => {
        Joke.create(req.body)
            .then((newlyCreatedJokes) => {
                res.json(newlyCreatedJokes)
            })
            .catch((err) => {
                res.json(err)
            })
    },


    //?=========READ ONE
    GetOneJoke: (req, res) => {
        Joke.findOne({ _id: req.params.id })
            .then((oneSingleMovie) => {
                res.json(oneSingleMovie)
            })
            .catch((err) => {
                res.json(err)
            })

    },


    //?=========UPDATE

    UpdateJoke: (req, res) => {
        Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then((UpdatedMovie) => {
                res.json(UpdatedMovie)
            })
            .catch((err) => {
                res.json(err)
            })
    },


    //?=========DELETE
    DeleteJoke: (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.json(err)
            })
    }

}