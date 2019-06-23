import React, { Component } from 'react';

class ErrorBoundary extends Component {

    state = {
        hasError: false,
    };

    componentDidCatch(error) {
        this.setState({
            hasError: error,
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="errorCard" >
                    <h2>ErrorCard</h2>
                    <img src={'https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png'} width='200' height='200' alt={'ErrorCard'} />
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;       