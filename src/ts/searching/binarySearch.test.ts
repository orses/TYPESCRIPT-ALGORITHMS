import binarySearch from './binarySearch';

describe('Basic Test', () => {
  test('Should work for a low key on an ordered array', () => {
    const expected = binarySearch([30, 40, 50, 70, 85, 90, 100], 40);
    const result = 1;
    expect(expected).toBe(result);
  });

  test('Should work for a hight key on an ordered array', () => {
    const expected = binarySearch([30, 40, 50, 70, 85, 90, 100], 90);
    const result = 5;
    expect(expected).toBe(result);
  });

  test('Should work for a key right in the middle', () => {
    const expected = binarySearch([30, 40, 50, 70, 85, 90, 100], 70);
    const result = 3;
    expect(expected).toBe(result);
  });

  test('Should work for a small an ordered array but the key is not in the data', () => {
    const expected = binarySearch([30, 40, 50, 70, 85, 90, 100], 86);
    const result = -1;
    expect(expected).toBe(result);
  });
});
