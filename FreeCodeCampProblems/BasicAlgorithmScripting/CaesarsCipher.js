function rot13(str) { // LBH QVQ VG!
  
  var numberOfString;
  var newString = '';
  
  for(i=0;i<str.length;i++){
    
    var character = str[i];
    
    
    if (character.match(/[a-z]/i)) 
    {
      numberOfString = str.charCodeAt(i);  
      
      
      // we assume it's always uppercase
      if ((numberOfString-13 >= 65) && (numberOfString-13 <=90)) 
      {  
        numberOfString -= 13;
        character=String.fromCharCode(numberOfString); 
        
        console.log(character);
      }
      else 
      {
        numberOfString += 13;
        character=String.fromCharCode(numberOfString); 
        
      }
      
    }
    
    newString += character;
  }
  
  console.log(str);
  
  
  return newString;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
