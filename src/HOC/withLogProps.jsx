import React, { Component } from 'react';
import '../pages/coins/Coins.css';

function withLogProps(WrappedComponent) {
    return class extends Component {
        componentWillReceiveProps(nextProps) {
            console.log(`Current props: ${this.props}`);
            console.log(`Next props: ${nextProps}`);
        }

        render() {

            if (this.props.name.length < 8) {
                return <>
                    <WrappedComponent {...this.props} />
                    <img className='star' src={'http://www.webweaver.nu/clipart/img/nature/planets/smiling-gold-star.png'} width='30' height='30' alt={'star'} />
                </>;
            }
                return <WrappedComponent {...this.props} />;
        }
    };
}

export default withLogProps;