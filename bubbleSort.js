/*const bubbleSort = function (arr) {
 
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-1; j++){      
      if(arr[j] > arr[j+1]){ 
        let val = arr[j+1]
        arr[j+1] = arr[j];
        arr[j] = val;
      }
    }
  }
  return arr;
};*/
const bubbleSort = function (arr) {
    let check = arr.length-1
    for(let i=0; i<arr.length; i++){
      for(let j=0; j<check; j++){      
        if(arr[j] > arr[j+1]){ 
          let val = arr[j+1]
          arr[j+1] = arr[j];
          arr[j] = val;
        }
      }
      check--;
    }
    return arr;
  };
  /*
  const bubbleSort = function (arr) {
    let checkArea = arr.length-1;
    for(let i=0; i<arr.length; i++){
      let flag = false;
      for(let j=0; j<checkArea; j++){      
        if(arr[j] > arr[j+1]){
          let val = arr[j+1]
          arr[j+1] = arr[j];
          arr[j] = val;
          flag = true 
        }
      }
      if(flag === false){ 
        break;
      }
      checkArea--;
    }
    return arr;
  };*/
  