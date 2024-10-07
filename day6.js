/* DAY6 CHALLANGE
this is the daily challange ı decided to make it 100days :D secret to myself
pair sum
Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target. */

const pairSum = (numbers, targetSum) => {

    let previousNumbers = {};
      
      for(let i = 0 ; i < numbers.length ; i++){
        const num = numbers[i];
        const complement = targetSum-num;
    
    
        if(complement in previousNumbers){
          return [previousNumbers[complement],i]
        }else{
          previousNumbers[num] = i;
        }
    
        
      }
      // todo
    };