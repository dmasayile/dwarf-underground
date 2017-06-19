import React, { Component } from 'react';
import './UserInfo.css'

class UserInfo extends Component {
    render() {
        return (
            <div className="avatar">
              <img src="http://www.zbrushcentral.com/attachment.php?attachmentid=376082" alt="user" />
              <div className="user-info">
                <p className="user-name">By Domri, son of Flug</p>
                <p className="date">on a day far, far away from today's date,</p>
              </div>
            </div>
        )
    }
}

export default UserInfo