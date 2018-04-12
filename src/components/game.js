import React, {Component} from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends Component {
    constructor(props) {
        super (props)
    this.state ={ 
       guesses:[],
       answer: Math.floor(Math.random() * 100) + 1,
       feedback: "Play!",
       count: 0
    }
    
    }

    newGame(){
        this.setState({
           guesses:[],
           answer: Math.floor(Math.random() * 100) + 1,
           count: 0
        })
    }



    showGuesses(guess){
        const difference = Math.abs(guess - this.state.answer);

        let hint;
        if (difference >= 50) {
          hint = 'ice cold'
        } else if (difference >= 25) {
          hint = 'cold'
        } else if (difference >= 10) {
          hint = 'warmer'
        } else if (difference >= 5) {
          hint = 'it\'s getting hot in here'
        } else if (difference >= 1) {
          hint = 'caliente'
        } else {
          hint = 'YEAYUHHHH'
        }

        const newEntry = guess
          this.setState({
            guesses:[...this.state.guesses, newEntry], 
            feedback: hint
          })
    
    }


//this.state.length for guess Count

    render() {
        
    return (
        <div>
            <Header newGame={()=>this.newGame()}/>
            <GuessSection feedback={this.state.feedback} input={guess => this.showGuesses(guess)} />
            <GuessCount count={this.state.count} />
            <GuessList guesses={this.state.guesses}/>

        </div>
    );
  }
}
 
