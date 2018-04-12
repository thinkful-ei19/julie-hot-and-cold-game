import React, {Component} from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends Component {
    constructor(props) {
        super (props)
    this.state ={ 
       guesses:[]
    }
    
    }
    showGuesses(guess){
        const newEntry = guess
          this.setState({
            guesses:[...this.state.guesses, newEntry]  
          })
        
    }
    
//this.state.length for guess Count

    render() {
        
    return (
        <div>
            <Header />
            <GuessSection input={guess => this.showGuesses(guess)} />
            <GuessCount count={3} />
            <GuessList guesses={this.state.guesses}/>

        </div>
    );
  }
}
 
