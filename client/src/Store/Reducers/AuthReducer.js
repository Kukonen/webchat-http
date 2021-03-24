const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    login: null,
    email: null
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
    }
}

export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, login, email}})
export default AuthReducer;