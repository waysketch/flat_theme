const components_reducer = (state = [], action) => {

    switch(action.type) {
        case 'UPDATE_COMPONENT_LIST':
            return action.payload;
        default:
            return state;
    };
};

export default components_reducer;