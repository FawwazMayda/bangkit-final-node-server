const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 8080

app.use(cors())
app.use(express.static("static"))

app.use((req,res,next)=> {
    console.log("Server is running")
    next()
})

app.listen(port, ()=> {
    console.log(`Listening at PORT: ${port}`)
})