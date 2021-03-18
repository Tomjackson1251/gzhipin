import React, { Component } from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  Radio,
  WhiteSpace,
  Button,
} from 'antd-mobile'
import Logo from '../../components/logo/logo'
const ListItem = List.Item

export default class Register extends Component {
  state = {
    username: '',
    password: '',
    password2: '',
    type: '',
  }

  handleChange = (name, val) => {
    this.setState({
      [name]: val,
    })
  }

  register = () => {
    console.log(this.state)
  }

  toLogin = () => {
    this.props.history.replace('/login')
  }

  render() {
    const { type } = this.state
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
            <WhiteSpace />
            <InputItem
              placeholder="请确认密码"
              type="password"
              onChange={(val) => {
                this.handleChange('password2', val)
              }}
            >
              确认密码：
            </InputItem>
          </List>
          <ListItem>
            <span>用户类型：</span>
            &nbsp;&nbsp;&nbsp;
            <Radio
              checked={type === 'dashen'}
              onChange={() => {
                this.handleChange('type', 'dashen')
              }}
            >
              大神
            </Radio>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Radio
              checked={type === 'laoban'}
              onChange={() => {
                this.handleChange('type', 'laoban')
              }}
            >
              老板
            </Radio>
          </ListItem>
          <WhiteSpace />
          <Button type="primary" onClick={this.register}>
            注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册
          </Button>
          <WhiteSpace />
          <Button onClick={this.toLogin}>已有账户</Button>
        </WingBlank>
      </div>
    )
  }
}
