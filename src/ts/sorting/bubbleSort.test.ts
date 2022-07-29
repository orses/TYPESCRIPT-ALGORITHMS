import bubbleSort from './bubbleSort';

describe('Basic test', () => {
  test('Should work for an basic and little array of numbers', () => {
    const received = bubbleSort([60, 50, 95, 80, 70]);
    const expected = [50, 60, 70, 80, 95];

    expect(received).toEqual(expected);
  });

  test('Should work for an ordered array', () => {
    const received = bubbleSort([50, 60, 70, 80, 95]);
    const expected = [50, 60, 70, 80, 95];

    expect(received).toEqual(expected);
  });

  test('Should work for an ordered array in reverse order', () => {
    const received = bubbleSort([95, 80, 70, 60, 50]);
    const expected = [50, 60, 70, 80, 95];

    expect(received).toEqual(expected);
  });
});
