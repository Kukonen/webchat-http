const db = require('../db')
const validator = require('validator')
const md5 = require('md5')

class UserController {

    async register(req, res) {
        const {login, email, password} = req.body;
        
        let loginValid = true
        let emailValid = true
        let passwordValid = true

        /********         VALIDATOR        ************** */

        if (!validator.isEmail(email)) emailValid = false;
        if (validator.isEmpty(login)) loginValid = false;
        if (validator.isEmpty(email)) emailValid = false;
        if (validator.isEmpty(password)) passwordValid = false;

        /************************************************ */

        /**FIND COINCIDENCE LOGIN AND EMAIL FROM DATABASE**/

        let loginСoincidenceСount = []
        await db.query(`SELECT * FROM public."Users" WHERE login = '${login}'`).then((result) => {
            loginСoincidenceСount = JSON.parse(JSON.stringify(result.rows));
        }).catch(e => console.log('error db'))
        
        let emailСoincidenceСount = []
        await db.query(`SELECT * FROM public."Users" WHERE email = '${email}'`).then((result) => {
            emailСoincidenceСount = JSON.parse(JSON.stringify(result.rows));
        }).catch(e => console.log('error db'))

        if (!(loginСoincidenceСount.length == 0)) loginValid = false;
        if (!(emailСoincidenceСount.length == 0)) emailValid = false;

        /************************************************ */
        
        if (!loginValid && emailValid & passwordValid) {res.json({"data": "", "error": "login invalid"}); return 0;}
        if (loginValid && !emailValid & passwordValid) {res.json({"data": "", "error": "email invalid"}); return 0;}
        if (loginValid && emailValid & !passwordValid) {res.json({"data": "", "error": "password invalid"}); return 0;}
        if (!loginValid && !emailValid & passwordValid) {res.json({"data": "", "error": "login and email invalid"}); return 0;}
        if (loginValid && !emailValid & !passwordValid) {res.json({"data": "", "error": "email and password invalid"}); return 0;}
        if (!loginValid && emailValid & !passwordValid) {res.json({"data": "", "error": "login and password invalid"}); return 0;}
        if (!loginValid && !emailValid & !passwordValid) {res.json({"data": "", "error": "login and email and password invalid"}); return 0;}

        console.log(password)
        let hashPassword = password + 'some'
        ///////
        hashPassword = md5(hashPassword)
        console.log(hashPassword)
        ///////
        const role = "user"
        const newUser = await db.query(`INSERT INTO public."Users" (login, email, password, role) values ($1, $2, $3, $4)`, [login, email, hashPassword, role])
        res.json({"data": hashPassword, "error": "ok"})
    }
    async login(req, res) {
        const {login, password} = req.body;
        console.log(login)
        console.log(password)
        let user = []
        /////
        let hashPassword = password + 'some'
        hashPassword = md5(hashPassword)
        /////
        console.log(hashPassword)
        await db.query(`SELECT * FROM public."Users" WHERE login = '${login}' AND password = '${hashPassword}'`).then((result) => {
            console.log(result.rows)
            user = JSON.parse(JSON.stringify(result.rows));
        }).catch(e => console.log('error db'))

        let sendMessage = {
            "login": user[0].login,
            "password": user[0].password,
            "role": user[0].role
        }
        console.log(sendMessage)
        res.json(sendMessage)
    }
}

module.exports = new UserController()