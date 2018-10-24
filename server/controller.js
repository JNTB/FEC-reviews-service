const { Review } = require("../database/models");

const get = (req, res) => {
  Todo.find({}, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data);
    }
  });
};

module.exports.get = get;
