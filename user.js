const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

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
    res.json({ message: "Login successful", token });

    // signup route
    app.post("/singnup", (req, res) => {
        const { name, password } = req.body;

        // check if user exists
        if(users.some((user) => user.name == name)) {
            return res.status(409).json({ message: "User already exists" });
        }

        // hash password
        const hashedPassword = bcrypt.hashSync(password, 10);

        // add new user to db

        // auth middleware
        const auth = (req, res, next) => {
            const token = req.headers.authorisaton.split(" ")[1];

            // if token not present, send err
            if(!token) {
                return res.status(404).json({ message: "Authorisation failed" });
            }

            // veryify token
            try {
                const decoded = jwt.verify(token, secretKey);
                req.user = decoded;
                next();
            } catch (error) {
                return res.status(401).json({ message: "Authorisation failed" });
            }
        };

        // protected route
        app.get("/protected", auth, (req, res) => {
            res.json({ message: `Hello ${req.user.username}` });
        });

        app.listen(port, () => {
            console.log(`server listening on port ${port}`);
        });
    })
});