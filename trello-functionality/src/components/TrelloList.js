import React from 'react';
import TrelloCard from './TrelloCard'
import TrelloActionButton from './TrelloActionButton'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const ListContainer = styled.div`
background-color: #dfe3e6;
border-radius: 3px;
width: 300px;
height: 100%;
padding: 8px;
margin-right: 8px;
display: flex;
flex-direction: column;
`

const TrelloList = (props) => {
    const { title, cards, listID } = props;
    return(
        <Droppable droppableId={String(listID)}>
            {(provided) => {
              return <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
                  <h4>{title}</h4>
                {(cards !== undefined) ? cards.map((card, index) => <TrelloCard index={index} id={card.id} key={card.id} text={card.text}/>) : null}
                    
                {provided.placeholder}
                <TrelloActionButton listID={listID}/>
              </ListContainer>  
            }}
        </Droppable>
    )
}


export default TrelloList;