const express = require('express');
const {getRandomQuizzes, getAllQuizzes} = require("../db/quizzes");

const router = express.Router();

router.get("/randomQuizzes", (req, res, next) => {
    const payload = getRandomQuizzes(3);
    res.status(200).json(payload);
})

router.get("/randomQuizzes/:numberOfQuizzes", (req, res, next) => {
    const payload = getRandomQuizzes(parseInt(req.params.numberOfQuizzes));
    res.status(200).json(payload);
})

router.get("/allQuizzes", (req, res, next) => {
    res.status(200).json(getAllQuizzes());
})

module.exports = router;