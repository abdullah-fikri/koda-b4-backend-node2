const express = require("express");
const Routers = require("./src/router/index");
const doc = require("./src/lib/docs");

const app = express();
doc(app);
app.use(express.json());

app.use(Routers);

app.listen(8000, ()=>{
    console.log("Running on http://localhost:8000");
});
