function missHouseMeal(sideDishes) {

  // 결과를 담을 배열을 선언
  let result = [];
  // sideDishes를 사전식 순서로 정렬
  sideDishes.sort();

  // 모든 조합을 검사하는 재귀 함수를 작성
  const sidePowerSet = (idx, sideDish) => {
    if (idx === sideDishes.length) {
      result.push(sideDish);
      return;
    }

    // idx번째 요소가 포함되지 않는 경우
    sidePowerSet(idx + 1, sideDish);

    // idx번째 요소가 포함되는 경우
    sidePowerSet(idx + 1, [...sideDish, sideDishes[idx]]);
  };


  sidePowerSet(0, []);

  return result.sort();
}