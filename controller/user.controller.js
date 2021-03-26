const db = require('../db')

class UserController {
    async createUser(req, res) {
        const {login, email, password} = req.body;
        console.log(req)
        const role = "user"
        //const newUser = await db.query(`INSERT INTO public."Users" (login, email, password, role) values ($1, $2, $3, $4)`, [login, email, password, role])
        res.json("ok")
    }
    async getUsers(req, res) {

    }
    async getOneUser(req, res) {

    }
}

module.exports = new UserController()