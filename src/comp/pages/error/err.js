import React, { Component } from 'react'
import './err.scss'
export default class err extends Component {
    componentDidMount() {
        let pathname = "/shopdetail/";
        let id = localStorage.getItem('proid')
        if (pathname == this.props.location.pathname)
            this.props.history.push(`/shopdetail/id=${id}`)
    }
    render() {
        return (
            <div className="err-container">
                <img src="/img/404.jpg" />
            </div>
        )
    }
}
