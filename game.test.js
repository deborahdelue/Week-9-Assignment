const expect = chai.expect

describe('Card', function() {
  it('converts face cards to numeric values', function() {
    // Create instances of Card for each face card and a number card
    const ace = new Card('A', 'Hearts');
    const king = new Card('K', 'Hearts');
    const queen = new Card('Q', 'Hearts');
    const jack = new Card('J', 'Hearts');
    const ten = new Card('10', 'Hearts');

    // Use Chai's expect method to assert the expected outcomes
    expect(ace.getNumericValue()).to.equal(14);
    expect(king.getNumericValue()).to.equal(13);
    expect(queen.getNumericValue()).to.equal(12);
    expect(jack.getNumericValue()).to.equal(11);
    expect(ten.getNumericValue()).to.equal(10); 
  });
});
