//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=180; timeIni=180; timeBon=0;
var successes=0; successesMax=9; attempts=0; attemptsMax=99;
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
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";colorLeave="#000000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="CORRECTO"; messageTime=""; messageError="INCORRECTO"; messageErrorG="INCORRECTO"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MTVSUC1IZXJyYS1GdW5jLTJj"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["dGFsYWRyYXI=", "dGFsYWRybw=="],["YXByZXRhciB0dWVyY2Fz", "bGxhdmUgaW5nbGVzYQ=="],["Y29ydGFy", "c2VndWV0YQ=="],["c3VqZXRhcg==", "YWxpY2F0ZXM="],["cGVnYXI=", "cGlzdG9sYSBkZSBjb2xhIHRlcm1vZnVzaWJsZQ=="],["dHJhemFy", "bMOhcGl6"],["bGltYXI=", "ZXNjb2ZpbmE="],["bWVkaXI=", "bWV0cm8="],["Z29scGVhcg==", "bWF6YQ=="]];
var c=[[8,7],[15,13],[6,7],[7,8],[5,28],[6,5],[5,8],[5,5],[7,4]];
var con1=["taladrar","apretar tuercas","cortar","sujetar","pegar","trazar","limar","medir","golpear"];
var con2=["taladro","llave inglesa","segueta","alicates","pistola de cola termofusible","lápiz","escofina","metro","maza"];
var sel1=""; join1=[]; join2=[];
