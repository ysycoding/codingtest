const uglyNumbers = function (n) {
    const ugly = [1];
    let idx2 = 0, idx3 = 0 , idx5 = 0;
    let nextMultipleOf2 = 2,
    nextMultipleOf3 = 3,
    nextMultipleOf5 = 5;
  
    for (let i = 1; i < n; i++) {
  const nextUglyNum = Math.min(
  nextMultipleOf2,
  nextMultipleOf3,
  nextMultipleOf5
  );
  ugly.push(nextUglyNum);
  if (nextUglyNum === nextMultipleOf2) {
    idx2++;
    nextMultipleOf2 = ugly[idx2] * 2;
  }
  if (nextUglyNum === nextMultipleOf3) {
    idx3++;
    nextMultipleOf3 = ugly[idx3] * 3;
  }
  if (nextUglyNum === nextMultipleOf5) {
    idx5++;
    nextMultipleOf5 = ugly[idx5] * 5;
  }
  }
  return ugly[n - 1];
  };