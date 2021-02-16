// === TOAST DATA === //

const toast_reducer = (state = { visible: false, data: null }, action) => {
    switch(action.type) {
        case 'UPDATE_TOAST_VISIBLE':
            return { visible: action.payload };
        case 'UPDATE_TOAST_DATA':
            return { data: action.payload, visible: true };
        default:
            return state;
    };
};

export default toast_reducer;