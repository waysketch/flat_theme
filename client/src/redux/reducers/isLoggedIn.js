// === Set if user is signed in. Default behavior is no === //

const isLoggedIn_reducer = (state = false, action) => {
    switch(action.type) {
        case 'SIGNED_IN':
            return action.payload;
        default:
            return state;
    };
};