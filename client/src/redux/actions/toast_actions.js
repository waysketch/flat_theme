// === TOAST Actions === //

export const updateToastVisible = bool => {
    return {
        type: 'UPDATE_TOAST_VISIBLE',
        payload: bool
    };
};

export const updateToastData = any => {
    return {
        type: 'UPDATE_TOAST_DATA',
        payload: any
    }
}
