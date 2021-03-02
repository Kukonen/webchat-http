const {Router} = require('express');

const Messages = require('./models/messages')

const router = Router();

router.get('/', async (req, res) => {
    console.log(req.body.name)
    console.log(req.body.text)
    const messages = await Messages.getMessages();
    res.render('main', {
        messages
    });
})

router.post('/', async (req, res) => {


    const message = new Messages(req.body.name, req.body.text)

    await message.add()
})

module.exports = router;