import React, { Component } from 'react'
import './eat.scss'
import { NavLink } from 'react-router-dom'


import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getPro } from '../../../../action/order/product'
class Eating extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }
    componentDidMount() {
        this.props.getPro();
    }
    componentWillReceiveProps(nextprops) {
        if (this.props != nextprops) {
            if (nextprops.state.data) {
                this.setState({
                    data: nextprops.state.data
                })
            }
        }
    }
    getdata = () => {
        const { data } = this.state
        if (data) {
            // console.log(data.data)
            return <ul>
                {data.data.map((v, i) => {
                    if (v.productType == 0)
                        return <li key={v.productId}>
                            <NavLink to={{
                                pathname: `/shopdetail/:`,
                                search: `id=${v.productId}`
                            }}>
                                <div className="eat-img">
                                    <img src={v.productPic} />
                                </div>
                                <div className="eat-dec">单价：{v.productPrice}￥</div>
                            </NavLink>
                        </li>
                }

                )}
            </ul>
        }

    }
    render() {
        return (
            <div className="eat-box">
                <div className="eat-list">



                    {this.getdata()}


                </div>
            </div>
        )
    }
}
export default connect(
    state => { return { state: state.proReducer } },
    dispatch => bindActionCreators({ getPro }, dispatch)
)(Eating);