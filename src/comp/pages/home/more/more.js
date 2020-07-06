import React, { Component } from 'react'
import './more.scss'
import { NavLink } from 'react-router-dom'
export default class More extends Component {
    render() {
        return (
            <div className="index-more" >
                <div className="wrap">
                    <ul>
                        <li>
                            <h3>
                                <img src="./img/more.png" />
                                <NavLink to="">特色专题</NavLink>
                            </h3>
                            <div>
                                <img src="./img/moreli1.png" />
                            </div>
                        </li>
                        <li>
                            <h3>
                                <img src="./img/more.png" />
                                <NavLink to="/share">旅游攻略</NavLink>
                            </h3>
                            <div>
                                <img src="./img/moreli2.png" />
                            </div>
                        </li>
                        <li>
                            <h3>
                                <img src="./img/more.png" />
                                <NavLink to="">特色专题</NavLink>
                            </h3>
                            <div><img src="./img/moreli3.jpeg" /></div>

                        </li>
                        <li>
                            <h3>
                                <img src="./img/more.png" />
                                <NavLink to="/path">旅游路线</NavLink>
                            </h3>
                            <div> <img src="./img/moreli4.jpeg" /></div>

                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
