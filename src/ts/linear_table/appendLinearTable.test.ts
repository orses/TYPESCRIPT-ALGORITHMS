import appendLinearTable from './appendLinearTable';

describe('Basic Test', () => {
  test('Should work for a small array', () => {
    const received = appendLinearTable([90, 70, 50, 80, 60, 85], 75);
    const expected = [90, 70, 50, 80, 60, 85, 75];
    expect(received).toEqual(expected);
  });
});
