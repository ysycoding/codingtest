function convertDoubleSpaceToSingle(str) {
    let result = '';
    let before = '';
    for (let i = 0; i < str.length; i++) {
    
      if (before !== ' ' || str[i] !== ' ') {
        result = result + str[i];
      }
      before = str[i];
    }
    return result;
  }
  