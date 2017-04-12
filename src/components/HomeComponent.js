import React, { Component } from 'react';


class HomeComponent extends Component {
    render() {
        return (
            <p className="App-intro">
                <a title="Members" href="/members">{this.props.message}</a>
            </p>
        );
    }
}

export default HomeComponent;