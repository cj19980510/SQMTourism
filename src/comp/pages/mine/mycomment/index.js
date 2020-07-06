import React, { Component } from 'react'
import './index.scss'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { myComment } from '../../../../action/mine/mycomment'
class MyComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myCommentNote: null
        }
    }
    componentDidMount() {
        let userId = localStorage.getItem("userId");
        this.props.myComment(userId);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props != nextProps) {
            this.setState({
                myCommentNote: nextProps.mycommentReducer.data
            })
        }
    }
    myCommentNoteList = () => {
        const { myCommentNote } = this.state;
        if (myCommentNote) {
            if (myCommentNote.data) {
                console.log(myCommentNote.data)
                return myCommentNote.data.map((v, i) => <li className="note-content" key={i}>
                    <h3>{v.travelNoteTitle}<span>发表人：{v.userName}</span></h3>
                    <p className='content-info'>{v.travelNoteContent}<span>发表时间:{v.travelNoteCreateTime}</span></p>
                </li>)
            }
            else
                return <li className="none"><img src="/img/none.jpg" /></li>
        }
        else
            return <li className="none"><img src="/img/none.jpg" /></li>
    }
    render() {
        return (
            <div className="mycollect-container">

                <div className="notelist">
                    <ul>
                        {this.myCommentNoteList()}

                    </ul>
                </div>

            </div>
        )
    }
}
export default connect(
    state => { return { ...state } },
    dispatch => bindActionCreators({ myComment }, dispatch)
)(MyComment);