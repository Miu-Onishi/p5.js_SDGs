
let scene = 0;
let a=-75;
let b=300;
let c=520;
let d=400;
let i=0;
let e=310;
let f=400;
let g=0;
let mx=0 , my=0;
let linex=70;
let recty=140;

function preload() {
  mori = loadImage("imgs/mori.jpg");
  denki = loadImage("imgs/denki.png");
  gasu = loadImage("imgs/gasu.png");
  suidou = loadImage("imgs/suidou.png");
  graph1 = loadImage("imgs/graph1.png");
  earth1 = loadImage("imgs/earth1.png");
  earth2 = loadImage("imgs/earth2.png");
  sdg = loadImage("imgs/sdg07.png");
  teiden_on = loadImage("imgs/teiden_on.png");
  teiden_off = loadImage("imgs/teiden_off.png");
  fuuryoku = loadImage("imgs/fuuryoku.png");
  suiryoku = loadImage("imgs/suiryoku.png");
  taiyoukou = loadImage("imgs/taiyoukou.png");
  vaiomasu = loadImage("imgs/vaiomasu.png");
  chikyu1 = loadImage("imgs/chikyu1.png");
  chikyu2 = loadImage("imgs/chikyu2.png");
  kodomo = loadImage("imgs/kodomo.png");
  bikkuri = loadImage("imgs/bikkuri.png");
  sessui = loadImage("imgs/sessui.png");
  setsuden = loadImage("imgs/setsuden.png");
  hukuro = loadImage("imgs/hukuro.png");
  eacon= loadImage("imgs/eacon.png");
}

function setup() {
  createCanvas(500, 500);
  background(255);
  frameRate(60); 
}

function draw() {
   

  if (scene == 0) scene0();
  if (scene == 1) scene1();
  if (scene == 2) scene2();
  if (scene == 3) scene3();
  if (scene == 4) scene4();
  if (scene == 5) scene5();
  if (scene == 6) scene6();
  if (scene == 7) scene7();
  if (scene == 8) scene8();
  if (scene == 9) scene9();
}

function mousePressed() {
  scene++;
  if (scene > 9) scene = 0; 
}





function scene0() {
  image(mori, 0, 0, 500, 500);
  stroke(0);
  rectMode(CENTER);
  fill(255);
  rect(width / 2, 225, 400, 110);
  textSize(30);
  fill(200,0,0);
  text("エネルギー", 105, 210);
  fill(0)
  textSize(24);
  text("をみんなに、", 260, 210);
  text("そして", 75, 250);
  fill(0,200,0);
  textSize(30);
  text("クリーン", 155, 250);
  fill(0)
  textSize(24);
  text("にするために", 280, 250);
  
  a = a + 4;
  if(a > 1075) a = -75;
  Earth(a,b);

}
function scene1() {
  background(255);
  textAlign(CENTER, CENTER);
  textSize(25);
  fill(0);
  text("どんな目標かというと" ,width/2 , 50);
  line(110,65,80,40);
  line(390,65,420,40);
  image(sdg,125,100,250,250);
  
  c = c - 4;
  if(c < -1000) c = 520;
  Moji1(c,d);
}

function scene2() {
  background(255);
  rectMode(CENTER);
  image(denki, 50, 200, 100, 100);
  image(gasu, 200, 200, 100, 100);
  image(suidou, 350, 200, 100, 100);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("生活に欠かせないものといえば!!", width / 2, 70);
  text("ですが",width / 2, 370);
  stroke(0);
  fill(191, 63, 127);
  ellipse(mouseX,mouseY,18,18);
  if(mouseX>=50 && mouseX<=150) {
    if(mouseY>=200 && mouseY<=300) {
      text("電気",100,150);
    }
  }
  if(mouseX>=200 && mouseX<=300) {
    if(mouseY>=200 && mouseY<=300) {
      text("ガス",250,150);
    }
  }
  if(mouseX>=350 && mouseX<=450) {
    if(mouseY>=200 && mouseY<=300) {
      text("水道",390,150);
    }
  }
}
//エネルギーと言えば電機やガス、水道など日々の生活に欠かせないもの

//再生可能エネルギーとは資源を再生することが可能で、二酸化炭素を排出しないため環境にやさしいクリーンなエネルギーと言える。

//世界でおよそ8億4千万人の人が電気を使えていないのが現状



