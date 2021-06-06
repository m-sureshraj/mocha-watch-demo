const { expect } = require('chai');

describe('Object', function () {
    describe('keys', function () {
        it('should return object keys as an array', function () {
            const obj = { foo: 'foo', bar: 'bar' };
            
            expect(Object.keys(obj)).to.eql(['foo', 'bar']);
        });
    });

    describe('values', () => {
        it('should return object values as an array', () => {
            const obj = { name: 'foo', age: 20 };
            
            expect(Object.values(obj)).to.eql(['foo', 20]);
        });
    });
});