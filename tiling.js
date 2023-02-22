let tiling = function (n) {
    const result = [0, 1, 2];
  
    for (let i = 3; i <= n; i++) {
      result[i] = result[i-1] + result[i-2];
    }
    return result[n]
  }
  /*
  let tiling = function (n) {
    // 인덱스를 직관적으로 관리하기 위해
    // 앞 부분을 의미없는 데이터(dummy)로 채운다.
    const memo = [0, 1, 2];
  
    // 재귀를 위한 보조 함수(auxiliary function)을 선언)
    const aux = (size) => {
      // 이미 해결한 문제는 풀지 않는다.
      if (memo[size] !== undefined) return memo[size];
      if (size <= 2) return memo[n];
      memo[size] = aux(size - 1) + aux(size - 2);
      return memo[size];
    };
    return aux(n);
  };*/