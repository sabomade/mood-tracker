const router = require("express").Router();
const StudentController = require("../../controller/StudentController");
const UserController = require("../../controller/UserController");

//localhost:3001/api/student/
// shows all kind acts in db when get started btn is pressed
// before user logs in
router.route("/").get(StudentController.findAll).post(StudentController.create);

// finds and updates a kind act by id
//localhost:3001/api/student/:id
router.route("/:id").get(StudentController.findById).put(UserController.update);

module.exports = router;
