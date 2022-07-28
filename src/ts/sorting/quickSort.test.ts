import quickSort from './quickSort';

describe('Basic test', () => {
  test('Should work for a small numbered array', () => {
    const data = [3, 5, 1, 6, 4, 7, 2];
    const expected = quickSort(data);
    const result = [1, 2, 3, 4, 5, 6, 7];
    expect(expected).toEqual(result);
  });

  test('Should work for a small numbered array', () => {
    const data = [90, 60, 50, 80, 70, 100];
    const expected = quickSort(data);
    const result = [50, 60, 70, 80, 90, 100];
    expect(expected).toEqual(result);
  });
});

describe('Edge Test', () => {
  test('Should work for data without values', () => {
    const data: number[] = [];
    const expected = quickSort(data);
    const result: number[] = [];
    expect(expected).toEqual(result);
  });

  test('Should work for data one value', () => {
    const data = [5];
    const expected = quickSort(data);
    const result = [5];
    expect(expected).toEqual(result);
  });
});
