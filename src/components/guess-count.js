import React from 'react';

import './guess-count.css';

export default function GuessCount(props) {
    return (
       
        <p>
            You've made <span id="count">{props.count}</span> guesses
        </p>
    );
}
