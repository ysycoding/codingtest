function newChickenRecipe(stuffArr, choiceNum) {
    // stuffArr에서 0이 3개 이상이라면 전부 필터로 거르기.
    let freshArr = [];
  
    for (let i = 0; i < stuffArr.length; i++) {
      const element = String(stuffArr[i])
        .split('')
        .filter((e) => e === '0');
      if (element.length <= 2) {
        freshArr.push(stuffArr[i]);
      }
    }
  
    // 정렬
    freshArr.sort((a, b) => a - b);
  
    // 엣지 케이스 처리
    if (freshArr.length === 0 || freshArr.length < choiceNum) return [];
  
    // 레시피 초기화
    let result = [];
  
    // freshArr를 상대로 순열 구하기
    const permutation = (arr, bucket, n) => {
      if (n === 0) {
        result.push(bucket);
        return;
      }
  
      for (let i = 0; i < arr.length; i++) {
        // 하나를 초이스함
        const choice = arr[i];
        // 배열을 슬라이스함
        const sliceArr = arr.slice();
        // 초이스만 뺀다
        sliceArr.splice(i, 1);
        // 재귀
        permutation(sliceArr, bucket.concat(choice), n - 1);
      }
    };
  
    // 실행
    permutation(freshArr, [], choiceNum);
    
    // 순열의 길이 반환
    return result;
  }