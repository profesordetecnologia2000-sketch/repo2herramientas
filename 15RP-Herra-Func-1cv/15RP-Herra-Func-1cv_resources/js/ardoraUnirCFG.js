//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=40; timeIni=40; timeBon=0;
var successes=0; successesMax=27; attempts=0; attemptsMax=99;
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
var timeOnMessage=2; messageOk="CORRECTO / CORRECTE"; messageTime=""; messageError="Corrige errores y pulsa [?] / Corregix errors i polsa [?]"; messageErrorG="Corrige errores y pulsa [?] / Corregix errors i polsa [?]"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MTVSUC1IZXJyYS1GdW5jLTFjdg=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["bWVzdXJhcg==", "bWVkaXI="],["dHJhw6dhcg==", "dHJhemFy"],["c3ViamVjdGFy", "c3VqZXRhcg=="],["dGFsbGFy", "Y29ydGFy"],["dHJlcGFy", "dGFsYWRyYXI="],["bGxpbWFy", "bGltYXI="],["Y29scGVqYXI=", "Z29scGVhcg=="],["Y2FyYWdvbGFy", "YXRvcm5pbGxhcg=="],["YXBlZ2Fy", "cGVnYXI="],["bWVkaXI=", "cmVnbGE="],["cmVnbGE=", "cmVnbGE="],["dHJhemFy", "Y29tcMOhcw=="],["Y29tcMOhcw==", "Y29tcMOgcw=="],["c3VqZXRhcg==", "Z2F0bw=="],["Z2F0bw==", "Z2F0"],["Y29ydGFy", "c2VycnVjaG8="],["c2VycnVjaG8=", "eGVycmFj"],["dGFsYWRyYXI=", "YmFycmVuYQ=="],["YmFycmVuYQ==", "YmFycmluYQ=="],["bGltYXI=", "bGltYQ=="],["bGltYQ==", "bGxpbWE="],["Z29scGVhcg==", "bWFydGlsbG8="],["bWFydGlsbG8=", "bWFydGVsbA=="],["YXRvcm5pbGxhcg==", "ZGVzdG9ybmlsbGFkb3I="],["ZGVzdG9ybmlsbGFkb3I=", "dG9ybmF2w61z"],["Y29sYQ==", "Y29sYQ=="],["cGVnYXI=", "Y29sYQ=="]];
var c=[[7,5],[6,6],[9,7],[6,6],[6,8],[6,5],[8,7],[9,10],[6,5],[5,5],[5,5],[6,6],[6,6],[7,4],[4,3],[6,8],[8,6],[8,7],[7,7],[5,4],[4,5],[7,8],[8,7],[10,14],[14,8],[4,4],[5,4]];
var con1=["mesurar","traçar","subjectar","tallar","trepar","llimar","colpejar","caragolar","apegar"];
var con2=["medir","trazar","sujetar","cortar","taladrar","limar","golpear","atornillar","pegar"];
var con3=["regla","compás","gato","serrucho","barrena","lima","martillo","destornillador","cola"];
var con4=["regla","compàs","gat","xerrac","barrina","llima","martell","tornavís","cola"];
var sel1=""; join1=[]; join2=[];
