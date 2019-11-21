import React from 'react';
import TrelloCard from './TrelloCard'
import TrelloActionButton from './TrelloActionButton'
const TrelloList = (props) => {
    const { title, cards } = props;
    return(
    <div style={styles.container}>

    
    <h4>{title}</h4>
    {(cards !== undefined) ? cards.map(card => <TrelloCard key={card.id} text={card.text}/>) : null}
        <TrelloActionButton/>
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