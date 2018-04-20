function myReplace(str, before, after) {
  
    var arr = str.split(" "); //converts string into array
    var indexOfWordToBeReplaced = arr.indexOf(before); //where word is located
    

    before = before.split(""); //turns the before and after variables into arrays
    after = after.split("");
    
    
    if(before[0]===before[0].toUpperCase()) {after[0] = after[0].toUpperCase();} //change to uppercase if 1st char is upper toUpper()
    
    before = before.join("");
    after = after.join(""); //reconverts before and after into strings, from arrays
    
    arr.splice(indexOfWordToBeReplaced, 1, after);     //splice at indexOf, removing the element there, replacing it with the variable 'after'
 
    str = arr.join(" "); //reconverts the array back into a string

    return str;
  }
  
  myReplace("Let us go to the store", "store", "mall");
  
