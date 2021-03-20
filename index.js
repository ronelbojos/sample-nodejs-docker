const express = require("express");
const app = express();
const router = express.Router();

const path = __dirname + '/views/';

// Constants
const PORT = 8888;

router.use( (req, res, next) => {
    console.log("/" + req.method);
    next();
});

router.get("/",  (req, res) => {
    res.sendFile(path + "index.html");
});

router.get("/sharks", (req, res) => {
    res.sendFile(path + "sharks.html");
});

app.use(express.static(path));
app.use("/", router);

app.listen(PORT, () => {
    console.log(`Ferd's World app listening at http://localhost:${PORT}!`);
});