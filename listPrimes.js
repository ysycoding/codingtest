function listPrimes(num) {
    let result = '2';
    for(let i = 3; i <= num; i++){
      let check = true;
  
      for(let j=2; j < i; j++){
        if(i%j === 0){
          check = false;
          break;
        }
      }
      if(check === true){
      result = result + `-${i}`;
      }
    }
    return result;
  }