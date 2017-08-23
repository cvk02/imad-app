//console.log('Loaded!');
var button = document.getElementById("counter");

button.onclick = function(){
    
    var request = new XMLhttpRequest();
    
    request.onReadystatechange = function(){
      
      if(request.readyState === XMLhttpRequest.DONE)
        if(request.status === 200){
            
            var counter = request.responcesText;
            var span = document.getElementById("counter");
            span.innerHTML = counter.toString();
            
        }
    };
  request.open('GET',"http://chinmaykunte97@imad.hasura-app.io/counter",true);
  request.send();
    
};