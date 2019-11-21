import React from 'react';
import TrelloList from './TrelloList'
import { connect } from 'react-redux'
 
function App(props) {

  const { lists } = props;
  console.log(lists)
  return (
    <div className="App">
      <h2>Hello World!</h2>
      <div style={styles.listsContainer}>
      { lists.map(list => {
      console.log(list.cards)
      return <TrelloList title={list.title} cards={list.cards}/>; 
      
      }) }
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
