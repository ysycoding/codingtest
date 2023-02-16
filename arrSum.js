function arrSum(arr) { //[0,1,2,3,4,5]
    // TODO: 여기에 코드를 작성합니다.
    const head = arr[0]; //0
    const tail = arr.slice(1);//[1,2,3,4,5]
    if(arr.length===0){
      return 0;
    }
    return head + arrSum(tail);
    //0+arrSum([1,2,3,4,5])
    //0 + 1 + arrSum([2,3,4,5])
    //0 + 1 + 2 + arrSum([3,4,5])
    //0 + 1 + 2 + 3 + arrSum([4,5])
    
  }