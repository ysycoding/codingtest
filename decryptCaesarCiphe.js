function decryptCaesarCipher(str, secret) {
    // TODO: 여기에 코드를 작성합니다.
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
   //스트링 값 리턴
    let result = '';
   //for문으로 돌리기
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        // 공백은 그대로 둔다.
        result = result + ' ';
      } else {
        // 현재 문자의 알파벳 순서를 구한다.
        let asis = alpha.indexOf(str[i]);
        // 복호화는 반대 방향으로 이루어기 때문에 secret을 뺀다.
        let tobe = (asis - secret + alpha.length) % alpha.length;
        result = result + alpha[tobe];
      }
    }
  
    return result;
  }