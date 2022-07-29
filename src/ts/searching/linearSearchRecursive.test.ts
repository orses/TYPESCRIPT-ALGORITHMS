import linearSearchRecursive from './linearSearchRecursive';

describe('Basic test', () => {
  test('Should work for small array and existing value', () => {
    const received = linearSearchRecursive([90, 70, 50, 80, 60, 85], 60, 0);
    const expected = 4;
    expect(received).toBe(expected);
  });

  test('Should work for small array and not existing value in it', () => {
    const received = linearSearchRecursive([90, 70, 50, 80, 60, 85], 87, 0);
    const expected = -1;
    expect(received).toBe(expected);
  });
});
