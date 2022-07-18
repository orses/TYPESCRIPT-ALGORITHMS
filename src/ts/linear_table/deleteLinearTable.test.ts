import deleteLinearTable from './deleteLinearTable';

describe('Basic test', () => {
  test('Should work for a basic and small array', () => {
    const expected = deleteLinearTable([90, 70, 50, 80, 60, 58], 2);
    const result = [90, 70, 80, 60, 58];
    expect(expected).toEqual(result);
  });
});
