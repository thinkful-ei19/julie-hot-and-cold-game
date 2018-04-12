import React, {Component} from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

//guess section is between guess form and game(parent) 

export default class GuessSection extends Component {

    
    render() {
    return (
        <section>
            <h2 id="feedback">{this.props.feedback}</h2>
            <GuessForm input={guess => this.props.input(guess)} />
        </section>
    );
    }
}
