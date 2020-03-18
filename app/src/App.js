import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import CharacterCard from './components/CharacterCard';

function App() {
  return (
    <div className="App">
      <CharacterCard/>
    </div>
  );
}

const mapStateToProps = state => ({
  char: state.char,
  error: state.error,
  isFetching: state.isFetching
})

export default connect(mapStateToProps, {})(App);
