
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  function sorter(a, b)    //sort is LEXICAL not numerical per SO
    {
    return a - b;
    }

  var sortedArray = arr.sort(sorter);
  var indexReference;
  
  
  console.log("Array is : " + sortedArray);
  console.log("Arguments is : " + arguments);

  for(i=0;i<arr.length;i++)
  {

    if ( num === sortedArray[i]) 
    {

      indexReference = sortedArray.indexOf(sortedArray[i]);
      break;
    }

    if ( num > sortedArray[i]) 
    {
        indexReference = sortedArray.indexOf(sortedArray[i])+1;

    }



  }

  return indexReference;
}

getIndexToIns([3, 10, 5], 3);
