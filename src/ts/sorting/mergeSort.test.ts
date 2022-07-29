import mergeSort from './mergeSort';

describe('Basic test', () => {
  test('Should work for an array of two values', () => {
    const data = [12, 9];
    const received = mergeSort(data);
    const expected = [9, 12];

    expect(received).toEqual(expected);
  });

  test('Should work for a very small array of data', () => {
    const data = [12, 9, 1];
    const received = mergeSort(data);
    const expected = [1, 9, 12];

    expect(received).toEqual(expected);
  });
  test('Should work for a small array of data', () => {
    const data = [12, 9, 3, 7, 14, 11, 6, 2, 10, 5];
    const received = mergeSort(data);
    const expected = [2, 3, 5, 6, 7, 9, 10, 11, 12, 14];

    expect(received).toEqual(expected);
  });

  test('Should work for an ordered array', () => {
    const data = [2, 3, 5, 6, 7, 9, 10, 11, 12, 14];
    const received = mergeSort(data);
    const expected = [2, 3, 5, 6, 7, 9, 10, 11, 12, 14];

    expect(received).toEqual(expected);
  });

  test('Should work for an ordered array in reverse order', () => {
    const data = [14, 12, 11, 10, 9, 7, 6, 5, 3, 2];
    const received = mergeSort(data);
    const expected = [2, 3, 5, 6, 7, 9, 10, 11, 12, 14];

    expect(received).toEqual(expected);
  });
});

describe('Edge test', () => {
  test('Should work for a array without data', () => {
    const data: number[] = [];
    const received = mergeSort(data);
    const expected: number[] = [];

    expect(received).toEqual(expected);
  });

  test('Should work for a array with one value', () => {
    const data = [5];
    const received = mergeSort(data);
    const expected = [5];

    expect(received).toEqual(expected);
  });
});
