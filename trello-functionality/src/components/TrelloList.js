import React from 'react';
import TrelloCard from './TrelloCard'
import TrelloActionButton from './TrelloActionButton'
import { Droppable } from 'react-beautiful-dnd'

const TrelloList = (props) => {
    const { title, cards, listID } = props;
    return(
        <Droppable droppableId={String(listID)}>
            {(provided) => {
              return <div {...provided.droppableProps} ref={provided.innerRef} style={styles.container}>
                <h4>{title}</h4>
                {(cards !== undefined) ? cards.map((card, index) => <TrelloCard index={index} id={card.id} key={card.id} text={card.text}/>) : null}
                    <TrelloActionButton listID={listID}/>
                {provided.placeholder}
              </div>  
            }}
            
        </Droppable>
    )
}

const styles = {
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        height: "100%",
        padding: 8,
        marginRight: 8
    }
}

export default TrelloList;