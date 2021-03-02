const fs = require('fs')
const path = require('path')

class Messages {

    constructor(name, text) {
        this.name = name;
        this.text = text;
    }

    static getMessages() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'data', 'message.json'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(JSON.parse(content))
                    }
                }
            )
        })
    }

    toJson() {
        return {
            name: this.name,
            text: this.text
        }
    }

    async add() {
        const messages = await Messages.getMessages()
        messages.push(this.toJson())
        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'message.json'),
                JSON.stringify(messages),
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        })
    }

}

module.exports = Messages;