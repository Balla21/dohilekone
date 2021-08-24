const express = require("express");
const layouts = require("express-ejs-layouts");
const path = require("path");

const homeController = require("./controllers/homeController.js");

const PORT = 8080;


const app = express();
 
app.use(express.static(path.resolve(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.use(layouts);


app.get("/", homeController.homePage);


app.use((req, res) => {
    return res.status(404).send("Error")
});

//app.listen(PORT, () => console.log(`server running at localhost:${PORT}`))