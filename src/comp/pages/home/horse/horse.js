import React, { Component } from 'react'
import './horse.scss'
export default class Horse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            left: 0,
            bool: true
        }
    }
    componentDidMount() {
        this.horserun(1)
    }
    horserun = (num) => {
        // console.log(num)
        var box = document.querySelector('.horse-img-box')
        var timer = setInterval(() => {
            if (this.state.bool) {
                if ((this.state.left + 1216) > 0) {
                    if (num > 5)
                        num = 5
                    this.setState({
                        left: this.state.left - num
                    })
                }
                else
                    this.setState({
                        left: 0
                    })
                var l = this.state.left
                box.style.left = l + 'px'
            }
            else {
                clearInterval(timer)
            }

        }, 20)
    }
    stop = () => {
        this.setState({
            bool: false
        })
    }
    start = () => {
        this.setState({
            bool: true
        })
        this.horserun(1)
    }

    faster = () => {
        // this.stop();
        this.horserun(5)
    }
    render() {
        return (
            <div className="index-horse">
                <div className="wrap">
                    <div className="title"></div>
                    <div className="horse-box">
                        <div className="left" onMouseDown={this.faster} onMouseUp={this.start}></div>
                        <div className="horse-img">
                            <div className="horse-img-box">
                                <img src="./img/v1.jpeg" onMouseMove={() => { this.stop(false) }} onMouseLeave={this.start} />
                                <img src="./img/v2.jpeg" onMouseMove={() => { this.stop(false) }} onMouseLeave={this.start} />
                                <img src="./img/v3.jpeg" onMouseMove={() => { this.stop(false) }} onMouseLeave={this.start} />
                                <img src="./img/v4.jpeg" onMouseMove={() => { this.stop(false) }} onMouseLeave={this.start} />
                                <img src="./img/v1.jpeg" onMouseMove={() => { this.stop(false) }} onMouseLeave={this.start} />
                                <img src="./img/v2.jpeg" onMouseMove={() => { this.stop(false) }} onMouseLeave={this.start} />
                                <img src="./img/v3.jpeg" onMouseMove={() => { this.stop(false) }} onMouseLeave={this.start} />
                                <img src="./img/v4.jpeg" onMouseMove={() => { this.stop(false) }} onMouseLeave={this.start} />
                                <img src="./img/v1.jpeg" onMouseMove={() => { this.stop(false) }} onMouseLeave={this.start} />
                            </div>

                        </div>
                        <div className="right"></div>
                    </div>
                </div>
            </div>
        )
    }
}
