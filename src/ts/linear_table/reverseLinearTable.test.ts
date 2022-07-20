import reverseLinearTable from './reverseLinearTable';

describe('Basic test', () => {
  test('Should work for a small and basic test', () => {
    const expected = reverseLinearTable([50, 60, 70, 80, 90]);
    const result = [90, 80, 70, 60, 50];
    expect(expected).toEqual(result);
  });

  test('Should work for a small and basic test with even n elements', () => {
    const expected = reverseLinearTable([50, 60, 65, 70, 80, 90]);
    const result = [90, 80, 70, 65, 60, 50];
    expect(expected).toEqual(result);
  });
});
