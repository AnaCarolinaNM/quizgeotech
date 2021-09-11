var ana;
var xbotao2, ybotao2;         
var xbotao3, ybotao3;
//  botao_menu = [x,y]
var botao_menu_1 = [];
var botao_menu_2 = [];
var botao_menu_3 = [];
//  botao_jogo = [x_inicial, x_final, y_inicial, y_final]
var botao_jogo_1 = [];
var botao_jogo_2 = [];
var botao_jogo_3 = [];
var botao_jogo_4 = [];
var xcursor, ycursor;
var estado, pos_cursor;
var score;
var estado_anterior;
var time;
var clock;
var score0;
function setup() {
  createCanvas(400, 400);
  
  botao_menu_1[0] = 150;
  botao_menu_1[1] = 120;
  botao_menu_2[0] = 150;
  botao_menu_2[1] = 180;
  botao_menu_3[0] = 150;
  botao_menu_3[1] = 250;
  
  botao_jogo_1[0] = 60;
  botao_jogo_1[1] = 160;
  botao_jogo_1[2] = 110;
  botao_jogo_1[3] = 160;
  
  botao_jogo_3[0] = 60;
  botao_jogo_3[1] = 160;
  botao_jogo_3[2] = 200;
  botao_jogo_3[3] = 260;
  
  botao_jogo_2[0] = 220;
  botao_jogo_2[1] = 320;
  botao_jogo_2[2] = 110;
  botao_jogo_2[3] = 160;
  
  botao_jogo_4[0] = 220;
  botao_jogo_4[1] = 320;
  botao_jogo_4[2] = 200;
  botao_jogo_4[3] = 260;
  
  xcursor = 150;
  ycursor = 120;
  estado = 1;
  pos_cursor = 1;
  score = 0;
  estado_anterior=1;
  
  time = 0;
  clock = 0;
  score0 = false;
}

function preload(){
  ana = loadImage('eu.jpeg');
}

/*  NÚMEROS DAS TELAS
  1 - Menu
  2 - Instruções
  3 - Créditos
  4 - Vitória
  5 - Derrota
  6 - Fase 1
  7 - Fase 2
  8 - Fase 3
*/
function draw() {
  if(estado==1){
    menu(); 
}
  else if(estado==2){
    instruções();
  }  
  else if(estado==3) {
    creditos();
  }
  else if(estado==4){
    vitoria();
  }
  else if(estado==5) {
    derrota();
  }
  else if(estado==6){
    fase1();
  }
  else if(estado==7){
    fase2();
  }
  else if(estado==8){
    fase3();
  }
  else if(estado==9){
    fase4();
  }
}
function keyPressed(){
  if(keyCode==UP_ARROW && pos_cursor > 1){ //dir o cursor p/ cima
    pos_cursor -= 1;
    if(pos_cursor == 1){
      ycursor = botao_menu_1[1];
      console.log(pos_cursor);
    }
    if(pos_cursor == 2){
      ycursor = botao_menu_2[1];
      console.log(pos_cursor);
    }
  }
  if(keyCode==DOWN_ARROW && pos_cursor < 3){  //cursor p/baixo
    pos_cursor += 1
    if(pos_cursor==2){
      ycursor = botao_menu_2[1];
      console.log(pos_cursor);
    }
  if (pos_cursor == 3){
      ycursor = botao_menu_3[1];
      console.log(pos_cursor);
  }
  }
  if(keyCode==ENTER){
    if(estado==4 && estado_anterior == 6){
        estado = 7;
    }
    if(estado == 4 && estado_anterior == 7){  //tela vitoria e fase vitoria = 2
      estado = 8;     //direciona para a fase 3
    }
    if(estado == 4 && estado_anterior == 8){  
      estado = 9;
    }
    if(estado==5 && !score0){
      estado = estado_anterior;
    } else if (estado==5 && score0){
      estado = 1;
    }
    else if(pos_cursor==1){
      estado=6
    }
    else if (pos_cursor==2){
      estado=2      
  }
    else if(pos_cursor==3){
      estado=3
    }
  }
  if(keyCode==LEFT_ARROW){    //voltar p/ o menu
    if(estado==6 || estado == 2 || estado==3 || estado==4 || estado == 5 || estado == 7 || estado == 8){
      estado=1;
      pos_cursor = 1;
    }
  }  
}

