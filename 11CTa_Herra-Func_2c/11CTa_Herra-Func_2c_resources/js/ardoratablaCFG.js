//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=10; timeIni=10; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=99;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="¡Correcto!, pasa a la actividad siguiente."; messageTime=""; messageError="¡Incorrecto!, corrige los errores y pulsa el botón [?]"; messageErrorG="¡Incorrecto!, corrige los errores y pulsa el botón [?]"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var d=[[0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1]];
var vCell=[["3","0","0","0","0","0","0","0","0"],["0","2","2","2","2","2","2","2","2"],["0","2","2","2","2","2","2","2","2"],["0","2","2","2","2","2","2","2","2"],["0","2","2","2","2","2","2","2","2"]];
var a0Cell=[["Mg","bGltYQ","YmFycmVuYQ","ZXNjb2ZpbmE","dGFsYWRybw","Y29sYQ","ZGVzdG9ybmlsbGFkb3I","bGxhdmUgaW5nbGVzYQ","cGlzdG9sYSBjb2xhIHRlcm1vZnVzaWJsZQ"],["dGFsYWRyYXI","MA","MQ","MA","MQ","MA","MA","MA","MA"],["bGltYXI","MQ","MA","MQ","MA","MA","MA","MA","MA"],["cGVnYXI","MA","MA","MA","MA","MQ","MA","MA","MQ"],["YXRvcm5pbGxhcg","MA","MA","MA","MA","MA","MQ","MQ","MA"]];
var c=[[0,4,7,8,7,4,14,13,25],[8,1,1,1,1,1,1,1,1],[5,1,1,1,1,1,1,1,1],[5,1,1,1,1,1,1,1,1],[10,1,1,1,1,1,1,1,1]];
var c1=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
var c2=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
var c3=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
var a1Cell=[["","bGltYQ","YmFycmVuYQ","ZXNjb2ZpbmE","dGFsYWRybw","Y29sYQ","ZGVzdG9ybmlsbGFkb3I","bGxhdmUgaW5nbGVzYQ","cGlzdG9sYSBjb2xhIHRlcm1vZnVzaWJsZQ"],["dGFsYWRyYXI","MA","MQ","MA","MQ","MA","MA","MA","MA"],["bGltYXI","MQ","MA","MQ","MA","MA","MA","MA","MA"],["cGVnYXI","MA","MA","MA","MA","MQ","MA","MA","MQ"],["YXRvcm5pbGxhcg","MA","MA","MA","MA","MA","MQ","MQ","MA"]];
var a2Cell=[["","bGltYQ","YmFycmVuYQ","ZXNjb2ZpbmE","dGFsYWRybw","Y29sYQ","ZGVzdG9ybmlsbGFkb3I","bGxhdmUgaW5nbGVzYQ","cGlzdG9sYSBjb2xhIHRlcm1vZnVzaWJsZQ"],["dGFsYWRyYXI","MA","MQ","MA","MQ","MA","MA","MA","MA"],["bGltYXI","MQ","MA","MQ","MA","MA","MA","MA","MA"],["cGVnYXI","MA","MA","MA","MA","MQ","MA","MA","MQ"],["YXRvcm5pbGxhcg","MA","MA","MA","MA","MA","MQ","MQ","MA"]];
var a3Cell=[["","bGltYQ","YmFycmVuYQ","ZXNjb2ZpbmE","dGFsYWRybw","Y29sYQ","ZGVzdG9ybmlsbGFkb3I","bGxhdmUgaW5nbGVzYQ","cGlzdG9sYSBjb2xhIHRlcm1vZnVzaWJsZQ"],["dGFsYWRyYXI","MA","MQ","MA","MQ","MA","MA","MA","MA"],["bGltYXI","MQ","MA","MQ","MA","MA","MA","MA","MA"],["cGVnYXI","MA","MA","MA","MA","MQ","MA","MA","MQ"],["YXRvcm5pbGxhcg","MA","MA","MA","MA","MA","MQ","MQ","MA"]];
var wordsGame="MTZDVGFfSGVycmEtRnVuY18yYw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cols=5; var rows=9;var showC=true;
