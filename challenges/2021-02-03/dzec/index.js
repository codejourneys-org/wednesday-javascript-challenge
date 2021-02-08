class Challange1 {
  range(from, to, stepSize = 1) {    
    /* Fallback if step is negative and 'to' value is larger than 'from' value */
    if((stepSize < 0 && to > from) && to > 0) to *= -1;
    /* Fallback if step is positive and 'to' value is smaller than 'from' value */
    if(from > to && stepSize > 0) stepSize *= -1; 
    
    const arraySize = Math.ceil((Math.abs(to - from) + 1)/Math.abs(stepSize));
 
    return Array.from({length: arraySize}, (e, i) => {
      return from + (i*stepSize);
    })
  }
  
  sum(arr) {
    return arr.reduce((acc, c) => acc+c);
  }
}

module.exports = Challange1;


