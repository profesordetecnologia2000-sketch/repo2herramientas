//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=10;timeIni=10; timeBon=1;
var successes=0; successesMax=8; attempts=0; attemptsMax=99;
var score=0;scoreMax=1;scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Començar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Correcte, passa a la activitat següent"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError=""; borderAttempts="#FF0000";
var wordsGame="MTdSTS1FbXBhcmVqYUhlcnJhTm9tLTF2"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var wo1=["llapis","gat","xerrac","llima","barrina","martell","tornavís de creu","regle"];im1=["","","","","","","",""];mp31=["","","","","","","",""];alt1=["","","","","","","",""];
var wo2=["","","","","","","",""];im2=["Gato_01_100x100pixeles.jpg","Barrena_01_100x100pixeles.jpg","Martillo_01_100x100pixeles.jpg","Serrucho_01_100x100pixeles.jpg","Lapiz_01_100x100px.jpg","Lima_01_100x100pixeles.jpg","Destornillador_Cruz_01_100x100pixeles.jpg","ReglaMetalica_02_100x100pixeles.jpg"];mp32=["","","","","","","",""];alt2=["","","","","","","",""];
var cols=4; rows=4; items=8; itp=["MTA=","MTE=","MTI=","MTM=","MTQ=","MTU=","MTY=","MTc="]; pos=["MjQ=","MjA=","MjM=","MjU=","MjE=","MjI=","MjY=","Mjc="];
var boardGame=[["","","",""],["","","",""],["","","",""],["","","",""]]; dirMedia="17RM-EmparejaHerraNom-1v_resources/media/"
var open1R=""; open1C=""; open2R=""; open2C=""; ansDo=0;
var a;
