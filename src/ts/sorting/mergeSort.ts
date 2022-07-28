/* eslint-disable consistent-return */
function merge(leftHalf: number[], rightHalf: number[]): number[] {
  const leftSequence = leftHalf;
  const rightSequence = rightHalf;
  const startIndex = 0;
  const len = leftHalf.length + rightHalf.length;

  leftSequence.push(Infinity); // sentinel
  rightSequence.push(Infinity); // sentinel

  let i = 0;
  let j = 0;
  const tempData = [];
  for (let k = startIndex; k < len; k++) {
    if (leftSequence[i] <= rightSequence[j]) {
      tempData[k] = leftSequence[i++];
    } else {
      tempData[k] = rightSequence[j++];
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
  const leftHalf = data.slice(startIndex, middleIndex);
  const rightHalf = data.slice(middleIndex, len);

  const dataOrdered = merge(mergeSort(leftHalf), mergeSort(rightHalf));

  return dataOrdered;
}

export default mergeSort;
