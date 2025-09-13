//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var txtSel; function initAct(){
if ((tiTime) && (tiButtonTime)){paintButtonTime();}for (i = 0; i < answers.length ; i++) {var nameDiv = "inputTxt" + (i + 1).toString();document.getElementById(nameDiv).value="";}if (tiAval){parent.iniciaActividade()}paintLinePoint();
$(":input").attr("autocomplete","off");$(":input").attr("spellcheck",false);
$(".txtCell_input").attr("tabindex","0");
$("#buttonOk").keydown(function(e){if (e.which!=9){isCorrect();}});$("#buttonOk").focus(function(e){removeOk();});$("#buttonOk").blur(function(e){paintOk();});
}
function randomSort() {}
function paintPoints(){var canvas = document.getElementById("ardoraActCanvasAnim"); canvas.style["visibility"]="visible"; canvas.width = canvas.width; var contexto = canvas.getContext("2d");
for (i = 0; i < doneA.length; i++) {contexto.beginPath();contexto.fillStyle=colorButton;contexto.arc(parseInt(panelWords(coorx[i])), parseInt(panelWords(coory[i])),4, 0, 2 * Math.PI, false);contexto.fill();
contexto.strokeStyle=colorSele;contexto.lineWidth = 2;
var go=true;var pos=$("#txt"+String(i+1)).position();var x=pos.left;var y=pos.top;var a=parseInt(panelWords(coorx[i]));var b=parseInt(panelWords(coory[i]));var txtWidth=$("#inputTxt"+String(i+1)).width();var txtHeight=$("#inputTxt" + String(i + 1)).height();
if (a >= x && a <= x + txtWidth && b > y + txtHeight) {x=x+(txtWidth/2);y=y+txtHeight-2;}else{if (a >= x && a <= x + txtWidth && b < y) {x=x+(txtWidth / 2);y=y-4;}else{if (a <=x && b<=y) {x=x;y=y;}
else{if (a<=x && b > y && b < y + txtHeight) {x=x-4;y=y+txtHeight/2;}else{if (a < x && b > y + txtHeight) {x=x-4;y=y+txtHeight-4;}else{if (a > x + txtWidth && b < y) {x = x + txtWidth+4;y=y-4;}
else{if (a >= x + txtWidth && b >= y && b <= y + txtHeight) {x=x+txtWidth+4;y=y+txtHeight/2;}else{if (a > x + txtWidth && b > y + txtHeight) {x = x + txtWidth;y = y + txtHeight;}else{if (a >= x && a <= x + txtWidth && b >= y && b <= y + txtHeight) {go = false;}}}}}}}}}
contexto.moveTo(parseInt(panelWords(coorx[i])), parseInt(panelWords(coory[i])));contexto.lineTo(x,y);if (go) {contexto.stroke();}
 if (doneA[i] == "0") {} else {var idT=String(i+1);$("#txt"+idT).html("<p>"+answers[i]+"</p>");$("#txt"+idT).addClass("txtCellOk");
}
}}
function paintLinePoint(){paintPoints();}
function isCorrect(cell) {for (i=0;i<answers.length;i++) {var correct=true;if (doneA[i]=="0") {var nameTxt="txt"+(i+1).toString();var nameDiv="inputTxt"+(i+1).toString();var respu=$.trim(document.getElementById(nameDiv).value);var solu=$.trim(answers[i]).replace("&#39;","'");
if (tiUD) {respu=respu.toUpperCase();solu=solu.toUpperCase();if (al1[i].length!=0){al1[i]=al1[i].toUpperCase()}if (al2[i].length!=0){al2[i]=al2[i].toUpperCase()}if (al3[i].length!=0){al3[i]=al3[i].toUpperCase()}if (al4[i].length!=0){al4[i]=al4[i].toUpperCase()}}
if (al1[i].length==0) {al1[i]=solu;}if (al2[i].length==0) {al2[i]=solu;}if (al3[i].length==0) {al3[i]=solu;}if (al4[i].length==0) {al4[i]=solu;}
if (respu != solu && respu != $.trim(al1[i]).replace("&#39;", "'") && respu != $.trim(al2[i]).replace("&#39;", "'") && respu != $.trim(al3[i]).replace("&#39;", "'") && respu != $.trim(al4[i]).replace("&#39;", "'")) {correct = false;}
if (correct) {timeAct=timeAct+timeBon;score=score+scoreInc;successes++;doneA[i] ="%&%%";} else {score=score-scoreDec;}}}paintPoints();
if (successes==answers.length) {$("#ardoraActCanvas").attr("aria-label",messageOk); showMessage("Ok");$("#buttonOk").remove();} else {attempts++;if (tiAttempts) {if (attempts>attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}
}
function goTime(){showMessage("Time");}
function showSol(oldTypeGame){for (i = 0; i < doneA.length; i++) {doneA[i] = answers[i];}paintPoints(); }
function paintBack(){}
function panelWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
