
function chunkArrayInGroups(arr, size) {
  // Break it up. 
  
 var arr1=[];
      while (arr.length>0) {
        arr1.push (arr.splice(0,size));
      }
      return arr1;
    
   //in all honesty, I couldn't solve this one without looking up solutions
  //this is the only solution that was intuitive to me... I hope this doesn't
//seem disingenous, but sometimes finding an answer that works is better
//than beating your head against the PC trying to reinvent the wheel IMO
  
  //this answer is courtesy of venkatsgithub1 at FreeCodeCamp!
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
