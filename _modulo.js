function modulo(num1, num2) {
    // if(num1 === 0) return 0;
    if(num2 === 0) return 'Error: cannot divide by zero';
    else {
      while(num1 >= num2){
        num1 = num1 - num2; 
      }
      return num1;
    }
  }