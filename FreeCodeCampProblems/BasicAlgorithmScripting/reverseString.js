function reverseString(str) {
  
  var splitString = str.split("");
  
  splitString.reverse();
  str = splitString.join("");
  
  return str;
}

reverseString("hello");

