import {makeAutoObservable} from "mobx";
import axios from "axios";

class MessagesState {
    messages = [
        // {
        //     id: 1,
        //     date: '1232123',
        //     username: '13',
        //     text: 'some text'
        // },
        // {
        //     id: 2,
        //     date: '321312312',
        //     username: '228',
        //     text: 'second message'
        // }
    ]

    constructor() {
        makeAutoObservable(this)
        this.getMessage();
    }
    async getMessage() {
        await axios.get('/api/messages').then((result) => {
            if (result.data.length > this.messages.length) {
                this.messages = result.data;
            }
        })
        console.log("sss")

        this.getMessage();

    }
}

export default new MessagesState();