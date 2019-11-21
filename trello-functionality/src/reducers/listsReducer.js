import { CONSTANTS } from '../actions'

let listID = 2;
let cardID = 3;

const initialState = [
    {
        title: "To Do List",
        id: 0,
        cards: [
            {
                id: 0,
                text: "Feed The Dogs"
            },
            {
                id: 1,
                text: "Do the dishes"
            }
        ]
    },
    {
        title: "Finished List",
        id: 1,
        cards: [
            {
                id: 0,
                text: "FEED YOURSELF"
            }
        ]
    }
];



const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID
            }
            listID += 1
            return [...state, newList];
        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardID
            }
            cardID += 1
            const newState = state.map(list => {
                if(list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list
                }
            })
            return newState;
        default:
            return state;
    }
}

export default listsReducer