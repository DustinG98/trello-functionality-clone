import React from 'react';
import TrelloList from './TrelloList'
import { connect } from 'react-redux'
import TrelloActionButton from './TrelloActionButton'
import { DragDropContext } from 'react-beautiful-dnd'
 
function App(props) {
  const { lists } = props;
  const onDragEnd = () => {
    //Reordering logic
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
      <h2>Hello World!</h2>
      <div style={styles.listsContainer}>
      { lists.map(list => {
      return <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards}/>; 
      }) }
      <TrelloActionButton list />
      </div>
    </div>
    </DragDropContext>
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
