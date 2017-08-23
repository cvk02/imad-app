//console.log('Loaded!');
var button = document.getElementById("counter");

var counter = 0;
button.onclick = function(req,res)
{
    
    counter = counter +1;
    var span = document.getElementById("counter");
    span.innerHTML = counter.toString();
};