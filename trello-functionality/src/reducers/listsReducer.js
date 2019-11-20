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
    }
];


const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default listsReducer