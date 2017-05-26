import React, { Component } from 'react';
import './MemberList.css';

import MemberListContainer from '../containers/MemberListContainer';

class MemberList extends Component {
    render() {
        return (
            <div id="list">
                <h2>Member List</h2>
                <nav>
                    <MemberListContainer />
                </nav>
            </div>
        );
    }
}

export default MemberList;