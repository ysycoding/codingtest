function letterCapitalize(str) {
    let words = str.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > 0) { //여기 안넣음
        words[i] = words[i][0].toUpperCase() + words[i].substr(1); //words[i].substr(1);+words[i][0].toUpperCase()로 적어 오류
      }
    }
  
    str = words.join(' ');
    return str;
  }