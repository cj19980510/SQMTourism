import React, { Component } from 'react'
import './index.scss'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { myNotes } from '../../../../action/mine/mynote'
import { delMynote } from '../../../../action/mine/delmynote'
class MyNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mynote: null
        }
    }
    componentDidMount() {
        let userId = localStorage.getItem("userId")
        this.props.myNotes(userId);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props != nextProps)
        // console.log(nextProps.mynoteReducer.data);
        {
            this.setState({
                mynote: nextProps.mynoteReducer.data
            })
        }
    }
    del = (travelNoteId) => {
        let userId = localStorage.getItem('userId');
        let params = {
            travelNoteId: travelNoteId,
            userId: userId,
        }
        delMynote(params);
        this.props.myNotes(userId);
    }
    myNoteList = () => {
        const { mynote } = this.state;
        if (mynote) {
            if (mynote.data)
                return mynote.data.map((item, index) => <li key={index} className="note-content">
                    <h3>三清山旅游</h3>
                    <p className='content-info'>{item.travelNoteContent}<span>{item.travelNoteCreateTime}</span></p>
                    <p className='content-foot'><i onClick={() => { this.del(item.travelNoteId) }}>删除</i></p>
                </li>)
            else
                return <li className="none"><img src="/img/none.jpg" /></li>
        }
        else
            return <li className="none"><img src="/img/none.jpg" /></li>
    }
    render() {
        return (
            <div className="mynote-container">
                <div className="notelist">
                    <ul>
                        {this.myNoteList()}
                        {/* <li className="note-content">
                            <h3>三清山旅游</h3>
                            <p className='content-info'>士大夫撒地方阿萨大法撒旦发送的发生法撒旦法撒旦发撒大苏打发士大夫阿萨大法撒旦法撒旦法撒旦发送撒地方撒法撒旦阿萨大发生的的萨芬<span>2020-2-28</span></p>
                            <p className='content-foot'><i>评论</i></p>
                        </li>
                        <li className="note-content">
                            <h3>游记标题</h3>
                            <p className='content-info'>游记内容<span>发表时间</span></p>
                            <p className='content-foot'><i>评论</i></p>
                        </li>
                        <li className="note-content">
                            <h3>游记标题</h3>
                            <p className='content-info'>游记内容<span>发表时间</span></p>
                            <p className='content-foot'><i>评论</i></p>
                        </li>
                        <li className="note-content">
                            <h3>游记标题</h3>
                            <p className='content-info'>游记内容<span>发表时间</span></p>
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
    dispatch => bindActionCreators({ myNotes }, dispatch)
)(MyNote);