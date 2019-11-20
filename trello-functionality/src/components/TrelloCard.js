import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';



const TrelloCard = ({ text }) => {
    return (
        <>
        <Card >
            <Typography color="textSecondary" gutterBottom>
            {text}
            </Typography>
        </Card>
    </>
    )
}

export default TrelloCard