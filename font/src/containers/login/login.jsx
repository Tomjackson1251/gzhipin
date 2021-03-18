import React, { Component } from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Button,
} from 'antd-mobile'
import Logo from '../../components/logo/logo'

export default class Register extends Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = (name, val) => {
    this.setState({
      [name]: val,
    })
  }

  register = () => {
    console.log(this.state)
  }

  toRegister = () => {
    this.props.history.replace('/register')
  }

  render() {
    return (
      <div>
        <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <WhiteSpace />
            <InputItem
              placeholder="请输入用户名"
              onChange={(val) => {
                this.handleChange('username', val)
              }}
            >
              用户名：
            </InputItem>
            <WhiteSpace />
            <InputItem
              placeholder="请输入密码"
              type="password"
              onChange={(val) => {
                this.handleChange('password', val)
              }}
            >
              密码：
            </InputItem>
            <Button type="primary" onClick={this.register}>
              登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;陆
            </Button>
            <WhiteSpace />
            <Button onClick={this.toRegister}>还没有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
