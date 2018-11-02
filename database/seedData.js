const { db, Review } = require("./index");

let reviews = [];

let adjopts = [
  "incredible",
  "spacious",
  "clean",
  "cute",
  "quaint",
  "fookin trash m8",
  "dope AF"
];
let startopts = [
  "wow, ",
  "OMG, ",
  "HO-LEE SHEIT, ",
  "aslfhalksufa, ",
  "what can I say, "
];
let ownersopts = [
  "Itachi`s",
  "Sauske`s",
  "All-might`s",
  "Kakashi`s",
  "UR MUM`S",
  "ONI-SAN`S",
  "Goku`s",
  "Dabi`s",
  "Toga`s",
  "Justin`s",
  "Kin`s",
  "Julian`s",
  "Yu-Lin`s"
];
let owneradjopts = [
  "coo",
  "swaggy",
  "cute AF",
  "FOINE",
  "lit",
  "brotacular",
  "nice"
];
let ratingopts = [
  "solid YEET/YEET",
  "420/10",
  "dope/dope",
  "10/10",
  "8/8",
  "ok/ok",
  "cool/meh"
];
let useropts = [
  "Neil",
  "Julie",
  "Drew",
  "Arash",
  "Merlin",
  "Kyle",
  "Dylan",
  "Yongsoo",
  "Hayden",
  "Omar",
  "Matt",
  "Tim",
  "Steve"
];
let dateopts = [
  "January 2018",
  "Febuary 2018",
  "March 2018",
  "April 2018",
  "May 2018",
  "June 2018",
  "July 2018",
  "August 2018",
  "September 2018",
  "October 2018",
  "November 2018",
  "December 2018"
];
for (let i = 0; i < 100; i++) {
  let review = {};

  let adj = adjopts[Math.floor(Math.random() * adjopts.length)];
  let start = startopts[Math.floor(Math.random() * startopts.length)];
  let owner = ownersopts[Math.floor(Math.random() * ownersopts.length)];
  let owneradj = owneradjopts[Math.floor(Math.random() * owneradjopts.length)];
  let rating = ratingopts[Math.floor(Math.random() * ratingopts.length)];
  let user = useropts[Math.floor(Math.random() * useropts.length)];
  let date = dateopts[Math.floor(Math.random() * dateopts.length)];
  let comment = `${start} this house is so ${adj}, i cannot believe how incredibly ${owneradj} ${owner} was. I would give ${owner} house a ${rating}`;
  let imgstring = `./profilePics/${user}.png`;

  review.user = user;
  review.date = date;
  review.user_img = imgstring;
  review.comment = comment;

  reviews.push(review);
}

Review.create(reviews).then(() => db.disconnect());
