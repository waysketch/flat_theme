import Card from '../Card/Card.jsx';
import * as S from '../../theme';

// ===================== //
// === DEFAULT PROPS === //
// ===================== //
Deck.defaultProps = {
    data: {
        cards: [
            {
                title: "Card One"
            },
            {
                title: "Card Two"
            }
        ]
    },

    default: {
        data: {
            cards: [
                {
                    title: "Card One"
                },
                {
                    title: "Card Two"
                }
            ]
        },
    }
};

// ================= //
// === COMPONENT === //
// ================= //
export default function Deck(props) {
    // ============= //
    // === STATE === //
    // ============= //
    const cards = props.data.cards ?? props.default.data.cards;

    // ============== //
    // === RETURN === //
    // ============== //
    return (
        <S.Frame>
            <S.Deck>
                {
                    cards?.map((card, index) => {
                        return <Card key={index} title={card.title} body={card.body} />
                    })
                }
            </S.Deck>
        </S.Frame>
    )
}
