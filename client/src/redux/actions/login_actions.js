// === Actions === //

export const updateLogin = bool => {
    return {
        type: 'SIGNED_IN',
        payload: bool
    };
};
