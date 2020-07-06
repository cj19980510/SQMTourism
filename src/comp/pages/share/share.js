import React, { Component } from 'react'
import './share.scss'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getNote } from '../../../action/share/note'
import { comAdd } from '../../../action/share/comm'
import { noteAdd } from '../../../action/share/noteadd'
import { NavLink, Link } from 'react-router-dom'
import { collect } from '../../../action/share/collect'
import { delCollect } from '../../../action/share/delcollect'
class Share extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteL: null,
            commL: null,
            myComm: null,
            notef: false,
            noteTitle: null,
            noteContent: null,
            isNoteSub: false
        }
    }
    componentDidMount() {
        if (localStorage.getItem('userId')) {
            console.log(localStorage.getItem('userId'))
            this.props.getNote(localStorage.getItem('userId'));
        }
        else
            this.props.getNote();
    }
    componentWillReceiveProps(nextprops) {
        if (this.props != nextprops) {
            // console.log(nextprops.getcommReducer.data);
            // console.log(nextprops.getnoteReducer.data);
            this.setState({
                noteL: nextprops.getnoteReducer.data,
            })
        }
    }
    noteList = () => {
        let { noteL } = this.state;
        if (noteL) {
            console.log(noteL)
            return noteL.noteArr.map((v, i) => <li key={i}>
                <h3>
                    <div><img src="/img/user.jpg" /></div>
                    <div>
                        <p className="username">{v.userName}</p>
                        <p><span className="note-tt">{v.travelNoteTitle}</span><b>{v.travelNoteCreateTime}</b></p>
                    </div>
                </h3>
                <p className="note-content">{v.travelNoteContent}</p>
                <div className="note-op">
                    {v.isCollect && <button className="note-coll" onClick={() => { this.delCollectNote(v.travelNoteId) }} value="收藏">取消收藏</button> || <button className="note-coll" onClick={() => { this.collectNote(v.travelNoteId) }} value="收藏">收藏</button>}
                </div>
                <div className="comm-list">
                    <ul>
                        {
                            v.comments.map((j, k) => {
                                if (j.msg)
                                    return <li key={k}><span>还没有人评论哦</span></li>
                                else
                                    return <li key={k}><span>用户{j.userId}:</span><b>{j.comments}</b></li>
                            })
                        }
                    </ul>
                </div>
                <div className="comm-area">
                    <textarea onKeyUp={(e) => { this.sub(e, v.travelNoteId) }}></textarea>
                </div>
            </li>)
        }
        else {
            return <li className="wait"><img src="/img/wait.jpg" /></li>
        }
    }
    delCollectNote = (travelNoteId) => {
        let userId = localStorage.getItem('userId');
        let params = {
            travelNoteId: travelNoteId,
            userId: userId,
        }
        delCollect(params);
        this.props.getNote(userId)
    }
    collectNote = (travelNoteId) => {
        if (localStorage.getItem('token')) {
            let userId = localStorage.getItem('userId');
            var myDate = new Date();
            let time = myDate.toLocaleString();
            let params = {
                userId: userId,
                time: time,
                travelNoteId: travelNoteId
            }
            collect(params);
            this.props.getNote(userId)
        }
        else
            this.props.history.push('/login')

    }
    sub = (e, travelNoteId) => {
        if (e.keyCode == 13) {
            if (localStorage.getItem("token")) {
                console.log(!!localStorage.getItem("token"))
                let params = {};
                let userId = localStorage.getItem('userId');
                var myDate = new Date();
                let time = myDate.toLocaleString();
                params.time = time;
                params.travelNoteId = travelNoteId
                params.userId = userId;
                params.comments = e.target.value
                comAdd(params);
                this.props.getNote(userId);
                e.target.value = ''
            }
            else {
                this.props.history.push('/login')
            }
        }
    }

    noteTog = () => {
        if (localStorage.getItem('userId'))
            this.setState({
                notef: !this.state.notef
            })
        else
            this.props.history.push('/login')
    }
    maskClose = () => {
        this.setState({
            isNoteSub: false,
            notef: false
        })
    }
    subNote = () => {
        // this.noteTog()
        const { noteTitle, noteContent } = this.state
        // console.log(this.state.noteTitle, this.state.noteContent);
        var myDate = new Date();
        let time = myDate.toLocaleString();
        let userName = localStorage.getItem("username")
        let userId = localStorage.getItem("userId")
        let params = {
            "time": time,
            "userName": userName,
            "userId": userId,
            "Title": noteTitle,
            "content": noteContent
        }
        if (noteTitle && noteContent) {
            noteAdd(params);
            this.props.getNote();
            this.setState({
                isNoteSub: true
            })
        }

    }
    noteTitle = (e) => {
        console.log(e.target.value);
        this.setState({
            noteTitle: e.target.value
        })
    }
    myNote = (e) => {
        console.log(e.target.value)
        this.setState({
            noteContent: e.target.value
        })
    }
    render() {
        return (
            <div className="share-container">
                <div className="share">
                    <h2>游记攻略</h2>
                    <div className="note-main">
                        {/* <div className="note-user"><img src="/img/user.jpg" /></div> */}
                        <div className="note-left">
                            <ul>
                                <li><NavLink to="/sighting">景点浏览</NavLink></li>
                                <li><NavLink to="/path">路线浏览</NavLink></li>
                                <li><NavLink to="/map">地图导航</NavLink></li>
                                <li><NavLink to="/order">网上订购</NavLink></li>
                                <li><NavLink to="/mine">个人中心</NavLink></li>
                            </ul>
                            <ul>
                                <li><NavLink to="/mine/mycomment">我的评论</NavLink></li>
                                <li><NavLink to="/mine/mynote">我的游记</NavLink></li>
                                <li><NavLink to="/mine/mycollect">我的收藏</NavLink></li>
                            </ul>
                        </div>
                        <div className="note-list">
                            <ul>
                                {this.noteList()}

                            </ul>
                        </div>
                        <div className="note-right">
                            {this.state.notef && <div className="note-w">
                                {this.state.isNoteSub && <div className="ss-mask"><div className="ss" onClick={this.maskClose}></div></div>}
                                <div className="note-box">
                                    <div><label>取个名字吧:</label><input type="text" onBlur={(e) => { this.noteTitle(e) }} /></div>
                                    <textarea onBlur={(e) => { this.myNote(e) }} />
                                </div>
                            </div>}
                            {this.state.notef && <div className="sub-btn" onClick={this.subNote}>发表</div> || <div className="note-btn" onClick={this.noteTog}>写个游记吧</div>}

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default connect(
    state => { return { ...state } },
    dispatch => bindActionCreators({ getNote }, dispatch)
)(Share);