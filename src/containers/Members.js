import React, {Component} from 'react';
import MemberList from '../components/MemberList';
import Profile from '../components/Profile';

class Members extends Component {
    render() {
        return (
            <div id="members">
                <MemberList/>
                <Profile/>
            </div>
        )
    }
}

export default Members;
