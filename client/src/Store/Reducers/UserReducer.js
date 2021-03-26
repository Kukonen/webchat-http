const REGISTER = 'REGISTER'
const CHANGE_LOGIN = 'CHANGE_LOGIN'
const CHANGE_EMAIL = 'CHANGE_EMAIL'
const CHANGE_PASSWORD = 'CHANGE_PASSWORD'

let initialState = {
    userId: '',
    login: '',
    email: '',
    password: '',
    role: ''
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return state
        case CHANGE_LOGIN:
            return {
                login: action.login
            }
        case CHANGE_EMAIL:
            alert(state.email)
            return {
                email: action.email
            }
        case CHANGE_PASSWORD:
            return {
                password: action.password
            }
        default: return state
    }
}

export default UserReducer;