import { CONSTANTS } from '../actions'

let listID = 2;
let cardID = 4;

const initialState = [
    {
        title: "To Do List",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "Add remove card functionality"
            },
            {
                id: `card-${1}`,
                text: "Add remove list functionality"
            },
            {
                id: `card-${2}`,
                text: "Add drag drop functionality for lists"
            }
        ]
    },
    {
        title: "Finished List",
        id: `list=${1}`,
        cards: [
            {
                id: `card-${3}`,
                text: "FEED YOURSELF"
            }
        ]
    }
];



const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        //ADD LIST
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`
            }
            listID += 1
            return [...state, newList];
        //ADD CARD
        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`
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
        }
        //DRAG DROP
            case CONSTANTS.DRAG_HAPPENED:
                const { droppableIdStart,
                    droppableIdEnd,
                    droppableIndexStart,
                    droppableIndexEnd,
                    draggableId } = action.payload;
                const newState = [...state];
                //in the same list
                if(droppableIdStart === droppableIdEnd) {
                    const list = state.find(list => droppableIdStart === list.id);
                    const card = list.cards.splice(droppableIndexStart, 1)
                    list.cards.splice(droppableIndexEnd, 0, ...card) 
                }
                //new list
                if(droppableIdStart !== droppableIdEnd) {
                    //find list where drag happened
                    const listStart = state.find(list => droppableIdStart === list.id);

                    //pull out the card from the list
                    const card = listStart.cards.splice(droppableIndexStart, 1);

                    //find list where drag happened
                    const listEnd = state.find(list => droppableIdEnd === list.id);

                    // put card into new list
                    listEnd.cards.splice(droppableIndexEnd, 0, ...card)
                }
                return newState;
        default:
            return state;
    }
}

export default listsReducer