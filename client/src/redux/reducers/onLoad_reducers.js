const noDatabaseFound_reducer = (state = true, action) => {
    switch(action.type) {
        case 'TOGGLE':
            return action.payload;
        default:
            return state;
    };
};

export default noDatabaseFound_reducer;