function scene3() {
  background(255);
  fill(0);
  textAlign(LEFT, TOP);
  textSize(25);
  text("世界の", 20, 30);
  fill(300,0,0);
  text("約８億４千万人", 100, 30);
  fill(0);
  text("の人が",280, 30);
  text("電気のない生活を送っています。",20,60);
  
  text("二酸化炭素を大量に排出する石油や石炭を",10,410);
  text("使った電力は",10,440);
  fill(300,0,0);
  text("地球温暖化",165,440);
  fill(0);
  text("を進めます。",295,440);
  i++;
  if(i==2) i=0;
  teiden(i);
}
  
function scene4() {
  background(255);
  frameRate(60);
  stroke(0);
  rectMode(CENTER);
  fill('rgba(76, 127, 178,0.4)');
  rect(250,85,450,60);
  fill(0);
  textAlign(CENTER,CENTER);
  textSize(20);
  text("ではこの目標をどのように",150,70);
  text("実現すればよいのでしょうか",330,100);
  text("最大のキーポイントは",160,400);
  text("です。",400,400);
  image(chikyu1,75,150,150,150);
  image(chikyu2,275,150,150,150);
  
  g = g +4;
  f = f -2;
  if(g > 25) g=0;
  if(f <370) f=370;
  textSize(g);
  Moji2(e,f);
}

function scene5() {
  background(255);
  frameRate(60); 
  image(graph1, -50, 70, 500, 350);
  pageTitle("世界の電力源の割合");
  textAlign(LEFT, TOP);
  textSize(17);
  fill(0,0,255);
  text("風力",370,180);
  text("水力",370,230);
  text("太陽光",370,280);
  text("バイオマス",370,330);
  fill(191, 63, 127);
  stroke(0);
  ellipse(mouseX,mouseY,18,18);
  if(mouseX>=300 && mouseX<=420) {
    if(mouseY>=110 && mouseY<=165) {
      noStroke();
      rectMode(CORNER);
      fill(255);
      rect(20, 20, 490, 410);
      //rect(260,110,150,55);
       pageTitle("再生可能エネルギー");
      fill(0,0,255);
      textSize(17);
      text("風力",50,360);
      text("水力",160,360);
      text("太陽光",280,360);
      text("バイオマス",400,360);
      image(fuuryoku,20,390,110,110);
      image(suiryoku,140,385,110,110);
      image(taiyoukou,260,398,110,110);
      image(vaiomasu,380,390,110,110);
      textAlign(LEFT, TOP);
      textSize(20);
      fill(0);
      text("とは、",180,100);
      fill(255,50,50);
      text("使っても資源を再生することが可能です",55,140);
      fill(0);
      text("さらに", 180,180);
      fill(255,50,50);
      text("二酸化炭素を出すこともなく", 70 , 220);
      text("環境にやさしいクリーンなエネルギーと言えます",35,260);
      
    }
    
  }  
  if(mouseX>=370 && mouseX<=420) {
    if(mouseY>=175 && mouseY<=215) {
      noStroke();
      rectMode(CORNER);
      fill(255);
      rect(20, 70, 325, 410);
      rect(260,110,150,55);
      image(fuuryoku,40,80,320,310);
    }
  }  
  if(mouseX>=370 && mouseX<=420) {
    if(mouseY>=216 && mouseY<=265) {
      noStroke();
      rectMode(CORNER);
      fill(255);
      rect(20, 70, 325, 410);
      rect(260,110,150,55);
      image(suiryoku,40,80,320,310);
    }
  }
  if(mouseX>=370 && mouseX<=440) {
    if(mouseY>=266 && mouseY<=315) {
      noStroke();
      rectMode(CORNER);
      fill(255);
      rect(20, 70, 325, 410);
      rect(260,110,150,55);
      image(taiyoukou,40,80,320,310);
    }
  }
  if(mouseX>=370 && mouseX<=470) {
    if(mouseY>=316 && mouseY<=355) {
      noStroke();
      rectMode(CORNER);
      fill(255);
      rect(20, 70, 325, 410);
      rect(260,110,150,55);
      image(vaiomasu,40,80,320,310);
    }
  }
}

function scene6() {
  background(255);
  frameRate(60); 
  rectMode(CORNER);
  stroke(0);
  fill(191, 63, 127);
  ellipse(mouseX,mouseY,18,18);
  noStroke();
  textSize(10);
  text("マウスで動かしてください",50,420);
  textSize(17);
  fill(0);
  text("クリーンエネルギーが世界中に行き渡るには",20,15);
  text("再生可能エネルギーの割合を増やすことが大事なのです",20,45);
 
  stroke(0);
  fill(255,255,255);
  rect(100,180,30,220);//スクロールバー
  fill(0);
  noStroke(0);
  rect(100,380,30,20); //カーソル
  text("2019年",20,380);
  text("2050年",20,180);
  text("化石",210,420);
  text("エネルギー",190,440);
  text("再生可能",320,420);
  text("エネルギー",315,440);
  text("エネルギー",315,440);
  //fill(255,100,100);
  //rect(200,100,60,300);//化石グラフ
  //fill(100,100,255)
  //rect(320,280,60,120);//再生可能グラフ

  graphAction(mouseX,mouseY);
}

