import linearSearchRecursive from './linearSearchRecursive';

describe('Basic test', () => {
  test('Should work for small array and existing value', () => {
    const expected = linearSearchRecursive([90, 70, 50, 80, 60, 85], 60, 0);
    const result = 4;
    expect(expected).toBe(result);
  });

  test('Should work for small array and not existing value in it', () => {
    const expected = linearSearchRecursive([90, 70, 50, 80, 60, 85], 87, 0);
    const result = -1;
    expect(expected).toBe(result);
  });
});
