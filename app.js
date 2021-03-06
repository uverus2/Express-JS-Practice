const express = require('express');

// to create an express app call express

// const colors = [
//     'red',
//     'orange',
//     'yellow',
//     'green',
//     'blue',
//     'purple'
// ];

const names = [{
        firstName: "Kons",
        lastName: "Ruzhev"
    },
    {
        firstName: "Kons2",
        lastName: "Ruzhev2"
    },
]

const app = express();

// Tells which templating engine to use
// By default it looks into a folder called => views within root
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/cards", (req, res) => {
    res.render("card", { prompt: "Who is baried in the Grant's tomb", hint: "Think about whose tomb it is" });
});

app.get("/sandbox", (req, res) => {
    res.render("sandbox", { names });
});

app.listen(3000, () => {
    console.log("Application is runnig on localhost:3000");
})