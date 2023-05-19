function makeLastSeenMsg(name, period) {

    if(period>=0 && period<=59){
      return `${name}: ${period}분 전에 접속함`;
    }
    else if(period>=60 && period<=1439){
      period = parseInt(period/60);
      return `${name}: ${period}시간 전에 접속함`;
    }
    else{
      period = parseInt(period/1440);
      return `${name}: ${period}일 전에 접속함`;
    }
  
  }
  