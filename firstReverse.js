function firstReverse(str) {
    // TODO: 여기에 코드를 작성합니다.
    let ans=""
     for(let i=str.length-1; i>=0; i--){
       ans += str[i];
       }
        return ans;
    }
    //내장함수 check