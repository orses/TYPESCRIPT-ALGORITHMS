import minOfLinearTable from './minOfLinearTable';

describe('Basic Test', () => {
  test('Should work for small array', () => {
    const received = minOfLinearTable([60, 80, 95, 50, 70]);
    const expected = 50;

    expect(received).toBe(expected);
  });
});
