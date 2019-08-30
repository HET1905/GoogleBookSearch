
    
require("dotenv").config();
const axios = require("axios");
const db = require("../models");
const path = require("path");

router.get("/api/serchBooks", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
