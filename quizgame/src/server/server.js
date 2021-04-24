const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Api routes
const matchApi = require("./routes/match-api");

const app = express();

//to handle JSON payloads
app.use(bodyParser.json());

// Routes
app.use("/api", matchApi)

app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));

// Return correct page
app.use((req, res, next) => {
    if (req.method !== "GET") {
        return next();
    }
    res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Started on http://localhost:3000");
});