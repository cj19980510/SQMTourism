import React, { Component } from 'react'
import './index.scss'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { myOrder } from '../../../../action/mine/myorder'
class MyOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        let userId = localStorage.getItem('userId')
        this.props.myOrder(userId)
    }
    componentWillReceiveProps(nextProps) {
        if (this.props != nextProps) {
            console.log(nextProps)
            this.setState({
                data: nextProps.mineorderReducer.data
            })
        }
    }
    renderOrderList = () => {
        const { data } = this.state;
        if (data) {
            console.log(data)
            return data.data.map((v) => <tr key={v.orderId}>
                <td>{v.orderId}</td>
                <td>{v.productName}</td>
                <td><img src={v.productPic} /></td>
                <td>{v.productPrice}</td>
                <td>{v.productCounts}</td>
                <td>{v.orderDate}</td>
            </tr>)
        }
    }
    render() {
        return (
            <div className="myorder-container">
                <table>
                    <thead>
                        <tr>
                            <th>订单id</th>
                            <th>商品名</th>
                            <th>商品图片</th>
                            <th>商品价格</th>
                            <th>商品数量</th>
                            <th>下单时间</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderOrderList()}

                    </tbody>
                </table>

            </div>
        )
    }
}
export default connect(
    state => { return { ...state } },
    dispatch => bindActionCreators({ myOrder }, dispatch)
)(MyOrder);