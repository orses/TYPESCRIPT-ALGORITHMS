import insertSort from './insertSort';

describe('Basic test', () => {
  test('Should work for a basic and small array', () => {
    const received = insertSort([80, 70, 60, 50, 65, 90]);
    const expected = [50, 60, 65, 70, 80, 90];

    expect(received).toEqual(expected);
  });
});
