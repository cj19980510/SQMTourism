import React, { Component } from 'react'
// 样式
import './layout.scss'
import '../assets/reset.scss'
// import '../assets/container.scss'
// 导入组件
import Login from '../comp/pages/login/index'
import Nav from '../comp/tab/nav'
import Footer from '../comp/tabbar/footer'
import Map from '../comp/pages/map/map'
import Order from '../comp/pages/order/order'
import Sighting from '../comp/pages/sighting/sighting'
import Path from '../comp/pages/path/path'
import Home from '../comp/pages/home/index'
import Share from '../comp/pages/share/share'
import Err from '../comp/pages/error/err'
import Mine from '../comp/pages/mine/mine'
import SightDetail from '../comp/pages/sightdetail/sightdetail'
import Shopdetail from '../comp/pages/shopdetails/index'
import AreaDetail from '../comp/pages/areadetail/index'
import Cart from '../comp/pages/cart/index.js'
// 路由
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginf: false,
            navf: false
        }
    }

    componentDidMount() {
        // console.log(this.props)
        if (this.props.location.pathname == '/share') {
            this.setState({
                navf: false
            })
        }
        else {
            this.setState({
                navf: true
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.location.pathname)
        if (nextProps.location.pathname == '/share') {
            this.setState({
                navf: false
            })
        }
        else {
            this.setState({
                navf: true
            })
        }
        if (nextProps.location.pathname == '/areadetail/:') {
            localStorage.setItem("isRF", true)
        }
        else {
            localStorage.setItem("isRF", false)
        }
    }

    render() {
        return (
            <div className="layout">
                {this.state.navf && <Nav props={this.props} />}
                {/* {this.state.loginf && <Login isLogin={this.isLogin} />} */}
                <Switch>
                    <Redirect to="/home" from="/" exact />
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/path" component={Path} />
                    <Route path="/sighting" component={Sighting} />
                    <Route path="/areadetail/:id" component={AreaDetail} />
                    <Route path="/map" component={Map} />
                    <Route path="/order" component={Order} />
                    <Route path="/share" component={Share} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/sightdetail/:id" component={SightDetail} />
                    <Route path="/shopdetail/:id" component={Shopdetail} />
                    <Route path="/cart" component={Cart} />
                    <Route component={Err} />
                </Switch>
                <Footer />

            </div>
        )
    }
}
export default withRouter(Layout)