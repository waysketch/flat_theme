// === On Load Actions === //

export const updateNoDatabase = bool => {
    return {
        type: 'TOGGLE',
        payload: bool
    };
};
