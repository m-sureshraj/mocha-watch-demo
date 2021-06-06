const usersStub = [
    { name: 'foo', location: 'Colombo' },
    { name: 'bar', location: 'Galle' },
    { name: 'baz', location: 'Kandy' }
];

async function getUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(usersStub);
        }, 1000);
    });
}

module.exports = {
  getUsers
};