import React, { Component } from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'


import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { proDetail } from '../../../action/order/detail'
import { order } from '../../../action/order/order'
import { cart } from '../../../action/order/cart'
class Shopdetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            num: 1,
            proId: '',
            pro: null,
            isCart: false
        }
    }
    numInc = () => {
        let { num } = this.state;
        num <= 1 && true || this.setState({
            num: --num
        })
    }
    numAdd = () => {
        let { num } = this.state;
        this.setState({
            num: ++num
        })
    }
    componentDidMount() {
        let id = this.props.location.search.split("=").pop();

        this.setState({
            proId: id
        })
        this.props.proDetail(id)

    }
    componentWillReceiveProps(nextprops) {

        if (this.props != nextprops) {
            // console.log(nextprops)
            this.setState({
                pro: nextprops.state.data,
                // params: nextprops.state.data
            })
        }

    }
    getdata = () => {
        const { pro } = this.state
        // console.log("pro", pro)
        if (pro) {
            return pro.data.map((item, index) => <div className="dt-info" key={index}>
                <div className="shop-box">
                    <div className="shop-img">
                        <img src={item.productPic} /></div>
                    <div className="shop-info">
                        <h2 className="shop-name">{item.productTitle}</h2>
                        <p className="shop-dec">{item.productIntro}</p>
                        <p className="price">{item.productPrice}￥</p>
                        <div className="count">
                            <button onClick={this.numInc}>-</button>
                            <input type="text" placeholder={this.state.num} readOnly />
                            <button onClick={this.numAdd}>+</button></div>
                        <div className="op-btn">
                            <button className="add-order" onClick={this.pay}>立即购买</button>
                            <button className="add-cart" onClick={this.addCart}>加入购物车</button>
                        </div>
                    </div>
                </div>
            </div >)
        }
    }
    pay = () => {

        const { pro, num } = this.state;
        let params = pro.data[0];
        params.num = num

    }
    addCart = () => {
        const { num, pro } = this.state;
        let params = pro.data[0];
        params.num = num
        console.log(params)
        // console.log(this.state.params)
        if (localStorage.getItem("token")) {
            let userid = localStorage.getItem("userId")
            params.userid = userid
            cart(params);
            this.isCartOpen(true)
        }
        else
            this.props.history.push('/login')
    }
    isCartOpen = (bool) => {
        this.setState({
            isCart: bool
        })
        if (!bool)
            this.props.history.goBack()
    }
    render() {
        return (
            <div className="shopdetail-container">
                {this.state.isCart && <div className="is-cart"><img src="/img/iscart.jpg" /><div className="cfm" onClick={() => { this.isCartOpen(false) }}>确定</div></div>}
                <h2><NavLink to="/order/eating">返回商城</NavLink><NavLink className="cart-img" to="/cart"></NavLink></h2>
                <div className="split-line"></div>
                {this.getdata()}
            </div>
        )
    }
}
export default connect(
    state => { return { state: state.detailReducer } },
    dispatch => bindActionCreators({ proDetail }, dispatch)
)(Shopdetail);