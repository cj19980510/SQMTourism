import React, { Component } from 'react'
import './walk.scss'
import { NavLink } from 'react-router-dom'


import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPro } from '../../../../action/order/product'
class Walking extends Component {
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
                {
                    data.data.map((v, i) => {
                        if (v.productType == 2)
                            return <li key={v.productId}>
                                <NavLink to={{
                                    pathname: `/shopdetail/:`,
                                    search: `id=${v.productId}`
                                }}>
                                    <div className="walk-img">
                                        <img src={v.productPic} />
                                    </div>
                                    <div className="walk-dec">单价：{v.productPrice}￥</div>
                                </NavLink>
                            </li>
                    }

                    )
                }

            </ul>
        }

    }
    render() {
        return (
            <div className="walk-box">
                <div className="walk-list">
                    {this.getdata()}
                </div>
            </div>
        )
    }
}
export default connect(
    state => { return { state: state.proReducer } },
    dispatch => bindActionCreators({ getPro }, dispatch)
)(Walking);