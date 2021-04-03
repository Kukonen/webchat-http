import {makeAutoObservable, runInAction} from "mobx";
import axios from "axios";

class MessagesState {
    messages = []

    isFirstOpen = false

    constructor() {
        makeAutoObservable(this)
        this.getMessage();
    }

    async getMessage() {
        await axios.get('/api/messages').then((result) => {
            if (result.data.length > this.messages.length) {
                this.messages = result.data;
            }
            runInAction(()=> {
                this.isFirstOpen = true
            })

        })

        this.getMessage();

    }
}

export default new MessagesState();