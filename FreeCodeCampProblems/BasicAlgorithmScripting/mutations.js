
function mutation(arr) {
   
  var stringToCheck = arr[0].toLowerCase(); //make both lower case
  var letterToFind = arr[1].toLowerCase(); //turn second string into array 
  var numberCorrect = 0;
  
  
    for(i=0;i<letterToFind.length;i++)
      {
       if (stringToCheck.includes(letterToFind[i])) {
         ++numberCorrect;
       } 
      }
  return (numberCorrect === letterToFind.length);
}

mutation(["Mary", "Aarmy"]);

