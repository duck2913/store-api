console.clear();
// libraries
require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const notFoundMiddleware = require("./middlewares/notFound.middlewares");

// middleware
app.use(express.json());

// routes

app.use("/home", (_, res) => {
	res.status(200).send("Home page");
});

// error handling
app.use(notFoundMiddleware);

app.listen(port, () => {
	console.log(`--Server is listening at port: ${port} -- `);
});
