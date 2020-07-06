import React, { Component } from 'react'
import './path.scss'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { path } from '../../../action/path/path'
import { NavLink } from 'react-router-dom';
class Path extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        this.props.path()
    }
    componentWillReceiveProps(nextProps) {
        if (this.props != nextProps) {
            this.setState({
                data: nextProps.pathReducer.data
            })
        }
    }
    shouldComponentUpdate(nextProps) {
        if (nextProps != this.props)
            return true
        return false
    }
    renderPathList = () => {
        const { data } = this.state;
        if (data) {
            // console.log(data)
            return data.data.map((v) => <li key={v.routeId}>
                <h3>路线名:{v.routeTitle}</h3>
                <div className="path-v"><h3>路线景点：</h3>
                    <ul>
                        {v.sight.map((item, i) => <li key={i}><NavLink to={{ pathname: `/sightdetail/:`, search: `sightid=${item.sightId}` }}><img src={item.sightPic} /><span>{item.sightName}</span></NavLink></li>)}

                        {/* <li><img src="/img/share.jpg" /><span>路线名</span></li>
                        <li><img src="/img/share.jpg" /><span>路线名</span></li>
                        <li><img src="/img/share.jpg" /><span>路线名</span></li> */}
                    </ul>
                </div>
                <div className="path-t">
                    <p><b>路线特点与行程:</b><span>{v.routeDescription}。</span>需要<i>{v.routeDays}天</i></p>
                </div>
            </li>)
        }
    }
    render() {
        return (
            <div className="path-container">
                <div className="path-list">
                    <ul>
                        {this.renderPathList()}

                    </ul>
                </div>
            </div>
        )
    }
}
export default connect(
    state => { return { ...state } },
    dispatch => bindActionCreators({ path }, dispatch)
)(Path);