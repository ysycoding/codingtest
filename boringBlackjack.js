function boringBlackjack(cards) {

    // 이중 3개의 카드를 뽑는다는것. 3개를 뽑았을 때 나오는 모든 경우의 수를 구한다.
  
    let count = 0
  
    
    for(let i = 0 ; i < cards.length ; i++ ){
      for(let j = i+1 ; j < cards.length ; j++ ){
        for(let k = j+1 ; k < cards.length ; k++ ){
          let result = cards[i]+cards[j]+cards[k]
          if(isPrime(result)){
            count++;
          }
        } 
      }
    }
  
    function isPrime(some){
      for(let i = 2; i <= Math.floor(Math.sqrt(some)); i++){
        if(some % i === 0){
          return false
        }
      
      }
    return true
    }
  
    return count
  
  }