function menu(){
  background(51);
  stroke(0);
  fill(51)
  rect(100,100,200,220,50);
  score = 0;
  
  textSize(23);
  fill(255,255,255);
  text("🤔 QUIZ GEOTECH 🌍", 80, 50);
  textSize(35)
  text("🗺️ 🧭 📕 🗺️ 🧭 📕", 40, 367);
  score = 0;
  score0 = false;
  
  //botão 1
  fill(180)
  rect(botao_menu_1[0], botao_menu_1[1],100,50, 10);   //retang. do botao1
  fill(255,255,255);
  textSize(12);
  text("START", botao_menu_1[0]+30, botao_menu_1[1]+30);
  //botão 2
  fill(180);
  rect(botao_menu_2[0], botao_menu_2[1],100,50, 10)  //retang. do botao2
  fill(255,255,255);
  textSize(12)
  text("INSTRUÇÕES", botao_menu_2[0]+10, botao_menu_2[1]+30);
  //botao3
  fill(180);
  rect(botao_menu_3[0], botao_menu_3[1],100,50, 10)  //retang. do botao3
  fill(255,255,255);
  textSize(12)
  text("CRÉDITOS", botao_menu_3[0]+20, botao_menu_3[1]+30);
  
  //cursor
  noFill();
  stroke('red');
  strokeWeight(4);
  rect(xcursor, ycursor, 100, 50,10); 
}

function fase1(){
  pos_cursor = 0;
  estado_anterior = 6;
  background(51);
  fill(180)
  textSize(15);
  fill(255,255,255);
  stroke(0)
  text("1) QUAL A CIÊNCIA QUE ESTUDA A", 70,50);
  text("ATMOSFERA DA TERRA E A CLIMATOLOGIA?", 30, 70);
  fill(180);
  
  time++;
  clock = 30 - int(time/100);
  text("Tempo: " + clock, 160, 350);
  text("⏱️", 232, 350);
  
  if(clock == 0){
    estado = 5;
    if(score > 0){
      score -= 50;
    }
  }
  
  rect(60, 110, 100, 50, 10);  //alternativa 1
  textSize(12);
  fill(255,255,255);  
  if(mouseIsPressed && mouseX >= botao_jogo_1[0] && mouseX <= botao_jogo_1[1] && mouseY >= botao_jogo_1[2] && mouseY <= botao_jogo_1[3]){
    fill(255,0,0);
    estado=5;
    if(score > 0){
      score -= 50;
    }
  }
  text("ASTRONOMIA",70, 140);
  
  fill(180);
  rect(60, 200, 100, 50, 13);  //alternativa 3
  textSize(12);
  fill(255,255,255);
  if(mouseIsPressed && mouseX >= botao_jogo_3[0] && mouseX <= botao_jogo_3[1] && mouseY >= botao_jogo_3[2] && mouseY <= botao_jogo_3[3]){
    fill(0,255,0);
    estado=4;
    score += 100
  }
  text("METEOROLOGIA",60, 230);
  
  fill(180)
  rect(220, 200, 100, 50, 10);  //alternativa 4
  textSize(12);
  fill(255,255,255);
  if(mouseIsPressed && mouseX >= botao_jogo_4[0] && mouseX <= botao_jogo_4[1] && mouseY >= botao_jogo_4[2] && mouseY <= botao_jogo_4[3]){
    fill(255,0,0);
    estado = 5;
    if(score > 0){
      score -= 50;
    }
  }
  text("HOROLOGIA",232, 230);
  
  fill(180)
  rect(220, 110, 100, 50, 10);  //alternativa 2
  textSize(12);
  fill(255,255,255);
  if(mouseIsPressed && mouseX >= botao_jogo_2[0] && mouseX <= botao_jogo_2[1] && mouseY >= botao_jogo_2[2] && mouseY <= botao_jogo_2[3]){
    fill(255,0,0);
    estado = 5;
    if(score > 0){
      score -= 50;
    }
  }
  text("ASTROLOGIA",232, 140);
  
}

