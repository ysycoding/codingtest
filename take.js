function take(num, arr) {
 
    if (num === 0 || arr.length === 0) {
      return [];
    }
  
 
    const head = arr[0];
    const tail = arr.slice(1);
  
    return [head].concat(take(num - 1, tail));
  }