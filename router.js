const {Router} = require('express');
const bodyParser = require('body-parser')
const fs = require('fs')

const Messages = require('./models/messages')

const router = Router();



router.get('/', async (req, res) => {
    const messages = await Messages.getMessages();
    res.render('main', {
        messages
    });

})

const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/', urlencodedParser,  async (req, res) => {

    const message = new Messages(req.body.name, req.body.text)
    await message.add()

    const messages = await Messages.getMessages();
    res.render('main', {
        messages
    });
})


module.exports = router;