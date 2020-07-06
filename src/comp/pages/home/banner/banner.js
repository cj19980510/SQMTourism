import React, { Component } from 'react'
import './banner.scss'
export default class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dotnow: 0,
            imgarr: ['./img/picshow1.png', './img/picshow2.jpg', './img/picshow3.png']
        }
    }
    auto = () => {

        var timer;
        timer ? clearInterval(timer) : timer = setInterval(() => {
            // console.log(this.state.dotnow);
            this.state.dotnow >= 2 ?

                this.setState({
                    dotnow: 0
                }) :
                this.setState({
                    dotnow: ++this.state.dotnow
                })
        }, 3000);

    }
    componentDidMount() {
        this.auto()
    }
    resetdot = (index) => {

        this.setState({
            dotnow: index
        })

    }
    render() {
        return (
            <div className="banner">
                <div className="banner-box">
                    <img src={this.state.imgarr[this.state.dotnow]} />
                </div>
                <div className="circle">
                    <ul>
                        <li className={this.state.dotnow == 0 && 'dotnow' || ''} onClick={() => this.resetdot(0)}></li>
                        <li className={this.state.dotnow == 1 && 'dotnow' || ''} onClick={() => this.resetdot(1)}></li>
                        <li className={this.state.dotnow == 2 && 'dotnow' || ''} onClick={() => this.resetdot(2)}></li>
                    </ul>
                </div>
            </div>
        )
    }
}
