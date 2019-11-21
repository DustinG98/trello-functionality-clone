import React from 'react';
import TrelloList from './TrelloList'
import { connect } from 'react-redux'
import TrelloActionButton from './TrelloActionButton'
 
function App(props) {

  const { lists } = props;
  return (
    <div className="App">
      <h2>Hello World!</h2>
      <div style={styles.listsContainer}>
      { lists.map(list => {
      return <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards}/>; 
      }) }
      <TrelloActionButton list />
      </div>
    </div>
  );
}

const styles = {
  listsContainer: {
    display: "flex"
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
