const express = require("express");
const app = express();

app.use(express.json());

const Routers = require("./src/router/index");
app.use(Routers);

app.listen(9000, ()=>{
    console.log("Running on http://localhost:9000");
});
