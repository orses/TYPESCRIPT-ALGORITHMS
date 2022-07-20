import linearSearchTable from './linearSearchTable';

describe('Basic test', () => {
  test('Should work for small and basic array', () => {
    const expected = linearSearchTable([90, 70, 50, 80, 60, 85], 60);
    const result = 4;
    expect(expected).toBe(result);
  });
});
