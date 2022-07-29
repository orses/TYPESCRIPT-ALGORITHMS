import createLinearTable from './createLinearTable';

describe('Basic test', () => {
  test('Should return the input number', () => {
    const received = createLinearTable();
    const expected: number[] = [90, 70, 50, 80, 60, 85];

    expect(received).toEqual(expected);
  });
});
