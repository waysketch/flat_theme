const defaultSettings = {
    darkMode: true,
    GTM: null,
    UAID: null, 
};

const settings_reducer = (state = defaultSettings, action) => {
    switch(action.type) {
        case 'UPDATE_SETTINGS':
            return action.payload;
        default:
            return state;
    };
};

export default settings_reducer;