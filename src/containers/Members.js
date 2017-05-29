import React, {Component} from 'react';
import MemberList from '../components/MemberList';
import SelectMember from '../components/SelectMember';

class Members extends Component {
    render() {
        return (
            <div id="members">
                <MemberList/>
                <SelectMember/>
            </div>
        )
    }
}

export default Members;
