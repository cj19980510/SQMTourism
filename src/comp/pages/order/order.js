import React, { Component } from 'react'
import './order.scss'
import { Route, Switch, Redirect, withRouter, NavLink } from 'react-router-dom'
import Eating from './eating';
import Living from './living';
import Walking from './walking';

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// import { getPro } from '../../../action/order/product'
export default class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
        console.log(this.store)
    }


    render() {
        return (
            <div className="order-container">
                <h2>网上订购<NavLink to="/order/eating">吃在三清山</NavLink><NavLink to="/order/living">住在三清山</NavLink><NavLink to="/order/walking">行在三清山</NavLink><NavLink to="/cart" className="cart">我的购物车</NavLink></h2>
                <div>
                    <Redirect to="/order/eating" from="/" exact />
                    <Route path="/order/eating" component={Eating} />
                    <Route path="/order/living" component={Living} />
                    <Route path="/order/walking" component={Walking} />
                </div>
            </div>
        )
    }
}
