import maxByReduce from './maxByReduce';

describe('Basic Test', () => {
  test('Should work for basic arrays', () => {
    const received = maxByReduce([60, 50, 95, 80, 70]);
    const expected: number = 95;
    expect(received).toBe(expected);
  });
});
