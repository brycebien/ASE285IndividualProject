const app = require('../src/app');

describe('App.js', () => {
    test('returns false when number of args is not 4', async () => {
        process.argv = ['node', 'app.js', 'email']
        let res = await app.passwordjs();
        expect(res).toBe(false);
    });
});