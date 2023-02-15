// naive solution: O(2^N)
// let fibonacci = function (n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// dynamic with meoization: O(N)
// 이미 해결한 문제의 정답을 따로 기록해두고,
// 다시 해결하지 않는 기법

let fibonacci = function (n) {
    const memo = [0, 1];
    const aux = (n) => {
      // 이미 해결한 적이 있으면, 메모해둔 정답을 리턴한다.
      if (memo[n] !== undefined) return memo[n];
      // 새롭게 풀어야하는 경우, 문제를 풀고 메모해둔다.
      memo[n] = aux(n - 1) + aux(n - 2);
      return memo[n];
    };
    return aux(n);
  };