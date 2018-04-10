
function largestOfFour(arr) {
  // You can do this!
  
  newArr = [];
  len = 0;
  
  for (i=0;i<arr.length;i++)
  {
    for (j=0;j<arr.length;j++)
    {
      var m = arr[i][j];
      
      if (m > len)
      {
        len = m;      
      }
  
    }
    newArr.push(len);
    len = 0;
  }
  
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

