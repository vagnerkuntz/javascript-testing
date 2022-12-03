const { queryString, parse } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Vagner',
      profession: 'Developer',
    };

    expect(queryString(obj)).toBe('name=Vagner&profession=Developer');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Vagner',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Vagner&abilities=JS,TDD');
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Vagner',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Vagner&profession=Developer';

    expect(parse(qs)).toEqual({
      name: 'Vagner',
      profession: 'Developer',
    });
  });

  it('should convert a query string of a single key-value pair to object', () => {
    const qs = 'name=Vagner';

    expect(parse(qs)).toEqual({
      name: 'Vagner',
    });
  });
});
