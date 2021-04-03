const db = require('../db');
const validator = require('validator');
const md5 = require('md5');
const uuid = require('uuid');
const formidable = require('formidable');
const fs = require('fs')

class UserController {
    async register(req, res) {
        const {login, password} = req.body;

        let loginValid = true
        let passwordValid = true

        /********         VALIDATION        ************* */

        if (validator.isEmpty(login)) loginValid = false;
        if (validator.isEmpty(password)) passwordValid = false;

        if (!(/^[0-9a-zA-Z-_]+$/.test(login))) loginValid = false;
        if (!(/^[0-9a-zA-Z]+$/.test(password))) passwordValid = false;

        if (!(login.length > 2 && login.length < 13)) loginValid = false;
        if (!(password.length > 4 && password.length < 21)) loginValid = false;

        /************************************************ */

        /**FIND COINCIDENCE      LOGIN      FROM DATABASE**/

        let loginСoincidenceСount = []
        await db.query(`SELECT * FROM public."Users" WHERE login = '${login}'`).then((result) => {
            loginСoincidenceСount = JSON.parse(JSON.stringify(result.rows));
        }).catch(e => console.log('error db'))
        if (!(loginСoincidenceСount.length == 0)) loginValid = false;

        /************************************************ */
        
        if (!loginValid && passwordValid) {res.json({"data": "", "error": "login invalid"}); return 0;}
        if (loginValid && !passwordValid) {res.json({"data": "", "error": "password invalid"}); return 0;}
        if (!loginValid && !passwordValid) {res.json({"data": "", "error": "login and password invalid"}); return 0;}

        let hashPassword = password + 'some'
        ///////
        hashPassword = md5(hashPassword)
        ///////
        const role = "user"
        const newUser = await db.query(`INSERT INTO public."Users" (login, avatar, password, role) values ($1, $2, $3, $4)`, [login, '', hashPassword, role])
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

        console.log(user);

        let sendMessage = {
            "login": user[0].login,
            "password": user[0].password,
            "avatar": user[0].avatar,
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
        let messages = []
        await db.query(`SELECT * FROM public."Messages"`).then((result) => {
            messages = JSON.parse(JSON.stringify(result.rows));
        }).catch(e => console.log('error db'))

        

        let data = []

        for (let i = 0; i < messages.length; ++i) {
            let user = []
            await db.query(`SELECT * FROM public."Users" WHERE login = '${messages[i].username}'`).then((result) => {
                user = JSON.parse(JSON.stringify(result.rows));
            }).catch(e => console.log('error db'))
                
            data.push({
                login: messages[i].username,
                date: messages[i].date,
                avatar: user[0].avatar,
                text: messages[i].text
            })
        }

        res.json(data)
    }

    async changeAvatar(req, res) {
        const form = formidable({ multiples: true });
        let file = null
        let filePathInServer = ""
        let userInformation = {}
        const avatarName = uuid.v4() + ".jpg";
        await new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                if (err) {
                    reject(() => console.log(err));
                    return;
                }
                userInformation = JSON.parse(JSON.stringify(fields));
                file = files.file
                filePathInServer = file.path + "\\" + file.name;
                resolve()
            })
        }).then(async () => {
            await db.query(`SELECT * FROM public."Users" WHERE login = '${userInformation.login}' AND password = '${userInformation.password}'`).then(async () => {
                await db.query(`UPDATE public."Users" SET avatar = '${avatarName}' WHERE login = '${userInformation.login}' AND password = '${userInformation.password}'`).then( () => {
                    console.log('aratar added in db')
                })
            }).catch(e => console.log('error db'))
        });
        

        fs.rename(file.path, "C:\\Users\\evgen\\Desktop\\react-apps\\webchat\\static\\" + avatarName, () => console.log("ok"))

        res.json(avatarName)
    }

    async getUserAvatar(req, res) {
        const login = req.login;

        await db.query(`SELECT * FROM public."Users" WHERE login = '${login}'`).then((result) => {
            user = JSON.parse(JSON.stringify(result.rows));
        }).catch(e => console.log('error db'))

        res.json(user[0].avatar)
    }
}

module.exports = new UserController()