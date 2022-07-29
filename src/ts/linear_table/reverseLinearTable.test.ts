import reverseLinearTable from './reverseLinearTable';

describe('Basic test', () => {
  test('Should work for a small and basic test', () => {
    const received = reverseLinearTable([50, 60, 70, 80, 90]);
    const expected = [90, 80, 70, 60, 50];
    expect(received).toEqual(expected);
  });

  test('Should work for a small and basic test with even n elements', () => {
    const received = reverseLinearTable([50, 60, 65, 70, 80, 90]);
    const expected = [90, 80, 70, 65, 60, 50];
    expect(received).toEqual(expected);
  });
});
