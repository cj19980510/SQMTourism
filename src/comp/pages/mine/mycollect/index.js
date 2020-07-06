import React, { Component } from 'react'
import './index.scss'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { myCollect } from '../../../../action/mine/mycollect'
import { delCollect } from '../../../../action/share/delcollect'
class MyCollect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        let userId = localStorage.getItem('userId')
        this.props.myCollect(userId);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props != nextProps) {
            this.setState({
                data: nextProps.mycollectReducer.data
            })
        }
    }
    delC = (travelNoteId) => {
        let userId = localStorage.getItem('userId');
        let params = {
            travelNoteId: travelNoteId,
            userId: userId,
        }
        delCollect(params);
        this.props.myCollect(userId);
    }
    collectNoteList = () => {
        const { data } = this.state;
        if (data) {
            if (data.data) {
                console.log(data.data)
                return data.data.map((v, i) => <li className="note-content" key={v.travelNoteId}>
                    <h3>{v.travelNoteTitle}<span>发表人：{v.userName}</span></h3>
                    <p className='content-info'>{v.travelNoteContent}<span>发表时间:{v.travelNoteCreateTime}</span></p>
                    <p className='content-foot'><i onClick={() => { this.delC(v.travelNoteId) }}>取消收藏</i></p>
                </li>)
            }

            else
                return <li className="none"><img src="/img/none.jpg" /></li>
        }
        else
            return <li className="none"><img src="/img/none.jpg" /></li >
    }
    render() {
        return (
            <div className="mycollect-container">
                <div className="notelist">
                    <ul>
                        {
                            this.collectNoteList()
                        }

                        {/* <li className="note-content">
                            <h3>哈哈哈<span>发表人：user2</span></h3>
                            <p className='content-info'>好丑<span>发表时间:2020-02-10</span></p>
                            <p className='content-foot'><i>评论</i></p>
                        </li>
                        <li className="note-content">
                            <h3>游记标题</h3>
                            <p className='content-info'>游记内容<span>发表时间:2020-02-10</span></p>
                            <p className='content-foot'><i>评论</i></p>
                        </li>
                        <li className="note-content">
                            <h3>游记标题</h3>
                            <p className='content-info'>游记内容<span>发表时间:2020-02-10</span></p>
                            <p className='content-foot'><i>评论</i></p>
                        </li> */}
                    </ul>
                </div>

            </div>
        )
    }
}
export default connect(
    state => { return { ...state } },
    dispatch => bindActionCreators({ myCollect }, dispatch)
)(MyCollect);