const powerSet = function (str) {
    // 정렬
    const sorted = str.split('').sort();
    //각자 문자로 분리하여 알파벳 정렬 후 배열에 저장한다.
    // 중복 제거
    const deduplicated = sorted.reduce((acc, item) => {
      //첫번째는 이전까지의 계산 결과를 누적하는 변수
      //두번째는 배열의 요소 하나
      if (acc[acc.length - 1] === item) {
        return acc;
      } else {
        return acc.concat(item);
      }
    });
  
    let subSets = [];
    const pickOrNot = (idx, subset) => {
      // base case
      if (idx === deduplicated.length) {
        // 마지막 문자까지 검토한 경우
        subSets.push(subset);
        return;
      }
  
      // recursive case
      // idx번째 문자가 포함되지 않는 경우
      pickOrNot(idx + 1, subset);
  
      // idx번째 문자가 포함되는 경우
      pickOrNot(idx + 1, subset + deduplicated[idx]);
    }; 
  
    pickOrNot(0, '');
  
    return subSets.sort();
  };
  