const express = require("express");
const app = express();

let port = 3000; //8080

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});


// app.use((req, res) => {
//     console.log("request received");
//     res.send( {
//         name: "apple",
//         color: "red",
//     });
// });

app.get("/", (req, res) => {
    res.send("you contacted root path");
});

app.get("/apple", (req, res) => {
    res.send("you contacted apple path");
});

app.get("/orange", (req, res) => {
    res.send("you contacted orange path");
});

// app.get("*", (req, res) => {
//     res.send("This page does not exist");
// });

app.post("/", (req, res) => {
    res.send("You sent a post request to root");
});

app.get("/:username/:id", (req,res) => {
    console.log(req.params);
    res.send("hello gaurav jain");
})


// app.get("/search", (req, res) => {
//     console.log(req.query);
//     res.send("No results");
// });

app.get("/search", (req, res) => {
    let {q} = req.query;
    res.send(`search results for query: ${q}`);
});





