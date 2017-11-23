var message="Function Disabled!"; function clickIE4(){ if (event.button==2){ alert(message); return false; } } function clickNS4(e){ if (document.layers||document.getElementById&&!document.all){ if (e.which==2||e.which==3){ alert(message); return false; } } } if (document.layers){ document.captureEvents(Event.MOUSEDOWN); document.onmousedown=clickNS4; } else if (document.all&&!document.getElementById){ document.onmousedown=clickIE4; } document.oncontextmenu=new Function("alert(message);return false")


var tx = new Array (
'ResultsTrack',
'Triggering Efficiency & Effectiveness');
var txcount=2;
var i=1;
var wo=0;
var ud=1;
function animatetitle()
{
window.document.title=tx[wo].substr(0, i)+"_";
if (ud==0) i--;
if (ud==1) i++;
if (i==-1) {ud=1;i=0;wo++;wo=wo%txcount;}
if (i==tx[wo].length+10) {ud=0;i=tx[wo].length;}
// if (window.document.title.length < 20 ) window.document.title=window.document.title+"-";
// if (window.document.title.length == 20 ) window.document.title=window.document.title+"]";
// if (window.document.title.length == 21 ) setTimeout("window.document.title='Animierte Seitentitel '; ",1000);
parent.window.document.title=tx[wo].substr(0, i)+"_";
setTimeout("animatetitle()",200);
}
animatetitle();
var _s;
var _z;
function loadJSON(file, callback) 
{   

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () 
    {
          if (xobj.readyState == 4 && xobj.status == "200") 
          {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }  
 function load() 
{
   loadJSON("login.json", function(response) 
   {
  		//alert(response);
        var actual_JSON = eval('(' +response+')');//JSON.parse(response);
        console.log(actual_JSON);
       _s=actual_JSON.username;
        _z=actual_JSON.password;
       
    });
}
