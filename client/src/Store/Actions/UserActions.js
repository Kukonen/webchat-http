export const registerUser = (userId, email, login) => ({type: 'REGISTER', data: {userId, login, email}})
export const changeLogin = (login) => ({type: 'CHANGE_LOGIN', login})
export const changeEmail = (email) => ({type: 'CHANGE_LOGIN', email})
export const changePassword = (password) => ({type: 'CHANGE_LOGIN', password})

