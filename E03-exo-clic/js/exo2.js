// var i=0;
// document.body.addEventListener('click',
//     function(evt){
//         i = i+1
//         console.log(i);

//     });
//     // console.log('jesuis la');




var counter1 = document.getElementById('content');
var i=0;

oui.addEventListener('click',
    function(evt){
        i = i+1
      
        oui.textContent = 'oui ('+i+')';
    });


var counter2 = document.getElementById('conte');
var j=0;

non.addEventListener('click',
    function(evt){
        j = j+1
        non.textContent ='non ('+j+')';
       
    });

