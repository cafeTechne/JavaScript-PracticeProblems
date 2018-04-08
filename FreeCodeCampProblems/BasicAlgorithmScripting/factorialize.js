function factorialize(num) {
  var initialNum= num;
  

    if (num == 0) {  
        return 1;  
    }  
    var tmp = num;  
    while (num-- > 2) {  
        tmp *= num;  
    }  
    return tmp;  
}

factorialize(5);
