import maxBubblingUp from './maxBubblingUp';

describe('Basic test', () => {
  test('Should work for basic arrays and return a tupple', () => {
    const expected = maxBubblingUp([60, 50, 95, 80, 70]);
    const result: [number, number[]] = [95, [50, 60, 80, 70, 95]];
    expect(expected).toEqual(result);
  });
});
