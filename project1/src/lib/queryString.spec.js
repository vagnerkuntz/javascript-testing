const { queryString } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Vagner',
      profession: 'Developer',
    };

    expect(queryString(obj)).toBe('name=Vagner&profession=Developer');
  });
});

// describe('Query string to object', () => {

// });
