const noDatabaseFound_reducer = (state = true, action) => {
    switch(action.type) {
        case 'UPDATE_NODATABASE':
            return action.payload;
        default:
            return state;
    };
};

export default noDatabaseFound_reducer;