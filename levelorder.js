const levelOrderTraversal = (root) => {
    const result = []; // 결과를 저장할 배열
    if (!root) return result; // 빈 트리일 경우 빈 배열 반환
  
    const queue = [root]; // 큐를 초기화하고 루트 노드를 삽입
    //queue라는 배열을 생성하고, 이진 트리의 루트 노드를 queue 배열에 넣는다.
    
  
    while (queue.length > 0) {
      const currentLevelSize = queue.length; // 현재 레벨의 크기 저장
      const currentLevel = []; // 현재 레벨의 노드를 저장할 배열
  
      for (let i = 0; i < currentLevelSize; i++) {
        const node = queue.shift(); // 큐에서 노드를 추출
        currentLevel.push(node.val); // 현재 레벨 배열에 노드 값 추가
  
        // 노드의 자식 노드를 큐에 삽입
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
  
      result.push(currentLevel); // 현재 레벨의 배열을 결과 배열에 추가
    }
  
    return result; // 결과 배열 반환
  };
  