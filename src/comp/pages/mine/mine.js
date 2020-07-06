import React, { Component } from 'react'
import './mine.scss'
import { Route, Switch, Redirect, withRouter, NavLink } from 'react-router-dom'
import MyNote from './mynote/index'
import MyOrder from './myorder/index'
import MyCollect from './mycollect/index'
import Update from './update/index'
import MyComment from './mycomment/index'
export default class mine extends Component {
    componentDidMount() {
        // console.log(this.props)
        if (!localStorage.getItem('userId')) {
            this.props.history.push('/login')
        }
    }
    render() {
        return (
            <div className="mine-container">
                <h2>我的主页</h2>
                <div className="split-line"></div>
                <div className="my-main">
                    <div className="mine-nav">
                        <ul>
                            <li><NavLink to="/mine/mynote" className="border-bottom">我的游记</NavLink></li>
                            <li><NavLink to="/mine/mycollect" className="border-bottom">我的收藏</NavLink></li>
                            <li><NavLink to="/mine/mycomment" className="border-bottom">我的评论</NavLink></li>
                            <li><NavLink to="/cart" className="border-bottom">我的购物车</NavLink></li>
                            <li><NavLink to="/mine/myorder" className="border-bottom">我的订单</NavLink></li>
                            {/* <li><NavLink to="/mine/update" >修改密码</NavLink></li> */}
                        </ul>
                    </div>
                    <div className="mine-data">
                        <Redirect to="/mine/mynote" from="/" exact />
                        <Route path="/mine/mynote" component={MyNote} />
                        <Route path="/mine/mycomment" component={MyComment} />
                        <Route path="/mine/mycollect" component={MyCollect} />
                        <Route path="/mine/myorder" component={MyOrder} />
                        {/* <Route path="/mine/update" component={Update} /> */}
                    </div>

                </div>


            </div>
        )
    }
}
