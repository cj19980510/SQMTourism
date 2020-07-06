import React, { Component } from 'react'
import './index.scss'
export default class Map extends Component {


    componentDidMount() {
        this.renderMap()
    }

    renderMap = () => {
        this.map = new window.BMap.Map("map");
        this.map.centerAndZoom('上饶', 10);
        this.map.enableScrollWheelZoom();
    }
    //     render() {
    //         return (
    //             <div id="allmap" style={{ position: "absolute", top: 0, left: 0, width: '100vw', height: '100vh' }}></div>
    //         );
    //     }

    //     ————————————————
    //     版权声明：本文为CSDN博主「小文宇」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
    // 原文链接：https://blog.csdn.net/xiaowenyua/article/details/81429370

    render() {
        return (
            <div id="map">
                百度地图
            </div>
        );
    }

}
