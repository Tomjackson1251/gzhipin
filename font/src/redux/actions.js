import { reqRegister, reqLogin } from '../api'
import { AUTH_SUCCESS, ERROR_MSG } from './action-types'

const authSuccess = (user) => ({ type: AUTH_SUCCESS, data: user })
const errMsg = (msg) => ({ type: ERROR_MSG, data: msg })

export const register = (user) => {
  const { username, password, password2, type } = user
  if (!username) {
    return errMsg('用户名不能为空！')
  } else if (password !== password2) {
    return errMsg('两次密码不同！')
  }

  return async (dispatch) => {
    const response = await reqRegister({ username, password, type })
    const result = response.data
    if (result.code === 0) {
      dispatch(authSuccess(result.data))
    } else {
      dispatch(errMsg(result.msg))
    }
  }
}

export const login = (user) => {
  const { username, password } = user
  if (!username) {
    return errMsg('用户名不能为空！')
  } else if (!password) {
    return errMsg('密码不能为！')
  }

  return async (dispatch) => {
    const response = await reqLogin(user)
    const result = response.data
    if (result.code === 0) {
      dispatch(authSuccess(result.data))
    } else {
      dispatch(errMsg(result.msg))
    }
  }
}
