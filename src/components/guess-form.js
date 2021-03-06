import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    return (
        <form onSubmit={(event)=> {
            event.preventDefault()
            let newNumber=event.target.userGuess.value
            props.input(newNumber)
            event.currentTarget.userGuess.value=''
        }}>
            <input type="number" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" 
            name="submit" value="Guess"/>
        </form>
    );
};

