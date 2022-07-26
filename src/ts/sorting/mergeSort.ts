/* eslint-disable consistent-return */
function merge(leftSequence: number[], rightSequence: number[]): number[] {
  const subArrayA = leftSequence;
  const subArrayB = rightSequence;
  const startIndex = 0;
  const len = leftSequence.length + rightSequence.length;

  subArrayA.push(Infinity); // sentinel
  subArrayB.push(Infinity); // sentinel

  let i = 0;
  let j = 0;
  const tempData = [];
  for (let k = startIndex; k < len; k++) {
    if (subArrayA[i] <= subArrayB[j]) {
      tempData[k] = subArrayA[i++];
    } else {
      tempData[k] = subArrayB[j++];
    }
  }

  return tempData;
}

/**
 * This function sorted, in ascending mode,
 * an array of numbers using the Merge Sort Algorithm
 *
 ** Algorithm: Merge Sort
 ** Complexity: Θ(n log n)
 * @param {number[]} data
 * @return {number[]} an ordered copy of the input data
 */
function mergeSort(data: number[]): number[] {
  if (data.length <= 1) return data;

  const startIndex = 0;
  const len = data.length;
  const middleIndex = Math.trunc(len / 2);
  const leftSequence = data.slice(startIndex, middleIndex);
  const rightSequence = data.slice(middleIndex, len);

  const dataOrdered = merge(mergeSort(leftSequence), mergeSort(rightSequence));

  return dataOrdered;
}

export default mergeSort;
