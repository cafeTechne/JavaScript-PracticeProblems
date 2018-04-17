function diffArray(arr1, arr2) {
  var newArr = [];
  var finalArr = [];
  // Same, same; but different.
  
  var biggestArray = [];
  var smallestArray = [];
  
  
  if (arr1.length > arr2.length)
  {
    biggestArray = arr1;
    smallestArray = arr2;
  }
  else 
  {
    biggestArray = arr2;
    smallestArray = arr1;
  }
  
  for(i=0;i<biggestArray.length;i++)
    {
     
    //return an array with items found only in both
      for(j=0;j<smallestArray.length;j++)
        {
          if(smallestArray[j] === biggestArray[i]) 
          {
            newArr.push(biggestArray[i]); //newArr is things in both arrays
          }
          
        }
    }
  
  //go through and if it's not in both arrays, push on finalArr
      for(k=0;k<biggestArray.length;k++)
        {
          if (newArr.includes(biggestArray[k]) === false)
              { 
                console.log(newArr);
                finalArr.push(biggestArray[k]);
              }
          
        }
  for(k=0;k<smallestArray.length;k++)
        {
          if (newArr.includes(smallestArray[k]) === false)
              { 
                console.log(newArr);
                finalArr.push(smallestArray[k]);
              }
          
        }
  
  return finalArr;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
