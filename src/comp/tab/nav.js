import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './nav.scss'
export default class Nav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLogin: false
        }
    }
    componentDidMount() {
        if (localStorage.getItem("userId"))
            this.setState({
                isLogin: true
            })
    }
    componentWillReceiveProps() {
        if (localStorage.getItem("userId"))
            this.setState({
                isLogin: true
            })
    }
    exit = () => {
        localStorage.setItem('userId', '');
        localStorage.setItem('token', '');
        this.setState({
            isLogin: false
        })
        this.props.props.history.push('/home')
        // console.log(this.props.props)
    }
    render() {
        return (
            <div className="header">
                <ul className="nav">
                    <li><NavLink to="/home">首页</NavLink></li>
                    <li><NavLink to="/path">旅游路线</NavLink></li>
                    <li><NavLink to="/sighting">景点浏览</NavLink></li>
                    <li><NavLink to="/map">地图导航</NavLink></li>
                    <li><NavLink to="/order/eating">网上订购</NavLink></li>
                    <li><NavLink to="/share">游记分享</NavLink></li>
                </ul>
                {this.state.isLogin &&
                    <div className="islogin">
                        <NavLink className="myzone" to="/mine/mynote"> 个人主页</NavLink>
                        <span onClick={this.exit}>注销</span>
                    </div> ||
                    <div className="islogin">
                        <NavLink to="/login">请登录</NavLink>
                    </div>}


            </div>)

    }
}
