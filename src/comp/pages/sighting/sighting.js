import React, { Component } from 'react'
import './sight.scss'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sightArea } from '../../../action/sighting/sightarea'
class Sighting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            area: null,
        }
    }
    componentDidMount() {
        this.props.sightArea();
    }
    componentWillReceiveProps(nextProps) {
        if (this.props != nextProps) {
            this.setState({
                area: nextProps.sightareaReducer.data
            })
            console.log(nextProps)
        }
    }
    areaList = () => {
        const { area } = this.state;
        if (area) {
            return area.data.map((item, index) =>
                <li key={index}>
                    <NavLink to={{ pathname: `/areadetail/:`, search: `areaid=${item.sightAreaId}` }}>
                        <img src={item.sightAreaPic} /><span>{item.sightAreaName}</span>
                    </NavLink></li>)
        }
    }
    render() {
        return (
            <div className="sight-container">
                <h2>景区浏览</h2>
                <div className="split-line"></div>
                <div className="sight-img">
                    <ul>
                        {this.areaList()}
                    </ul>
                </div>
            </div>
        )
    }
}
export default connect(
    state => { return { ...state } },
    dispatch => bindActionCreators({ sightArea }, dispatch)
)(Sighting);