import shellSort from './shellSort';

describe('Basic Test', () => {
  test('Should work for a structure with one value', () => {
    const data = [9];
    const received = shellSort(data);
    const expected = [9];
    expect(received).toEqual(expected);
  });

  test('Should work for a structure with two values', () => {
    const data = [9, 6];
    const received = shellSort(data);
    const expected = [6, 9];
    expect(received).toEqual(expected);
  });

  test('Should work for a small number array', () => {
    const data = [9, 6, 5, 8, 0, 7, 4, 3, 1, 2];
    const received = shellSort(data);
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(received).toEqual(expected);
  });

  test('Should work for a small number array in reverse order', () => {
    const data = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const received = shellSort(data);
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(received).toEqual(expected);
  });
});
