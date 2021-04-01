const db = require('../db')
const validator = require('validator')
const md5 = require('md5')

class UserController {
    async register(req, res) {
        const {login, email, password} = req.body;

        let loginValid = true
        let emailValid = true
        let passwordValid = true

        /********         VALIDATION        ************* */

        if (!validator.isEmail(email)) emailValid = false;
        if (validator.isEmpty(login)) loginValid = false;
        if (validator.isEmpty(email)) emailValid = false;
        if (validator.isEmpty(password)) passwordValid = false;

        if (!(/^[0-9a-zA-Z-_]+$/.test(login))) loginValid = false;
        if (!(/^[0-9a-zA-Z]+$/.test(password))) passwordValid = false;

        if (!(login.length > 2 && login.length < 10)) loginValid = false;
        if (!(password.length > 4 && password.length < 21)) loginValid = false;

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

        let hashPassword = password + 'some'
        ///////
        hashPassword = md5(hashPassword)
        ///////
        const role = "user"
        const newUser = await db.query(`INSERT INTO public."Users" (login, email, password, role) values ($1, $2, $3, $4)`, [login, email, hashPassword, role])
        res.json({"data": hashPassword, "error": "ok"})
    }
    async login(req, res) {
        const {login, password} = req.body;
        let user = []
        /////
        let hashPassword = password + 'some'
        hashPassword = md5(hashPassword)
        /////
        await db.query(`SELECT * FROM public."Users" WHERE login = '${login}' AND password = '${hashPassword}'`).then((result) => {
            user = JSON.parse(JSON.stringify(result.rows));
        }).catch(e => console.log('error db'))

        let sendMessage = {
            "login": user[0].login,
            "password": user[0].password,
            "role": user[0].role
        }
        res.json(sendMessage)
    }

    async send(req, res) {
        const {login, password, text} = req.body;
        let user = []
        await db.query(`SELECT * FROM public."Users" WHERE login = '${login}' AND password = '${password}'`).then((result) => {
            user = JSON.parse(JSON.stringify(result.rows));
        }).catch(e => console.log('error db'))

        let years = new Date().getFullYear();
        let month = new Date().getMonth() + 1;
        let day = new Date().getDate();
        let hour = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds()

        let date = '' + years + '.' + month + '.' + day + '.' + hour + '.' + minutes + '.' + seconds;

        const newMessage = await db.query(`INSERT INTO public."Messages" (date, username, text) values ($1, $2, $3)`, [date ,user[0].login, text])
        
        res.json("ok")
    }
    async messages(req, res) {
        let user = []
        await db.query(`SELECT * FROM public."Messages"`).then((result) => {
            user = JSON.parse(JSON.stringify(result.rows));
        }).catch(e => console.log('error db'))
        res.json(user)
    }
}

module.exports = new UserController()