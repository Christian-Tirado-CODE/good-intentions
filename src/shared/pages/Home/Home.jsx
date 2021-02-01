import React, { Component } from 'react';
import MainNavigation from '../../components/MainNavigation/MainNavigation';

class Home extends Component {
    render() {
        document.querySelector('body').style.backgroundColor='#333';
        return (
            <React.Fragment>
                <MainNavigation/>
            </React.Fragment>
        );
    }
}

export default Home;