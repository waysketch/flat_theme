// === On Load Actions === //

export const updateNoDatabase = bool => {
    return {
        type: 'UPDATE_NODATABASE',
        payload: bool
    };
};
