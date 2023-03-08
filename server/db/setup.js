const fs = require("fs")
const { setgroups } = require("process")
const client = require("./connection")

const userSchema = fs.readFileSync('./db/user.sql').toString()
const seed = fs.readFileSync('./db/seed.sql').toString()

const setupDatabase = async () => {
    await client.query(userSchema);
    await client.query(seed);
}

setupDatabase()


module.exports = { setupDatabase };
