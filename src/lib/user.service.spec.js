const { expect } = require('chai');

const { getUsers } = require('./user.service');

const usersStub = [
    { name: 'foo', location: 'Colombo' },
    { name: 'bar', location: 'Galle' },
    { name: 'baz', location: 'Kandy' }
];

describe('Users', () => {
    it('should fetch users', () => {
        expect(getUsers()).to.eventually.eql(usersStub);
    });
});