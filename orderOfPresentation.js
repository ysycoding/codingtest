function orderOfPresentation(N, K) {
    // 조의 개수 N, 발표 순서 K

  
    const factorial = (n) => {
      if (n <= 1) return 1;
      return n * factorial(n - 1);
    };
  
    let order = 0;
    
    // N개의 조 중에, 어떠한 조가 이미 포함되었는지 확인하기 위해 배열을 생성합니다.
    // 만약 N이 3이라면 [false, false, false, false]로 생성됩니다.
    // 제일 첫 번째는 더미 데이터입니다. (인덱스는 0부터 시작하지만 조는 1부터 시작하기 때문에)
    const isUsed = Array(N + 1).fill(false);
    
    // K의 길이만큼 순회합니다.
    for (let i = 0; i < K.length; i++) {
      // K의 i번째 조를 변수에 담는다.
      const num = K[i];
      // 사용했는지 판별하기 위해 isUsed에 체크
      isUsed[num] = true;
      // num보다 앞에 올 수 있는 수들의 배열을 복제해서,
      const candidates = isUsed.slice(1, num);
      // 이 중에서 아직 사용되지 않은 수의 개수를 구한다.
      const validCnt = candidates.filter((el) => el === false).length;
      // 아직 사용되지 않은 수, 그 전까지의 모든 경우의 수를 카운트한다.
      const formerCnt = validCnt * factorial(N - i - 1);
      // order에 추가
      order = order + formerCnt;
  
     
    }
    
    return order;
  }