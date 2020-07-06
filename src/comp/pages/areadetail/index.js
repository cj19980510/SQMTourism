import React, { Component } from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { areaDetail } from '../../../action/sighting/areadetail'
// import { sightArea } from '../../../action/sighting/sightarea'
class AreaDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            area: null,
            isRF: false
        }
    }
    componentDidMount() {
        let areaId = this.props.location.search.split("=").pop();
        
        this.props.areaDetail(areaId);
        // this.getAreaId()
    }

    componentWillReceiveProps(nextProps) {
        if (this.props != nextProps) {
            this.setState({
                area: nextProps.areadetailReducer.data
            })
        }
    }

    areaSightList = () => {
        const { area } = this.state;
        if (area) {
            // console.log(area);
            return area.map((ele, k) => <li key={k}>
                <NavLink to={{ pathname: `/sightdetail/:`, search: `sightid=${ele.sightId}` }}>
                    <img src={ele.sightPic} /><span>{ele.sightName}</span></NavLink></li>)
        }
    }
    render() {
        return (
            <div className="sight-container">
                <h2>景区景点</h2>
                <div className="split-line"></div>
                <div className="sight-img">
                    <ul>
                        {this.areaSightList()}
                    </ul>
                </div>
            </div>
        )
    }
}
export default connect(
    state => { return { ...state } },
    dispatch => bindActionCreators({ areaDetail }, dispatch)
)(AreaDetail);