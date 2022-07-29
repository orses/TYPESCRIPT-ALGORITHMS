import quickSort from './quickSort';

describe('Basic test', () => {
  test('Should work for a small numbered array', () => {
    const data = [3, 5, 1, 6, 4, 7, 2];
    const received = quickSort(data);
    const expected = [1, 2, 3, 4, 5, 6, 7];
    expect(received).toEqual(expected);
  });

  test('Should work for a small numbered array', () => {
    const data = [90, 60, 50, 80, 70, 100];
    const received = quickSort(data);
    const expected = [50, 60, 70, 80, 90, 100];
    expect(received).toEqual(expected);
  });

  test('Should work for an ordered array', () => {
    const data = [2, 3, 5, 6, 7, 9, 10, 11, 12, 14];
    const received = quickSort(data);
    const expected = [2, 3, 5, 6, 7, 9, 10, 11, 12, 14];

    expect(received).toEqual(expected);
  });
  test('Should work for an ordered array in reverse order', () => {
    const data = [14, 12, 11, 10, 9, 7, 6, 5, 3, 2];
    const received = quickSort(data);
    const expected = [2, 3, 5, 6, 7, 9, 10, 11, 12, 14];

    expect(received).toEqual(expected);
  });
});

describe('Edge Test', () => {
  test('Should work for data without values', () => {
    const data: number[] = [];
    const received = quickSort(data);
    const expected: number[] = [];
    expect(received).toEqual(expected);
  });

  test('Should work for data one value', () => {
    const data = [5];
    const received = quickSort(data);
    const expected = [5];
    expect(received).toEqual(expected);
  });
});
