import { reqRegister, reqLogin, reqUpdateUser, reqUser } from '../api'
import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER,
} from './action-types'

const authSuccess = (user) => ({ type: AUTH_SUCCESS, data: user })
const errMsg = (msg) => ({ type: ERROR_MSG, data: msg })
const receiveUser = (user) => ({ type: RECEIVE_USER, data: user })
const resetUser = (msg) => ({ type: RESET_USER, data: msg })

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
    return errMsg('密码不能为空！')
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

export const updateUser = (user) => {
  return async (dispatch) => {
    const response = await reqUpdateUser(user)
    const result = response.data
    if (result.code === 0) {
      dispatch(receiveUser(result.data))
    } else {
      dispatch(resetUser(result.msg))
    }
  }
}

export const getUser = () => {
  return async (dispatch) => {
    const response = await reqUser()
    const result = response.data
    if (result.code === 0) {
      dispatch(receiveUser(result.data))
    } else {
      dispatch(resetUser(result.msg))
    }
  }
}
