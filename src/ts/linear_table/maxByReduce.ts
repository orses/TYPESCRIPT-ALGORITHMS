function maxByReduce(numbers: number[]): number {
  return numbers.reduce(
    (maximum: number, number: number) => (maximum < number ? number : maximum),
    -Infinity
  );
}

export default maxByReduce;
