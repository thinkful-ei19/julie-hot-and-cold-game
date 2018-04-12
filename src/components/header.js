import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            display: false
        }   
    }

    showWhat(){
        this.setState({display:true})
    }

    hideWhat(){
        this.setState({display:false})
    }



    render() {
        return (
            <header>
                <TopNav onClickWhat={() => this.showWhat()}
                  newGame={()=>this.props.newGame()}/> 
                {/* arrow function will maintain the scope code */}
                {this.state.display && <InfoModal onClickClose={()=> this.hideWhat()}/>}
                <h1>HOT or COLD</h1>
            </header>
        );
    };



}
