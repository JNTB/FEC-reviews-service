const { Review } = require("../database/models");

const get = (req, res) => {
  Review.find({}, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data);
    }
  });
};
