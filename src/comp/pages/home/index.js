import React, { Component } from 'react'
import Banner from './banner/banner'
import More from './more/more'
import Horse from './horse/horse'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { login } from '../../../action/home/login'
export default class Layout extends Component {

    // componentDidMount() {
    //     this.props.login()
    // }
    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps)
    // }
    render() {
        return (
            <div>
                <Banner />
                <More />
                <Horse />
            </div>
        )
    }
}
// const mapStateToProps = (state) => {
//     return {
//         state: { ...state }
//     }
// }
// const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)




// export default connect(mapStateToProps, mapDispatchToProps)(Layout)

