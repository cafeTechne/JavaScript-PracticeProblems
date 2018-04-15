
function destroyer(arr) {
  // Remove all the values
   
  var filterArray = [];
    for(i=1;i<arguments.length;i++)
    {
    filterArray[i-1] = arguments[i];
    }
    
  var args = [].slice.call(arguments[0]); //turns array at arguments0 to an array
  var argsLength = args.length;
  var index;
  console.log(argsLength); 
  
  function toBeDestroyed(args, filterArray)
  {  
    for(i=0;i<filterArray.length;i++)
    {
      for(j=0;j<argsLength;j++)
      {
        while (args[j] === filterArray[i]) 
        {
          
          index = args.indexOf(filterArray[i]);
          
          if (index > -1) 
          {
            args.splice(index, 1);
            
          }    
        }
      }
    }
  }
    
  toBeDestroyed(args, filterArray);
  
  return args;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);

