function translatePigLatin(str) {
  
  var newArr = [];
  var tempArr = [];
  var tempString = "";
  var firstChar = "";
  var secondChar = "";
  
  
  firstChar = str.substring(0, 1); //stores the first letter
  secondChar = str.substring(1,2);
  
  
    if 
     (
      (str[0] === "a") || 
      (str[0] === "e") || 
      (str[0] === "i") || 
      (str[0] === "o") || 
      (str[0] === "u")
     )
      {
        tempString = str + 'way';  //if it begins with a vowel, add 'way'
        return tempString;
      }
    else 
    {
      tempString = str.substring(1); //stores rest of the word  //love
      console.log("test THIS string!!!" + tempString);
      tempString = tempString + firstChar; //concatenates first letter to the end of this word
        console.log("test THIS string!!!" + tempString);
      console.log("string 1 === " + str[1]);  // a 
      if 
        (
          (str[1] === "a")  
          
        ) 
          {
            //tempString = tempString + firstChar ; //concatenates first letter to the end of this word
            tempString = tempString + 'ay';
            return tempString;
          }
      else  
        {
        tempString = str.substring(2); //stores rest of the word  'ove' from the 3rd index
        tempString = tempString + firstChar + secondChar; //concatenates first letter to the end of this word
        console.log(tempString);
        console.log("this also ran");
        }

    }
        tempString = tempString + 'ay';    

 
  return tempString;
}

translatePigLatin("glove");

