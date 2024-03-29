const isSubsetOf = function (base, sample) {
    base.sort((a, b) => a - b);
    sample.sort((a, b) => a - b);
  
    const findArr = (item, arr, from) => {
      for (let i = from; i < arr.length; i++) {
        if (item === arr[i]) return i;
        else if (item < arr[i]) return -1;
      }
      return -1;
    };
  
    let baseIdx = 0;
    for (let i = 0; i < sample.length; i++) {
      baseIdx = findArr(sample[i], base, baseIdx);
      if (baseIdx === -1) return false;
    }
    return true;
  };