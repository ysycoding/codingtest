function ocean(target, type) {
    let memo = Array(target + 1).fill(0);
    memo[0] = 1;
  
    for (let i = 0; i < type.length; i++) {//50,[10,20,50]
      for (let j = type[i]; j <= target; j++) {
        memo[j] += memo[j - type[i]];
      }
    }
  
    return memo[target];
  }
  