function firstCharacter(str) {
    let ans=str[0];
    if(str.length==0){
      return "";
    }
    for(let i=1; i<str.length; i++){
      
      if(str[i]===" "){
        ans+=str[i+1];
      }
      
    }
    return ans;
  }