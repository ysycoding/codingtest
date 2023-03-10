function solution(babbling) {

    var babblingAns = ["aya", "ye", "woo", "ma"];
    var check = "";
    var answer = 0;

    for(var i=0; i<babbling.length; i++) {

        check = babbling[i].toString(); 
        //문자열로 바꾼다.
        for(var j=0; j<babblingAns.length; j++) {

            check = check.replaceAll(babblingAns[j], ' ');    
            //babblingAns 배열에 있는 단어들을 순회하면서, 
            //check 변수에서 해당 단어를 모두 공백으로 바꾼다.

        }


        if( check.trim().length == 0) {
        //trim() 함수는 문자열의 양 끝에 있는 공백을 제거
            answer++;
        }

    }


    return answer;