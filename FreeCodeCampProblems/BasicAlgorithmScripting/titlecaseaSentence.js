function titleCase(str) {
  
  var newStr = str.toLowerCase().split(" "); //does not affect the value of str itself
  var arr=[];
  
  console.log(newStr);
 
  var k = newStr.length;
  var r;
  
  for (i=0;i<k;i++)
  {
    var p = newStr[i].split(); //does not affect the value of str itself
    var q = newStr[i].length;
    
    console.log(p);
    for (j=0;j<q;j++)
    {    
     r = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
      console.log(r);
    } 
      arr.push(r);
  }

  var m = arr.join(" ");
  
  
  return m;
}

titleCase("I'm a little tea pot");
