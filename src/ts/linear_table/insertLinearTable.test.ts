import insertLinearTable from './insertLinearTable';

describe.skip('Basic test', () => {
  test('Should work for small and basic array data', () => {
    const expected = insertLinearTable([90, 70, 50, 80, 60, 85], 75, 2);
    const result = [90, 70, 75, 50, 80, 60, 85];
    expect(expected).toEqual(result);
  });
});
