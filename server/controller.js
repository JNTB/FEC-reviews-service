const { Review } = require("../database/index.js");

const get = (req, res) => {
  let pageNumber = Number(req.params.id);
  let multiplier = 0;

  if (pageNumber > 1) {
    multiplier = pageNumber - 1;
  }
  Review.find({})
    .skip(multiplier * 7)
    .limit(7)

    .exec((err, result) => {
      if (err) {
        console.error(err);
      } else {
        res.send(result);
      }
    });
};
module.exports.get = get;
