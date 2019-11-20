import React from 'react';
import TrelloList from './TrelloList'
import { connect } from 'react-redux'
 
function App(props) {

  const { lists } = props;
  return (
    <div className="App">
      <h2>Hello World!</h2>
      <TrelloList title="test"/>
      { lists.map(list => <TrelloList title={list.title} cards={list.cards}/>) }
    </div>
  );
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