function fase2(){
  estado_anterior = 7;
  background(51);
  fill(180)
  textSize(15);
  fill(255,255,255);
  stroke(0)
  text("2) O MAIOR OCEANO DA TERRA É O...", 50,50);
  fill(180);
  
  time++;
  clock = 30 - int(time/100);
  text("Tempo: " + clock , 160, 350);
  text("⏱️", 232, 350);
  
  if(clock == 0){
    estado = 5;
    if(score > 0){
      score -= 50;
    }
  }
  
  rect(60, 110, 100, 50, 10);  //alternativa 1
  textSize(12);
  fill(255,255,255);  
  if(mouseIsPressed && mouseX >= botao_jogo_1[0] && mouseX <= botao_jogo_1[1] && mouseY >= botao_jogo_1[2] && mouseY <= botao_jogo_1[3]){
    fill(255,0,0);
    estado=5;
    if(score > 0){
      score -= 50;
    }
  }
  text("VELHO CHICO",70, 140);
  
  fill(180);
  rect(60, 200, 100, 50, 13);  //alternativa 3
  textSize(12);
  fill(255,255,255);
  if(mouseIsPressed && mouseX >= botao_jogo_3[0] && mouseX <= botao_jogo_3[1] && mouseY >= botao_jogo_3[2] && mouseY <= botao_jogo_3[3]){
    fill(255,0,0);
    estado=5;
    if(score > 0){
      score -= 50;
    }
  }
  text("ATLÂNTICO",80, 230);
  
  fill(180)
  rect(220, 200, 100, 50, 10);  //alternativa 4
  textSize(12);
  fill(255,255,255);
  if(mouseIsPressed && mouseX >= botao_jogo_4[0] && mouseX <= botao_jogo_4[1] && mouseY >= botao_jogo_4[2] && mouseY <= botao_jogo_4[3]){
    fill(0,255,0);
    estado = 4;
    score += 100;
  }
  text("PACÍFICO",242, 230);
  
  fill(180)
  rect(220, 110, 100, 50, 10);  //alternativa 2
  textSize(12);
  fill(255,255,255);
  if(mouseIsPressed && mouseX >= botao_jogo_2[0] && mouseX <= botao_jogo_2[1] && mouseY >= botao_jogo_2[2] && mouseY <= botao_jogo_2[3]){
    fill(255,0,0);
    estado = 5;
    if(score > 0){
      score -= 50;
    }
  }
  text("ÍNDICO",250, 140);
  
}

function fase3(){
  estado_anterior = 8;
  background(51);
  fill(180)
  textSize(15);
  fill(255,255,255);
  stroke(0)
  text("3) QUAL A CAPITAL DO ACRE?", 80, 50);
  fill(180);
  
  time++;
  clock = 30 - int(time/100);
  text("Tempo: " + clock, 160, 350);
  text("⏱️", 232, 350);
  
  if(clock == 0){
    estado = 5;
    if(score > 0){
      score -= 50;
    }
  }
  
  rect(60, 110, 100, 50, 10);  //alternativa 1
  textSize(12);
  fill(255,255,255);  
  if(mouseIsPressed && mouseX >= botao_jogo_1[0] && mouseX <= botao_jogo_1[1] && mouseY >= botao_jogo_1[2] && mouseY <= botao_jogo_1[3]){
    fill(0,255,0);
    estado=4;
    score += 100;
  }
  text("RIO BRANCO",73, 140);
  
  fill(180);
  rect(60, 200, 100, 50, 13);  //alternativa 3
  textSize(12);
  fill(255,255,255);
  if(mouseIsPressed && mouseX >= botao_jogo_3[0] && mouseX <= botao_jogo_3[1] && mouseY >= botao_jogo_3[2] && mouseY <= botao_jogo_3[3]){
    fill(255,0,0);
    estado=5;
    if(score > 0){
      score -= 50;
    }
  }
  text("SÃO LUÍS",82, 230);
  
  fill(180)
  rect(220, 200, 100, 50, 10);  //alternativa 4
  textSize(12);
  fill(255,255,255);
  if(mouseIsPressed && mouseX >= botao_jogo_4[0] && mouseX <= botao_jogo_4[1] && mouseY >= botao_jogo_4[2] && mouseY <= botao_jogo_4[3]){
    fill(255,0,0);
    estado=5;
    if(score > 0){
      score -= 50;
    }
  }
  text("PORTO VELHO",229, 230);
  
  fill(180)
  rect(220, 110, 100, 50, 10);  //alternativa 2
  textSize(12);
  fill(255,255,255);
  if(mouseIsPressed && mouseX >= botao_jogo_2[0] && mouseX <= botao_jogo_2[1] && mouseY >= botao_jogo_2[2] && mouseY <= botao_jogo_2[3]){
    fill(255,0,0);
    estado = 5;
    if(score > 0){
      score -= 50;
    }
  }
  text("INGLATERRA",232, 140);
  
}

