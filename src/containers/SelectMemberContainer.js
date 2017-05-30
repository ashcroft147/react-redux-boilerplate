import React, {Component} from 'react';
import {connect} from 'react-redux';

class SelectMemberContainer extends Component {
    render() {
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }        
        return (
            <div>
                <img src={this.props.user.thumbnail} />
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Description: {this.props.user.description}</h3>
            </div>

        );
    }
}

// store로부터 state 객체 변경시 state 객체를 받아서 Component에서 props로 사용
function mapStateToProps(state) {
    return {
        user: state.activeMember
    };
}

export default connect(mapStateToProps)(SelectMemberContainer);