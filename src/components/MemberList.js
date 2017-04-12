import React, { Component } from 'react';
import './MemberList.css';

class MemberList extends Component {
    renderMemberList() {
        return (
            <li>1</li>
        )
    }

    render() {
        return (
            <div id="list">
                <h2>Member List</h2>
                <nav>
                    <ul>
                        {this.renderMemberList()}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default MemberList;