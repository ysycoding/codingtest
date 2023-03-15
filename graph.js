function getDirections(matrix, from, to) {
    const queue = [from]; // 큐를 초기화하고 시작 정점을 삽입
    const visited = new Array(matrix.length).fill(false); // 방문 여부를 저장할 배열
  
    while (queue.length > 0) {
      const node = queue.shift(); // 큐에서 노드를 추출
      if (node === to) return true; // 목적지에 도착하면 true 반환
  
      visited[node] = true; // 방문한 노드는 visited 배열에 표시
  
      for (let i = 0; i < matrix[node].length; i++) {
        if (matrix[node][i] && !visited[i]) { // 인접한 노드 중 방문하지 않은 노드가 있으면 큐에 추가
          queue.push(i);
        }
      }
    }
  
    return false; // 도착하지 못한 경우 false 반환
  }
  