import React, { Component } from 'react';

import './SelectMember.css';
import SelectMemberContainer from '../containers/SelectMemberContainer';

class SelectMember extends Component {
    render() {
        return (
            <div id="profile">
                <h2>Member Profile</h2>                
                <SelectMemberContainer/>
            </div>
        );
    }
}

export default SelectMember;