function fase4(){
  estado_anterior = 9;
  background(51);
  fill(180)
  textSize(15);
  fill(255,255,255);
  stroke(0)
  text("4) CIDADE BRASILEIRA ONDE ESTÁ O RIO TIETÊ?", 30,50);
  fill(180);
  
  time++;
  clock = 30 - int(time/100);
  text("Tempo: " + clock, 160, 350);
  text("⏱️", 232, 350);
  
  if(clock == 0){
    estado = 5;
    if(score > 0){
      score -= 50;
    }
  }
  
  rect(60, 110, 100, 50, 10);  //alternativa 1
  textSize(12);
  fill(255,255,255);  
  if(mouseIsPressed && mouseX >= botao_jogo_1[0] && mouseX <= botao_jogo_1[1] && mouseY >= botao_jogo_1[2] && mouseY <= botao_jogo_1[3]){
    fill(255,0,0);
    estado=5;
    if(score > 0){
      score -= 50;
    }
  }
  text("RIO DE JANEIRO",61, 140);
  
  fill(180);
  rect(60, 200, 100, 50, 13);  //alternativa 3
  textSize(12);
  fill(255,255,255);
  if(mouseIsPressed && mouseX >= botao_jogo_3[0] && mouseX <= botao_jogo_3[1] && mouseY >= botao_jogo_3[2] && mouseY <= botao_jogo_3[3]){
    fill(255,0,0);
    estado=5;
    if(score > 0){
      score -= 50;
    }
  }
  text("NATAL",90,230);
  
  fill(180)
  rect(220, 200, 100, 50, 10);  //alternativa 4
  textSize(12);
  fill(255,255,255);
  if(mouseIsPressed && mouseX >= botao_jogo_4[0] && mouseX <= botao_jogo_4[1] && mouseY >= botao_jogo_4[2] && mouseY <= botao_jogo_4[3]){
    fill(255,0,0);
    estado=5;
    if(score > 0){
      score -= 50;
    }
  }
  text("MANAUS", 245,230);
  
  fill(180)
  rect(220, 110, 100, 50, 10);  //alternativa 2
  textSize(12);
  fill(255,255,255);
  if(mouseIsPressed && mouseX >= botao_jogo_2[0] && mouseX <= botao_jogo_2[1] && mouseY >= botao_jogo_2[2] && mouseY <= botao_jogo_2[3]){
    fill(0,255,0);
    estado = 4;
    score += 100;
  }
  text("SÃO PAULO", 238,140);
  
}

function instruções(){
  background(51);
  textSize(20);
  fill(255,255,255);
  stroke(0)
  text("INSTRUÇÕES", 120, 50)
  textSize(15)
  text("- PARA JOGAR: SELECIONE A OPÇÃO CORRETA", 10, 100)
  text("  COM O MOUSE", 10, 120);
  text("- QUANDO O JOGADOR SELECIONAR A RESPOSTA", 10, 140);
  text("  CORRETA, GANHA 100 PONTOS", 10, 160);
  text("- QUANDO SELECIONAR A RESPOSTA ERRADA,",10, 180);
  text("  PERDERÁ 50 PONTOS", 10, 200)
  text("- PARA RETORNAR AO MENU TECLE ◀️", 10, 220)
}

function creditos(){
  background(51);
  textSize(20);
  fill(255,255,255);
  stroke(0);
  image(ana, 120, 90, 150, 150)
  text("Ana Carolina", 140, 260);
  text("Desenvolvedora Jr", 120, 280);
  text("- PARA RETORNAR AO MENU TECLE ◀️", 10, 380)
}

function vitoria(){
  background(51);
  stroke(0);
  fill(51);
  time = 0;
  
  textSize(18)
  fill(255,255,255)
  if(estado_anterior != 9){
    text("PARABÉNS! VOCÊ ACERTOU A PERGUNTA😀",  7, 50);
    textSize(14)
    text("- PARA IR PARA A PRÓXIMA FASE TECLE ENTER", 10, 350);
    text("- PARA RETORNAR AO MENU TECLE ◀️", 10, 380);
  } else {
    text("PARABÉNS! VOCÊ ZEROU O JOGO 🏆🎉", 22, 50);
    textSize(14)
    text("- PARA RETORNAR AO MENU TECLE ◀️", 50, 380);
  }
  text("VOCÊ GANHOU 100 PONTOS",    90,150);
  text("SCORE ATUAL: "  + score, 120, 250);
}

function derrota(){
  background(51);
  stroke(0);
  fill(51);
  time = 0;
  
  textSize(18)
  fill(255,255,255)
  text("QUE PENA! TENTE NOVAMENTE ☹️", 50, 50);
  if(score != 0){
    textSize(14)
    text("VOCÊ PERDEU 50 PONTOS",  90, 150);
  } else {
   textSize(14);
    text("VOCÊ PERDEU TODOS OS PONTOS ☠️", 55, 150);
    score0  = true;
    pos_cursor = 1;
  }
  text("SCORE ATUAL: "   + score,120, 250);
  textSize(14);
  text("- PARA RETORNAR A FASE TECLE ENTER", 10, 350);
  text("- PARA RETORNAR AO MENU TECLE ◀️", 10, 380)
}