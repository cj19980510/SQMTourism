import React, { Component } from 'react'
import './index.scss'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reg } from "../../../action/home/reg"
import { login } from "../../../action/home/login"
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {

            loginf: true,
            regf: false,
            info: true,
            name: '',
            pass: '',
            email: '',
            isLogin: null,
            isReg: null
        }
    }
    componentDidMount() { }
    componentWillReceiveProps(nextProps) {
        if (this.props != nextProps) {
            // console.log(nextProps)
            if (nextProps.loginReducer.data) {
                if (nextProps.loginReducer.data.login) {
                    localStorage.setItem("userId", nextProps.loginReducer.data.userId)
                    localStorage.setItem("token", true)
                    this.props.history.push('/home')
                } this.setState({
                    isLogin: !nextProps.loginReducer.data.login
                })
            }
            if (nextProps.regReducer.data) {
                if (!nextProps.regReducer.data.fail) {
                    localStorage.setItem("userId", nextProps.regReducer.data.userId)
                    localStorage.setItem("token", true)
                    this.props.history.push('/home')
                } this.setState({
                    isReg: nextProps.regReducer.data.fail
                })
            }

        }
    }
    closeComm = () => {
        this.setState({
            isLogin: false
        })
    }
    closeregComm = () => {
        this.setState({
            isReg: false
        })
    }
    userlogin = () => {
        const { name, pass } = this.state;
        if (name && pass) {
            const params = {
                name: name,
                pass: pass,
            }
            localStorage.setItem('username', name)
            this.props.login(params)
        }
        // console.log(name, pass)
    }
    userreg = () => {
        console.log('reg')
        const { name, pass, email } = this.state;
        if (name && pass && email) {
            this.setState({
                ableReg: true
            })
            const params = {
                name: name,
                pass: pass,
                email: email
            }
            localStorage.setItem('username', name)
            this.props.reg(params)
        }
    }
    username = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    userpass = (e) => {
        this.setState({
            pass: e.target.value
        })
    }
    useremail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    togTab = () => {
        const { loginf, regf } = this.state
        this.setState({
            loginf: !loginf,
            regf: !regf,
        })
    }
    render() {
        return (
            <div className="login-bg" >
                {this.state.loginf &&
                    <div className="logintab">
                        <div className="login-lg"></div>
                        <div className="run-reg"><span onClick={this.togTab}>没有账号？点这里注册</span></div>
                        <div className="username"><label>用户名：</label><input type="text" required onFocus={this.closeComm} onBlur={(e) => { this.username(e) }} /><span>{this.state.isLogin && "用户名或密码错误"}</span></div>
                        <div className="pass"><label>密码：</label><input type="password" required onBlur={(e) => { this.userpass(e) }} /></div>
                        <div className="btn"><button type="submit" onClick={this.userlogin}>登陆</button></div>
                    </div>}
                {this.state.regf && <div className="regtab">
                    <div className="login-lg"></div>
                    <div className="reback" onClick={this.togTab}>返回登陆</div>
                    <div className="username"><label>用户名：</label><input type="text" required onBlur={(e) => { this.username(e) }} onFocus={this.closeregComm} />
                        <span>{this.state.isReg && '此用户名已被注册'}</span>
                    </div>
                    <div className="pass"><label>密码：</label><input type="password" required onBlur={(e) => { this.userpass(e) }} /></div>
                    <div className="pass"><label>邮箱：</label><input type="email" required onBlur={(e) => { this.useremail(e) }} /></div>
                    <div className="btn"><button type="submit" onClick={this.userreg}>注册</button></div></div>}
            </div>
        )
    }
}
export default connect(
    state => { return { ...state } },
    dispatch => bindActionCreators({ reg, login }, dispatch)
)(Login);