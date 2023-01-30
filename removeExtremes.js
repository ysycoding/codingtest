function removeExtremes(arr) {

    let max = -Infinity;
    let min = Infinity;
    let result =[];
    let minidx=0;
    let maxidx=0;
    for(let i=0;i<arr.length; i++){
      if(arr[i].length<=min){
        min = arr[i].length;
        minidx = i;
      }
       if(arr[i].length>=max){
        max = arr[i].length;
        maxidx = i;
       }
    }
    for(let i=0;i<arr.length;i++){
      if(i!==minidx && i!=maxidx){
        result.push(arr[i]);
      }
    }
    return result;
  
  
  }