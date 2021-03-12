const {PlayingCard} = require('../PlayingCard');

const validRank ='A';
const validSuite = '♥︎';
const validColour ='Red';

describe('PlayingCard', () => {
    it('exists', () => {
        expect(PlayingCard).toBeTruthy();
    })

    it('should accept colour, rank & suit', () =>{
        expect(
            new PlayingCard(validColour,validSuite,validRank)
        ).toBeInstanceOf(PlayingCard);
    })
    
})
