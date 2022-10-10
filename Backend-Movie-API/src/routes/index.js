const { Router } = require("express")

const usersRouter = require("./users.routes.js")
const moviesRouter = require("./movies.routes")
const tagsRoutes = require("./tags.routes")

const routes = Router()
routes.use("/users", usersRouter)
routes.use("/movies", moviesRouter)
routes.use("/tags", tagsRoutes) 

module.exports = routes