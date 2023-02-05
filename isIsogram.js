function isIsogram(str) {
    // TODO: 여기에 코드를 작성합니다.
    if(str.length === 0) {
      return true;
    }
    str = str.toLowerCase();
    for (i=0;i<str.length;i++) {
      for (j=i+1;j<str.length;j++) {
        if(str[i] === str[j]) {
          return false
        }
      }
    }
    return true
  }