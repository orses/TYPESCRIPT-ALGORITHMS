import insertLinearTable from './insertLinearTable';

describe('Basic test', () => {
  test('Should work for small and basic array data', () => {
    const received = insertLinearTable([90, 70, 50, 80, 60, 85], 75, 2);
    const expected = [90, 70, 75, 50, 80, 60, 85];
    expect(received).toEqual(expected);
  });
});
