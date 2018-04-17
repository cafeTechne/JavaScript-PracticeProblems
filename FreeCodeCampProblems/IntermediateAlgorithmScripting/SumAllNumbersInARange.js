function sumAll(arr) {
  
  var finalNum;

  var maxNum = arr.reduce(function(a, b) {
      return Math.max(a, b);
  });
  
  
  var minNum = arr.reduce(function(a, b) {
      return Math.min(a, b);
  });
  
  for(i=minNum;i<maxNum+1;i++)
    {
      if (i === minNum) { finalNum = minNum; }
      else
        {
          finalNum += i;
        }
      
    }
  
  
  return finalNum;
}

sumAll([1, 4]);
