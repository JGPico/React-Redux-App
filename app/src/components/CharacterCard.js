import React from 'react';
import { connect } from 'react-redux';

import { getChar } from "../actions/coreActions";

const CharacterCard = props => {

    const fetchCharacters = e => {
        e.preventDefault();
        props.getChar();
    }

    return (
        <div>
            <h2>Rick and Morty API</h2>
            <div>
                {props.char.map(el => (
                    <p key={el.id}>{el.name}</p>
                ))}
            </div>
            {props.error && <p>{props.error}</p>}
            <button onClick={fetchCharacters}>Fetch Characters</button>
        </div>
    )
}

const mapStateToProps = state => ({
    char: state.char,
    error: state.error,
    isFetching: state.isFetching
})

export default connect(mapStateToProps, { getChar })(CharacterCard);