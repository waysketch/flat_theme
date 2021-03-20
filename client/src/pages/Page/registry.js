// ================ //
// === REGISTRY === //
// ================ //
export const blockRegistry = new Set();

// ================= //
// === IMPORTANT ======================================================= //
// === Be sure to add your component to the switch inside Builder.jsx. === //
// ===================================================================== //

blockRegistry.add({
    title: "Deck",
    body: "Creates a deck of cards"
});

blockRegistry.add({
    title: "Blank",
    body: "This block uses HTML, CSS, and JS"
});

blockRegistry.add({
    title: "Jumbo",
    body: "This will display a huge image."
});