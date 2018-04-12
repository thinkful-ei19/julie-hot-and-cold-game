import React, {Component} from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showWhat: false
        }
    }
    render() {
        return (
            <header>
                <TopNav />
                <InfoModal />
                <h1>HOT or COLD</h1>
            </header>
        );
    };



}
