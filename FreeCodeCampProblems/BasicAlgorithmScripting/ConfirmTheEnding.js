function confirmEnding(str, target) {
  
  for(i=0;i<str.length;i++){
  }
  
  if (str.substr(-(target.length)) === target) {return true;}
  else return false;
  
}

confirmEnding("Bastian", "n");
