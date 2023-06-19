const express = require('express');
const router = require('./routes/users');
//const router = express.router();
const app = express();  // it will create express server.
const connectDB = require("./config/db.config");

connectDB();
app.use(express.json());
app.use("/users", require("./routes/users"));
app.use('/profile', require("./routes/profile"));
app.use('/auth', require("./routes/auth"));
app.use('posts', require("./routes/posts"));
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Hello from 38' });
});


app.listen(9000, () => console.log("Server started"));