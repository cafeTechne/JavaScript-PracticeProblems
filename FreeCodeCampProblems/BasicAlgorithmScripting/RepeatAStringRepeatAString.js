
function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num <=0) return "";
  if (num ===1) return str;

  var splitArr = str.split();
  for (i=1;i<num;i++){ splitArr.push(str);}
  var newArr = splitArr.join("");
  return newArr;
    
}

repeatStringNumTimes("abc", 3);
