//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=180; timeIni=180; timeBon=0;
var successes=0; successesMax=12; attempts=0; attemptsMax=99;
var score=0; scoreMax=12; scoreInc=1; scoreDec=1
var typeGame=1;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
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
var timeOnMessage=5; messageOk="¡Correcto!"; messageTime=""; messageError="Corrige los errores y pulsa el botón [?]"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0","0","0","0","0"];
var doneB=["-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1"];
var posX=[-1,22,144,216,-1,264,115,-2,0,1,183,241]; var posY=[-3,45,20,62,124,174,176,209,244,270,273,230];
var coorx=["MTE=", "NzE=", "MjAw", "MTkw", "OTI=", "MjY3", "MTU5", "Njk=", "MTA2", "MTU2", "MTgx", "MjA1"]; var coory=["NDA=", "NzY=", "Nw==", "ODU=", "MTYy", "MTA3", "MTU0", "MTk4", "MjM2", "MjUx", "MjQ2", "MjEw"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", "", "", "", "", "", "", ""]; var al2=["", "", "", "", "", "", "", "", "", "", "", ""]; var al3=["", "", "", "", "", "", "", "", "", "", "", ""]; var al4=["", "", "", "", "", "", "", "", "", "", "", ""]; answers=["regla metálica", "sierra de costilla", "sierra de arco", "gato", "tijeras", "destornillador", "barrena", "escuadra", "martillo", "alicates", "lima", "escofina"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="MDJHUDItSGVycmFtaWVudGFzLTJj"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
