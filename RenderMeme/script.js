const btn = document.getElementById("button1");


// 'p' is the object, at which mouse() is activated.
$("p").mouseup(function(){
  $(this).append('<span style="color:#F00;">Mouse up.</span>');
}).mousedown(function(){
  $(this).append('<span style="color:#00F;">Mouse down.</span>');
});




