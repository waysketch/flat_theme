// === STATE for theme behaviors === //

const darkMode_reducer = (state = true, action) => {
    switch(action.type) {
        case 'TOGGLE':
            return action.payload;
        default:
            return state;
    };
};

export default darkMode_reducer;