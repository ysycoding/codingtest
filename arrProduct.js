function arrProduct(arr) {
    // TODO: 여기에 코드를 작성합니다.
    const head = arr[0]; //0
    const tail = arr.slice(1);//[1,2,3,4,5]
    if(arr.length===0){
      return 1;
    }
    return head * arrProduct(tail);
  }
  