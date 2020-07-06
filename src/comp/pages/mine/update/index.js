import React, { Component } from 'react'
import './index.scss'

export default class Update extends Component {
    render() {
        return (
            <div className="update-container">
                <form action="" method="" className="update-form">
                    <div><label>原密码</label><input type="text" name="oldpass" /></div>
                    <div><label>新密码</label><input type="password" name="newpass" /></div>
                    <div><label></label><input type="submit" value="提交" />
                        <input type="reset" value="取消" /></div>
                </form>
            </div>
        )
    }
}
