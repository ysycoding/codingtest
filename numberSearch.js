function numberSearch(str) {
    let strLength = 0;
    let sum = 0;
  
    if(str.length === 0) return 0;
    
    for(let i = 0; i < str.length; i++){
      let numbering = Number(str[i]);
      if(isNaN(numbering)) strLength++;
      else sum += numbering;
    }
  
    return Math.round(sum / strLength);
   
  }