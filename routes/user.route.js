const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/send', userController.send)
router.get('/messages', userController.messages)

module.exports = router