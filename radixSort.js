function getMax(arr) {
    return arr.reduce((max, item) => {
      if (item > max) return item;
      return max;
    }, 0);
  }
  
  function countingSort(arr, radix) {
    const N = arr.length;
    const output = Array(N).fill(0);
    const count = Array(10).fill(0);
  
    arr.forEach((item) => {
      const idx = Math.floor(item / radix) % 10;
      count[idx]++;
    });
  

    count.reduce((totalNum, num, idx) => {
      count[idx] = totalNum + num;
      return totalNum + num;
    });
  
    let i = N - 1;
    while (i >= 0) {
      const idx = Math.floor(arr[i] / radix) % 10;

      output[count[idx] - 1] = arr[i];
      count[idx] -= 1;
      i--;
    }
  
    return output;
  }
  