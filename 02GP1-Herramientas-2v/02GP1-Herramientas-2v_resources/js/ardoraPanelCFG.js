//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=1;
var successes=0; successesMax=12; attempts=0; attemptsMax=99;
var score=0; scoreMax=12; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Començar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#D3D6D6"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Correcto!"; messageTime=""; messageError="Corregix els errors i poulsa el botó [?]"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0","0","0","0","0"];
var posX=[2,201,99,281,0,331,183,-20,-1,-9,301,242]; var posY=[-6,24,70,95,138,166,228,233,295,349,261,340];
var coorx=["MTU=", "MjU0", "ODU=", "MjQx", "MTI0", "MzM1", "MTk0", "NTA=", "MTM1", "MTkz", "MjY4", "MjQ4"]; var coory=["NjE=", "Ng==", "NzQ=", "MTE0", "MTk3", "MTIy", "MTky", "MjI0", "MjYz", "MzI0", "Mjc3", "MzEz"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", "", "", "", "", "", "", ""]; var al2=["", "", "", "", "", "", "", "", "", "", "", ""]; var al3=["", "", "", "", "", "", "", "", "", "", "", ""]; var al4=["", "", "", "", "", "", "", "", "", "", "", ""]; answers=["regla metàl·lica", "serra d'arc", "serra de costella", "gat", "tisores", "tornavís", "barrina", "escaire", "martell", "alicates", "raspa", "llima"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="MDJHUDEtSGVycmFtaWVudGFzLTJ2"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
