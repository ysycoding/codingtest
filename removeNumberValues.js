function removeNumberValues(obj) {
    // TODO: 여기에 코드를 작성합니다.
    for(let property in obj){
      if(typeof(obj[property])==="number"){
        delete obj[property];
      }
    }
    
  }
  