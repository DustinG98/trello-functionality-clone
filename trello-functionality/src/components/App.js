import React from 'react';
import TrelloList from './TrelloList'
import { connect } from 'react-redux'
import TrelloActionButton from './TrelloActionButton'
import { DragDropContext } from 'react-beautiful-dnd'
import { sort } from '../actions'
import styled from 'styled-components'

const ListContainer = styled.div`
  display: flex;
`
 
const App = (props) => {
  const { lists } = props;
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    
    if(!destination) {
      return;
    }

    props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    ))

  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
      <h2>Hello World!</h2>
      <ListContainer>
        { lists.map(list => {
        return <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards}/>; 
        }) }
        <TrelloActionButton list />
      </ListContainer>
    </div>
    </DragDropContext>
  );
}


const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
