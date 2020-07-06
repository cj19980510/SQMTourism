import React, { Component } from 'react'
import './index.scss'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { myCart } from '../../../action/mine/mycart'
import { delCart } from '../../../action/mine/delcart'
import { orderAdd } from '../../../action/order/order'
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            sumPrice: 0,
            selected: {},
            isPayTan: false,
            order: {}
        }
    }
    componentDidMount() {
        let id = localStorage.getItem('userId')
        this.props.myCart(id)
    }
    componentWillReceiveProps(nextprops) {
        if (this.props != nextprops) {
            console.log(nextprops.mycartReducer.data)
            this.setState({
                data: nextprops.mycartReducer.data
            })
        }
    }
    Pay = (bool) => {
        let id = localStorage.getItem('userId');
        const { order } = this.state;
        if (JSON.stringify(order) != "{}") {
            if (bool) {
                orderAdd(order);
                let cartId = ''
                for (let key in order)
                    cartId += key + ','
                delCart(cartId.slice(0, -1));
                this.props.myCart(id)
            }
            this.setState({
                isPayTan: bool,
                selected: {},
                sumPrice: 0
            });
            // console.log(this.state.selected)
        }
        // 创建订单
    }
    cartList = () => {
        const { data } = this.state;
        if (data) {
            return data.map((item) => <li key={item.CartId}>
                <div className="ck-box"><input type="checkbox" onClick={() => { this.calcPrice({ SP: item.Counts * item.productPrice, cartId: item.CartId, item }, true) }} /></div>
                <div className="pro-img"><img src={item.productPic} /></div>
                <div className="pro-name">{item.productName}</div>
                <div className="pro-price">{item.productPrice}</div>
                <div className="pro-count">{item.Counts}</div>
                <div className="all-price">{item.Counts * item.productPrice}</div>
                <div className="dateC">{item.DateCreated}</div>
                <div className="del"><span onClick={() => { this.calcPrice({ SP: item.Counts * item.productPrice, cartId: item.CartId, item }, false) }}>删除</span></div>
            </li>)
        }
        else
            return <li className="none"><img src="/img/none.jpg" /></li>

    }

    calcPrice = (ele, bool) => {
        let id = localStorage.getItem('userId');
        let { selected, sumPrice, order } = this.state;
        if (!bool) {
            delCart(ele.cartId);
            this.props.myCart(id)
        }
        if (selected[ele.cartId]) {
            delete selected[ele.cartId];
            delete order[ele.cartId];
            sumPrice -= ele.SP
        }
        else {
            if (bool) {
                selected[ele.cartId] = ele.cartId;
                order[ele.cartId] = ele.item;
                sumPrice += ele.SP
            }
        }

        this.setState({
            selected: selected,
            sumPrice: sumPrice
        })


    }
    goBack = () => {
        // console.log(this.props.history)
        this.props.history.goBack()
    }
    render() {
        return (
            <div className="cart-container">

                <h2>购物车<span onClick={this.goBack}>返回上一页</span></h2>
                <div className="split-line"></div>
                <div className="cart-list">
                    <h3> <div>选择</div>
                        <div className="image">图片</div>
                        <div className="pro-name">商品名</div>
                        <div>单价</div>
                        <div>数量</div>
                        <div>总价</div>
                        <div className="dateC">加入时间</div>
                        <div>操作</div></h3>
                    <div className="all-pro">全部商品</div>
                    <ul>
                        {this.state.isPayTan && <div className="pay-tab"><img src="/img/pay.jpg" /><div onClick={() => { this.Pay(false) }}>确定</div></div>}
                        {this.cartList()}
                    </ul>
                    <div className="pay-box">
                        <div className="pay-btn" onClick={() => { this.Pay(true) }}>立即购买</div>
                        <div className="allcart-price">总价:<b>￥</b><span>{this.state.sumPrice}</span></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    state => { return { ...state } },
    dispatch => bindActionCreators({ myCart, delCart }, dispatch)
)(Cart);