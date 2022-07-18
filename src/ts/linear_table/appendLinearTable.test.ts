import appendLinearTable from './appendLinearTable';

describe.skip('Basic Test', () => {
  test('Should work for a small array', () => {
    const expected = appendLinearTable([90, 70, 50, 80, 60, 85], 75);
    const result = [90, 70, 50, 80, 60, 85, 75];
    expect(expected).toEqual(result);
  });
});
