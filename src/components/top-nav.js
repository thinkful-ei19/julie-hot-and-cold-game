import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a onClick={props.onClickWhat}
                       className="what" href="#">
                        What?
                    </a>
                </li>
                <li>
                    <a onlick={(e) => location.reload(e) } className="new" href="#">
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

