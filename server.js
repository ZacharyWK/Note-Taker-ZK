require('dotenv').config()

const express = require("express")
const apiRoutes = require("./routes/api-routes")
const htmlRoutes = require("./routes/html-routes")

const app = express();

const PORT = process.env.PORT;

app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use("/api",apiRoutes)
app.use("/",htmlRoutes)


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);