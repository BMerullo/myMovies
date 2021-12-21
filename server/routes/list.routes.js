const listController = require("../controllers/list.controller")
const {authenticate} = require("../config/jwt.config");

module.exports = (app) => {
    app.get("/api/lists", listController.findAllLists);
    app.post("/api/list/new", authenticate, listController.createNewList);
    app.get("/api/lists/:id", listController.findOneList);
    app.put("/api/my-lists/:userId",authenticate, listController.findAllListsByUser);
    app.delete("/api/lists/:id", listController.deleteList);
}
