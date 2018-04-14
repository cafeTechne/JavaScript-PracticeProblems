function truncateString(str, num) {
  // Clear out that junk in your trunk
  
  var x = "";
  if (str.length > num){
    
    if (num > 3){
      x = str.slice(0, num-3);
      x = x + "...";  
    }
    else {
      x = str.slice(0, num);
      x = x + "...";  
    }
    
    //add ...
  }
  
  if (str.length < num){
    x = str.slice(0, num);
   // x = x +"...";
    
    }
  
  if (str.length === num){
    x = str.slice(0, num);
    //x = x +"...";
    
    }
  
  
  
  // num - 3 with ...
  
  //if less than 
  
  return x;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
