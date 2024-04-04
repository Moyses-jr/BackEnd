const router = require("express").Router();

const { studentRouter } = require("./student");

router.use(studentRouter);

module.exports = router;
