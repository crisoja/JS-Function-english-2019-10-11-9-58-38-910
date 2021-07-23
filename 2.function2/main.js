function palindrome(message){
    var result = "";
    for(var i=message.length-1; i>=0 ; i--){
        result += message[i];
    }
    if(result==message){
        console.log(true);
    }
    else
       console.log(false); 
    }
    
palindrome('hello');
palindrome('abcba');