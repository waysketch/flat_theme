const footer_reducer = (state = [], action) => {
    switch(action.type) {
        case 'UPDATEFOOTERMENU':
            return action.payload;
        default:
            return state;
    };
};

export default footer_reducer;