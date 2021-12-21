const UserController = require("../controllers/user.controller");

module.exports = (app) => {
    app.get("/api/users/:id", UserController.getOneUser);
    app.post("/api/users/register", UserController.register);
    app.post("/api/users/login", UserController.login);
    app.post("/api/users/logout", UserController.logout);
    app.put("/api/users/:id", UserController.updateUser);
}