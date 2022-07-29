import selectSort from './selectSort';

describe.skip('Basic test', () => {
  test('Should works for a small unordered array', () => {
    const received = selectSort([90, 70, 50, 80, 60, 85]);
    const expected = [50, 60, 70, 80, 85, 90];

    expect(received).toEqual(expected);
  });
});
