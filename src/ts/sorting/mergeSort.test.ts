import mergeSort from './mergeSort';

describe('Basic test', () => {
  test('Should work for an array of two values', () => {
    const data = [12, 9];
    const expected = mergeSort(data);
    const result = [9, 12];

    expect(expected).toEqual(result);
  });

  test('Should work for a very small array of data', () => {
    const data = [12, 9, 1];
    const expected = mergeSort(data);
    const result = [1, 9, 12];

    expect(expected).toEqual(result);
  });
  test('Should work for a small array of data', () => {
    const data = [12, 9, 3, 7, 14, 11, 6, 2, 10, 5];
    const expected = mergeSort(data);
    const result = [2, 3, 5, 6, 7, 9, 10, 11, 12, 14];

    expect(expected).toEqual(result);
  });
});

describe('Edge test', () => {
  test('Should work for a array without data', () => {
    const data: number[] = [];
    const expected = mergeSort(data);
    const result: number[] = [];

    expect(expected).toEqual(result);
  });

  test('Should work for a array with one value', () => {
    const data = [5];
    const expected = mergeSort(data);
    const result = [5];

    expect(expected).toEqual(result);
  });
});
