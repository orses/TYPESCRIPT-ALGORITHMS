import bubbleSort from './bubbleSort';

xdescribe('Basic test', () => {
  test('Shoul work for an basic and little array of numbers', () => {
    const expected = bubbleSort([60, 50, 95, 80, 70]);
    const result = [50, 60, 70, 80, 95];

    expect(expected).toEqual(result);
  });
});
