import React, { Component } from 'react'
import './sightdetail.scss'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sightDetail } from '../../../action/sighting/sightdetail'
class SightDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sightdetail: null
        }
    }
    componentDidMount() {
        var sightId = this.props.location.search.split("=").pop();
        // console.log(sightId)
        this.props.sightDetail(sightId);

    }
    componentWillReceiveProps(nextProps) {
        if (this.props != nextProps) {
            console.log(nextProps.sightdetailReducer.data)
            this.setState({
                sightdetail: nextProps.sightdetailReducer.data
            })
        }
    }
    detail = () => {
        const { sightdetail } = this.state;
        if (sightdetail)
            return sightdetail.data.map((v, i) => <div key={i}>
                <h2>景点详情</h2>
                <div className="split-line"></div>
                <div className="detail-box">
                    <div className="detail-img"><img src={v.sightPic} /></div>
                    <div className="detail-info">
                        <h3>{v.sightName}</h3>
                        <p>景点描述:{v.sightDescription}</p>
                    </div>
                </div>
            </div>)
    }
    render() {
        return (
            <div className="sightdetail-container">


                {
                    this.detail()
                }
            </div>
        )
    }
}
export default connect(
    state => { return { ...state } },
    dispatch => bindActionCreators({ sightDetail }, dispatch)
)(SightDetail);