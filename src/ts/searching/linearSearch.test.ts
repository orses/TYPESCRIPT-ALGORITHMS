import linearSearch from './linearSearch';

describe('Basic test', () => {
  test('Should work for small and basic array', () => {
    const received = linearSearch([90, 70, 50, 80, 60, 85], 60);
    const expected = 4;
    expect(received).toBe(expected);
  });
});
