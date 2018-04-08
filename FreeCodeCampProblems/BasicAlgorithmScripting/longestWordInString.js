
function findLongestWord(str) {
  
  var arr = str.split(" ");
 
  console.log(arr);
  var len = 0;
  
  for(i=0;i<arr.length;i++){
    var x = arr[i].length;
    
    
    if (x > len){
      len =  x;
    }
    else continue;
  }
  return len;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
