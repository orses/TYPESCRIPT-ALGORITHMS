import maxByReduce from './maxByReduce';

describe('Basic Test', () => {
  test('Should work for basic arrays', () => {
    const expected = maxByReduce([60, 50, 95, 80, 70]);
    const result: number = 95;
    expect(expected).toBe(result);
  });
});
