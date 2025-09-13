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
var textButtonTime="Comenzar / Començar";
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
var posX=[-3,269,81,262,332,-2,-1,-10,-11,288,237,199]; var posY=[-2,25,67,86,189,151,234,285,340,235,341,214];
var coorx=["MTY=", "MjY0", "ODM=", "MjQy", "MzM5", "MTIy", "NzM=", "MTMx", "MTU4", "Mjcx", "MjU4", "MTg2"]; var coory=["NjY=", "MTA=", "OTk=", "MTA2", "MTI2", "MTkz", "MjMw", "Mjc2", "MzIy", "MjUy", "MzEy", "MTky"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", "", "", "", "", "", "", ""]; var al2=["", "", "", "", "", "", "", "", "", "", "", ""]; var al3=["", "", "", "", "", "", "", "", "", "", "", ""]; var al4=["", "", "", "", "", "", "", "", "", "", "", ""]; answers=["regla metálica", "sierra de arco", "sierra de costilla", "gato", "destornillador", "tijeras", "escuadra", "martillo", "alicates", "escofina", "lima", "barrena"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="MDJHUDEtSGVycmFtaWVudGFzLTJj"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
