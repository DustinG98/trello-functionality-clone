import React from 'react';
import TrelloCard from './TrelloCard'

const TrelloList = (props) => {
    const { title, cards } = props;
    console.log(cards)
    return(
    <div style={styles.container}>

    
    <h4>{title}</h4>
    {(cards !== undefined) ? cards.map(card => <TrelloCard text={card.text}/>) : null}
    
    </div>
    )
}

const styles = {
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        padding: 8,
        marginRight: 8
    }
}

export default TrelloList;