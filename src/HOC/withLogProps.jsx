import React, { Component } from 'react';

function withLogProps(WrappedComponent) {

    return class extends Component {
        componentWillReceiveProps(nextProps) {
            console.log(`Current props: ${this.props}`);
            console.log(`Next props: ${nextProps}`);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
}

export default withLogProps;