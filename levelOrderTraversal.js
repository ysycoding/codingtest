
const levelOrderTraversal = (root) => {
 const result = []; 
 if (!root) return result; 

 const queue = [root]; 

 while (queue.length > 0) {
   const currentLevelSize = queue.length; 
   const currentLevel = []; 

   for (let i = 0; i < currentLevelSize; i++) {
     const node = queue.shift(); 
     currentLevel.push(node.val); 

     // 노드의 자식 노드를 큐에 삽입
     if (node.left) queue.push(node.left);
     if (node.right) queue.push(node.right);
   }

   result.push(currentLevel); 
 }
}
 return result;