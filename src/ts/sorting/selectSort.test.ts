import selectSort from './selectSort';

describe.skip('Basic test', () => {
  test('Shoud works for a small unordered array', () => {
    const expected = selectSort([90, 70, 50, 80, 60, 85]);
    const result = [50, 60, 70, 80, 85, 90];

    expect(expected).toEqual(result);
  });
});
