//console.log('Loaded!');
var button = document.getElementById("magic");

var counter = 0;
button.onclick = function(req,res)
{
    
    counter = counter +1;
    var span = document.getElementById("magic");
    span.innerHTML = counter.toString();
}