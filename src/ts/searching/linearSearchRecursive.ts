function linearSearchRecursive(
  data: number[],
  key: number,
  index: number
): number {
  if (index > data.length) return -1;
  if (data[index] === key) return index;
  return linearSearchRecursive(data, key, index + 1);
}

export default linearSearchRecursive;
