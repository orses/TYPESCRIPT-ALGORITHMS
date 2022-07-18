import createLinearTable from './createLinearTable';

xdescribe('Basic test', () => {
  test('Should return the input number', () => {
    const expected = createLinearTable();
    const result: number[] = [90, 70, 50, 80, 60, 85];

    expect(expected).toEqual(result);
  });
});
