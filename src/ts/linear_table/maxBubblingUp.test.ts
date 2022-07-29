import maxBubblingUp from './maxBubblingUp';

describe('Basic test', () => {
  test('Should work for basic arrays and return a tupple', () => {
    const received = maxBubblingUp([60, 50, 95, 80, 70]);
    const expected: [number, number[]] = [95, [50, 60, 80, 70, 95]];
    expect(received).toEqual(expected);
  });
});
