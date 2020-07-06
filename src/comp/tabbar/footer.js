import React, { Component } from 'react'
import './footer.scss'
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-img">
                    <img src="/img/footer1.png" />
                </div>
                <div className="footer-link">
                    <a>关于我们</a>
                    <a>友情链接</a>
                    <a>帮助中心</a>
                    <a>联系我们</a>
                    <a>江西师大</a>
                </div>
                <p>2020年开始设计。成员：陈章昭、蔡伟峰、张振国。</p>
            </div>
        )
    }
}
