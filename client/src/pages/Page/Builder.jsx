import loadable from '@loadable/component';

// ================= //
// === IMPORTANT ============================================================================================================== //
// === Be sure to add your component to the registy.js file or it will not display in the popup when adding new components. === //
// ============================================================================================================================ //

export const Builder = (block, index, addBlockToThisArray) => {
    switch (block.name) {

        case "Header":
            const Header = loadable(() => import('../../blocks/Header/Header.jsx'));
            addBlockToThisArray.push(<Header key={block.name + index} data={block.data} />);
            break;

        case "Deck":
            const Deck = loadable(() => import('../../blocks/Deck/Deck.jsx'));
            addBlockToThisArray.push(<Deck key={block.name + index} data={block.data} />);
            break;
        
        case "Blank":
            const Blank = loadable(() => import('../../blocks/Blank/Blank.jsx'));
            addBlockToThisArray.push(<Blank key={block.name + index} data={block.data} />);
            break;
            
        default:
            console.log(`Could not render ${block.name} at index ${index} in the component tree.`);
            break;
    };
}