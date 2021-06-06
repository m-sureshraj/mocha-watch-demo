const { expect } = require('chai');

describe('String', function () {
    describe('#split()', function () {
        it('should split string into array of tokens', function () {
            expect("foo bar baz".split(' ')).to.eql(['foo', 'bar', 'baz']);
        });
    });

    describe('#length', () => {
        it('should return string length', () => {
            const str = 'foo';
            expect(str.length).to.eq(3);
        });
    });
});
