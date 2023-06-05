var express = require("express");
var router = express.Router();
var db = require("./connect.js");

router.get("/todo", function (req, res, next) {
  var sql = "SELECT * FROM todos";
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.status(200).send(data);
  });
});
router.post("/todo/post", function (req, res, next) {
  var sql =
    "INSERT INTO `todos`(`id`,`title`,`status`) VALUES (" +
    req.body.id +
    ",'" +
    req.body.title +
    "'," +
    req.body.status +
    ")";
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.status(200).send("todos saved");
  });
});
router.put("/todo/edit/:id", function (req, res, next) {
  var sql =
    "UPDATE todos SET title='" +
    req.body.title +
    "',status=" +
    req.body.status +
    " WHERE id=" +
    req.params.id;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.status(200).send("todo edited");
  });
});

router.delete("/todo/delete/:id", function (req, res, next) {
  var sql = "DELETE FROM todos WHERE id=" + req.params.id + "";
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.status(200).send("todo deleted");
  });
});
module.exports = router;
