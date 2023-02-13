const largestProductOfThree = function (arr) {
    arr.sort((a,b)=>a-b);
    //음수 2개일 경우 제일낮은거 음수2개 + 제일 큰거 양수1개(0 빼고)
    //양수 3개(0빼고)
    let count1 = arr[0]*arr[1]*arr[arr.length-1];
    let count2 = arr[arr.length-1]*arr[arr.length-2]*arr[arr.length-3];
     return Math.max(count1,count2)
  
  
  };