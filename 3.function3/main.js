function alphabetSort(message){
    var messageArray = new Array();    
      for(var i = 0 ; i < message.length;i++){
        messageArray[i]=message.charAt(i);
    }

      for(var i = 0 ; i < messageArray.length;i++){
        for(var x = i+1 ; x< messageArray.length;x++){
            if(messageArray[i]>messageArray[x]){
                  var  temp=messageArray[i];
                    messageArray[i]=messageArray[x];
                    messageArray[x]=temp;
            }
        }
    }
     var result = "";
        for(var j = 0; j < messageArray.length; j++){
            result += messageArray[j];
        }
    console.log(result);
}
  
alphabetSort('hello'); // should return 'ehllo'
