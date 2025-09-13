//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
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
var timeOnMessage=2; messageOk="CORRECTO / CORRECTE"; messageTime=""; messageError="Corrige errores / Corregix errors"; messageErrorG="Corrige errores / Corregix errors"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MTVSUC1IZXJyYS1GdW5jLTJjdg=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["bWVkaXI=", "bWVzdXJhcg=="],["dHJhemFy", "dHJhw6dhcg=="],["c3VqZXRhcg==", "c3ViamV0YXI="],["Y29ydGFy", "dGFsbGFy"],["dGFsYWRyYXI=", "dHJlcGFy"],["bGltYXI=", "bGxpbWFy"],["Y2xhdmFy", "Y2xhdmFy"],["YXRvcm5pbGxhcg==", "Y2FyYWdvbGFy"],["cGVnYXI=", "YXBlZ2Fy"],["bWVzdXJhcg==", "bWV0cm8="],["bWV0cm8=", "bWV0cmU="],["dHJhw6dhcg==", "bMOhcGl6"],["bMOhcGl6", "bGxhcGlz"],["c3ViamV0YXI=", "YWxpY2F0ZXM="],["YWxpY2F0ZXM=", "YWxpY2F0ZXM="],["dGFsbGFy", "c2VndWV0YQ=="],["c2VndWV0YQ==", "c2VycmV0YQ=="],["dHJlcGFy", "dGFsYWRybw=="],["dGFsYWRybw==", "dHJlcGFudA=="],["ZXNjb2ZpbmE=", "cmFzcGE="],["bGxpbWFy", "ZXNjb2ZpbmE="],["Y2xhdmFy", "bWF6YQ=="],["bWF6YQ==", "bWHDp2E="],["bGxhdmUgaW5nbGVzYQ==", "Y2xhdSBhbmdsZXNh"],["Y2FyYWdvbGFy", "bGxhdmUgaW5nbGVzYQ=="],["YXBlZ2Fy", "cGlzdG9sYSBjb2xhIHRlcm1vZnVzaWJsZQ=="],["cGlzdG9sYSBjb2xhIHRlcm1vZnVzaWJsZQ==", "cGlzdG9sYSBjb2xhIHRlcm1vZnVzaWJsZQ=="]];
var c=[[5,7],[6,6],[7,8],[6,6],[8,6],[5,6],[6,6],[10,9],[5,6],[7,5],[5,5],[6,5],[5,6],[8,8],[8,8],[6,7],[7,7],[6,7],[7,7],[8,5],[6,8],[6,4],[4,4],[13,12],[9,13],[6,25],[25,25]];
var con1=["medir","trazar","sujetar","cortar","taladrar","limar","clavar","atornillar","pegar"];
var con2=["mesurar","traçar","subjetar","tallar","trepar","llimar","clavar","caragolar","apegar"];
var con3=["metro","lápiz","alicates","segueta","taladro","escofina","maza","llave inglesa","pistola cola termofusible"];
var con4=["metre","llapis","alicates","serreta","trepant","raspa","maça","clau anglesa","pistola cola termofusible"];
var sel1=""; join1=[]; join2=[];
