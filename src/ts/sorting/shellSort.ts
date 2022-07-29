/* eslint-disable no-param-reassign */
function shellSort(data: number[]): number[] {
  let interval = Math.trunc(data.length / 2);

  while (interval > 0) {
    for (let rightIndex = interval; rightIndex < data.length; rightIndex++) {
      let leftIndex = rightIndex;

      while (
        leftIndex - interval >= 0 &&
        data[leftIndex - interval] > data[leftIndex]
      ) {
        [data[leftIndex], data[leftIndex - interval]] = [
          data[leftIndex - interval],
          data[leftIndex],
        ];
        leftIndex -= interval;
      }
    }

    interval = Math.floor(interval / 2);
  }

  console.log(data);

  return data;
}

export default shellSort;
