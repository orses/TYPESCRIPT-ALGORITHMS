import binarySearch from './binarySearch';

describe('Basic Test', () => {
  test('Should work for a low key on an ordered array', () => {
    const received = binarySearch([30, 40, 50, 70, 85, 90, 100], 40);
    const expected = 1;
    expect(received).toBe(expected);
  });

  test('Should work for a hight key on an ordered array', () => {
    const received = binarySearch([30, 40, 50, 70, 85, 90, 100], 90);
    const expected = 5;
    expect(received).toBe(expected);
  });

  test('Should work for a key right in the middle', () => {
    const received = binarySearch([30, 40, 50, 70, 85, 90, 100], 70);
    const expected = 3;
    expect(received).toBe(expected);
  });

  test('Should work for a small an ordered array but the key is not in the data', () => {
    const received = binarySearch([30, 40, 50, 70, 85, 90, 100], 86);
    const expected = -1;
    expect(received).toBe(expected);
  });
});
