import minOfLinearTable from './minOfLinearTable';

describe('Basic Test', () => {
  test('Should work for small array', () => {
    const expected = minOfLinearTable([60, 80, 95, 50, 70]);
    const result = 50;

    expect(expected).toBe(result);
  });
});
