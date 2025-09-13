//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
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
var timeOnMessage=2; messageOk="CORRECTE"; messageTime=""; messageError="INCORRECTE"; messageErrorG="INCORRECTE"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MTVSUC1IZXJyYS1GdW5jLTF2"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["bWVzdXJhcg==", "cmVnbGE="],["dHJhw6dhcg==", "Y29tcMOgcw=="],["c3ViamV0YXI=", "Z2F0"],["dGFsbGFy", "eGVycmF0"],["dHJlcGFy", "YmFycmluYQ=="],["bGxpbWFy", "bGxpbWE="],["Y2xhdmFy", "bWFydGVsbA=="],["Y2FyYWdvbGFy", "dG9ybmF2w61z"],["YXBlZ2Fy", "Y29sYQ=="]];
var c=[[7,5],[6,6],[8,3],[6,6],[6,7],[6,5],[6,7],[9,8],[6,4]];
var con1=["mesurar","traçar","subjetar","tallar","trepar","llimar","clavar","caragolar","apegar"];
var con2=["regla","compàs","gat","xerrat","barrina","llima","martell","tornavís","cola"];
var sel1=""; join1=[]; join2=[];
