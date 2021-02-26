const menu_reducer = (state = [{name: "Home", route: "/"}], action) => {
    switch(action.type) {
        case 'UPDATEMENU':
            return action.payload;
        default:
            return state;
    };
};

export default menu_reducer;