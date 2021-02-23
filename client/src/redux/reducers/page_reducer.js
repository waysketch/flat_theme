// === STATE for theme behaviors === //

const fakePageData = {
    name: "Home",
    route: "/",
    nav: ["header", "footer"],
    components: [
        {
            name: "Header",
            data: {
                title: "Home Page"
            }
        }
    ]
};

const page_reducer = (state = fakePageData, action) => {
    switch (action.type) {
        case 'UPDATEPAGE':
            return action.payload;
        default:
            return state;
    };
};

export default page_reducer;