function scene7() {
  background(255);
  stroke(0);
  fill(0);
  textAlign(CENTER,CENTER);
  textSize(24);
  strokeWeight(0);
  textStyle(BOLD);
  text("私たちにできることは何があるでしょう",250,180);
  strokeWeight(2);
  line(30,210,linex,210);
  if(linex <=470)linex=linex +5;
  image(kodomo,100,260,300,230);
  image(bikkuri,200,290,90,90);
  strokeWeight(1);
}

function scene8(){
  background(255);
  fill(0);
  noStroke();
  textAlign(CENTER,CENTER);
  textSize(30);
  text("例えば",250,70);
  image(sessui,70,140,130,130);
  image(eacon,280,140,140,140);
  image(setsuden,80,300,150,120);
  image(hukuro,300,290,100,140);
  fill(191, 63, 127);
  stroke(0);
  ellipse(mouseX,mouseY,18,18);
  noStroke();
  fill(255);
  rect(70,140,350,recty);
  if(recty >= 0)recty = recty - 3;
  rect(70,290,350,recty);
  fill(191, 63, 127);
  if(recty >= 0)recty = recty - 3;
    if(recty <= 0){
    if(mouseX>=80 && mouseX<=190){
    if(mouseY>=150 && mouseY<=270) {
    text("節水",150,120);
   }
   }
   }

    if(recty <= 0){
    if(mouseX>=80 && mouseX<=190){
    if(mouseY>=310 && mouseY<=410) {
    text("節電",150,430);
   }
   }
   }
    if(recty <= 0){
    if(mouseX>=290 && mouseX<=410){
    if(mouseY>=150 && mouseY<=270) {
    textSize(25);
    text("温度調節",350,120);
   }
   }
   }
    if(recty <= 0){
    if(mouseX>=290 && mouseX<=410){
    if(mouseY>=320&& mouseY<=420) {
    textSize(20);
    text("マイバック",350,450);
   }
   }
   }
}
function scene9(){
  image(mori, 0, 0, 500, 500);
  noStroke();
  stroke(0);
  rectMode(CENTER);
  fill(255);
  rect(width / 2, 225, 480, 110);
  noStroke();
  textSize(20);
  fill(0)
  text("一人一人がエネルギーの使い方を改善するだけで、", 250, 200);
  text("地球にやさしい環境が作れるのです", 250, 250);

  a = a + 4;
  if(a > 1075) a = -75;
  Earth2(a,b);
}



function Earth(a, b) {
  image(earth1, a-75, b, 150, 150);
  image(earth2, a-250, b, 150, 150);
  image(earth1, a-425, b, 150, 150);
  image(earth2, a-600, b, 150, 150);
}
function Earth2(a, b) {
  image(earth1, a-75, b, 150, 150);
  image(earth1, a-250, b, 150, 150);
  image(earth1, a-425, b, 150, 150);
  image(earth1, a-600, b, 150, 150);
}

function Moji1(c, d) {
  textAlign(LEFT);
  textSize(30);
  text("世界中のすべての人が安定してエネルギーを使えるようにしましょう。",c,d)
  text("  そしてそのエネルギーは環境にやさしいものにしよう、という目標です。",c,d+50);
}

function teiden(i) {
  frameRate(2); 
  if(i==1){
    image(teiden_on,105,110,295,290);
    text("電気",20,220);
    fill(0,0,255);
    text("あり",20,250);
  }
  if(i==0){
    image(teiden_off,105,110,295,290);
    text("電気",20,220);
    fill(300,0,0);
    text("なし",20,250);
  }

}

function pageTitle(title){
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(30);
  text(title, width / 2, 50);  
}
function Moji2(e,f) {
  frameRate(10); 
  fill(51, 153, 51);
  text("再生可能エネルギー",e,f);
}

function graphAction(mx,my){
  //rect(100,100,30,300);  スクロールバー

  if(mx >= 100 && mx <= 130){
    if(my >= 180 && my <= 380){
      my1=380-my;
      fill(255,255,255);
      rect(100,380,30,20);//いったんカーソル消す
      fill(150,150,150);
      rect(100,my,30,20); //カーソル
      fill(255,100,100);
      rect(200,100+my1,60,300-my1);//化石グラフ
      fill(100,100,255)
      rect(320,280-my1,60,120+my1);//再生可能グラフ
    }
  }
}



