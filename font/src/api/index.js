import ajax from './ajax'

export const reqRegister = (user) => ajax('/register', user, 'POST')

export const reqLogin = ({ username, pasword }) =>
  ajax('/login', { username, pasword }, 'POST')

export const reqUpdateUser = (user) => ajax('/update', user, 'POST')
