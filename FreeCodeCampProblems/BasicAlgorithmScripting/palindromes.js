function palindrome(str) {
//this function checks to see if the string parameter is a palindrome!!
  
  str.toLowerCase().replace(/\W/g, '').replace(/[^0-9a-z]/gi, '');
  //removes non-alphanumeric characters //removes underscore
  //str.replace(/\W/g, '').replace(/[^0-9a-z]/gi, ''); 
  console.log(str);
  
  var temp = str.toLowerCase().replace(/\W/g, '').replace(/[^0-9a-z]/gi, '');
  
  var temp2 = temp.split('').reverse().join(''); //result is "%emOrdni_laP_a ton"
  console.log(temp);
  
  
  //if (temp == str) return false;
  if (temp === temp2) return true;
  else return false;
  
}

palindrome("not a_palindrome$");
