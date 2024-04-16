const jokeController = require("../controllers/joke.controller")


module.exports = app => {
    //returns a list of all jokes
    app.get("/api/jokes", jokeController.GetAllJokes);

    //returns the joke with matching "id"
    app.get("/api/jokes/:id", jokeController.GetOneJoke);

    //updates the joke with matching "id"
    app.patch("/api/jokes/update/:id", jokeController.UpdateJoke);

    //creates a new joke
    app.post("/api/jokes/new", jokeController.AddNewJokes);

    //removes the joke with matching "id"
    app.delete("/api/jokes/delete/:id", jokeController.DeleteJoke);
}