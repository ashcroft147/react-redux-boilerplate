import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectMember} from '../actions/index'

class MemberListContainer extends Component {
    
    renderList() {
        return this.props.members.map((member) => {
            return (
                <li
                    key={member.id}
                    onClick={() => this.props.selectMember(member)}
                >
                    {member.first} {member.last}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

// store로부터 state 객체를 받아서 Component에서 props로 사용
function mapStateToProps(state) {
    return {
        members: state.members
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectMember: selectMember}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MemberListContainer);