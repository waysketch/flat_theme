const user = {
    username: null,
    email: null,
    key: "WOOD",
    verified: false
}

const access_reducer = (state = user, action) => {
    switch(action.type) {
        case 'UPDATE_USER':
            return action.payload;
        default:
            return state;
    };
};

export default access_reducer;