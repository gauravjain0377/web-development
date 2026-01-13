const express = require("express");
const app = express();

// app.use((req, res, next) => {
//     console.log("Hi, I am a 1st Middleware");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am a 2nd Middleware");
//     next();
// });

// app.use((req, res) => {
//     console.log("Hi, I am a Middleware");
//     res.send("Middleware Finished");
// })

// app.use("/api", (req, res, next) => {
//     let {token} = req.query;
//     if(token === "giveaccess") {
//         next();
//     }
//     res.send("ACCESS DENIED");
// } );

const checkToken = (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess") {
        next();
    }
    throw new Error("ACCESS DENIED");
};

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});
 

// app.get("/wrong", (req, res) => {
//     ancd = akdd;
// });

app.get("/random", (req, res, next) => {
    console.log("I am only for random");
    next();
});

// app.get("/api", (req, res) => {
//     res.send("data");
// });


//Logger
// app.use((req, res, next) => {
//     req.responseTime = new Date(Date.now()).toString;
//     console.log(req.method, req.path, req.responseTime, req.hostname);
//     next();
// });

// app.use((req,res,next) => {
//     console.log(req);
//     next();
// });


app.get("/", (req, res) => {
    res.send("Hi, I am root.");
});

app.get("/random", (req, res) => {
    res.send("This is a random page");
});



//404 (Page not found).
app.use((req, res) => {
    res.send("Page not found");
})

app.listen(8080, () => {
    console.log("Server listening to port 8080");
});




