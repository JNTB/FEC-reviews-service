const { Review } = require("../database/index.js");

const get = (req, res) => {
  Review.find({}, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data);
    }
  });
};

module.exports.get = get;
