const express = require("express")
const app = express()
const bodyParser = require('body-parser') //client se body means post- name , email, password fetch karne ke liye ye method ki jaroorat hoti hai (client se server ki rataf)
const cors = require('cors')
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./Models/db');



const PORT = process.env.PORT || 8080

app.get('/ping', (req, res) => {
    res.send("PONG")
})


app.use(bodyParser.json())
app.use(cors());
// client means port 3000 se server 8080 ki request eccept karne ke liye cors libery lagati hai.
app.use('/auth', AuthRouter)
app.use('/products', ProductRouter)

app.listen(PORT, () => {
    console.log(`server is running on port on ${PORT}`)
})
