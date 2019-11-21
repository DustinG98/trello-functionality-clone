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
        default:
            return state;
    }
}

export default listsReducer