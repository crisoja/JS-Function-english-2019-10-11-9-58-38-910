
function countWords(message){
 var counter = 1;
  for(var i = 0; i < message.length; i++){
    if(message.charAt(i)==" "){
    counter++;
  }
}
  console.log(counter);
}
countWords('Good morning, I love JavaScript.'); // should return 5