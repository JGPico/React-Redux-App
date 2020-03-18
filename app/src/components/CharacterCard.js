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
            <div className='box'>
                {props.char.map(el => (
                    <div key={el.id} className='wrapper'>
                        <p>{el.name}</p>
                        <img className='char-image' src={el.image} alt='characters'></img>
                    </div>
                ))}
            </div>
            {props.error && <p className='error'>{props.error}</p>}
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