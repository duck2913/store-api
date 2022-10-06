console.clear()
// libraries
require("dotenv").config()
require("express-async-errors")
const express = require("express")
const app = express()

const port = process.env.PORT || 3000

// middleware
app.use(express.json())

// routes
const tasksRouter = require("./routes/products.routes")

app.use("/home", (_, res) => {
	res.status(200).send("Home page")
})

app.use("/tasks", tasksRouter)

// error handling
const notFoundMiddleware = require("./middlewares/notFound.middlewares")
const errorMiddleware = require("./middlewares/errorHandler.middleware")

app.use(notFoundMiddleware)
app.use(errorMiddleware)

app.listen(port, () => {
	console.log(`--Server is listening at port: ${port} -- `)
})
