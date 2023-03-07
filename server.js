const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
const port 3000;

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// secret key for jwt
const secretKey = "epicsecretkey";

// db of users
// would be linked to backend db

// login route
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // find user with matching username
    const user = users.find((user) => user.username === username);

    // if user not found, send err
    if (!user) {
        return res.status(404).json({ message: "Username not found!" });
    }

    // if username incorrect, send err
    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: "Invalid username or password" });
    }

    // generate jwt token and send success 
    const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
})