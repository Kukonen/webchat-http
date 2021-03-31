import {makeAutoObservable} from "mobx";
import axios from "axios";

class MessagesState {
    messages = [
        {
            id: 1,
            date: '1232123',
            userid: '13',
            text: 'some text'
        },
        {
            id: 2,
            date: '321312312',
            userid: '228',
            text: 'second message'
        }
    ]

    constructor() {
        makeAutoObservable(this)
        this.getMessage();
    }
    async getMessage() {
        await axios.get('/api/messages').then((result) => {
            if (result.data.length > this.messages.length) {
                
            }
        })

    }
}

export default new MessagesState();