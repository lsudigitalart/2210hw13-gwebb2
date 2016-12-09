//var img1;
//var img2;


//var music;
music.play();
//var x;
//var y = 0;


function preload(){

  music = loadSound("finalmusic.mp3");
  img1 = loadImage("apple.png");
  img2 = loadImage("banana.png");
  img3 = loadImage("pear.png");
  img4 = loadImage("orange.png");
  img5 = loadImage("grapes.png");
  img6 = loadImage("basket.png");

}

function setup() {
  createCanvas(1000, 750);
  background(255);

  frameRate(30);

//apple

  apple1 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple2 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple3 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple4 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple5 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple6 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple7 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple8 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple9 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple10 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple11 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple12 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple13 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple14 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple15 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple16 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple17 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple18 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple19 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple20 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple21 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple22 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple23 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple24 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple25 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple26 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple27 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple28 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple29 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple30 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple31 = new Apple(img1, random(0, 850), 0, 100, 75);
  apple32 = new Apple(img1, random(0, 850), 0, 100, 75);

//banana

  banana1 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana2 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana3 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana4 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana5 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana6 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana7 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana8 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana9 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana10 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana11 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana12 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana13 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana14 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana15 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana16 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana17 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana18 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana19 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana20 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana21 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana22 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana23 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana24 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana25 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana26 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana27 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana28 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana29 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana30 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana31 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana32 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana33 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana34 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana35 = new Banana(img2, random(0, 850), 0, 100, 75);
  banana36 = new Banana(img2, random(0, 850), 0, 100, 75);

//pear

  pear1 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear2 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear3 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear4 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear5 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear6 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear7 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear8 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear9 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear10 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear11 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear12 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear13 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear14 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear15 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear16 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear17 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear18 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear19 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear20 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear21 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear22 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear23 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear24 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear25 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear26 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear27 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear28 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear29 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear30 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear31 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear32 = new Pear(img3, random(0, 850), 0, 150, 150);
  pear33 = new Pear(img3, random(0, 850), 0, 150, 150);

//orange

  orange1 = new Orange(img4, random(0, 850), 0, 60, 60);
  orange2 = new Orange(img4, random(0, 850), 0, 60, 60);
  orange3 = new Orange(img4, random(0, 850), 0, 60, 60);
  orange4 = new Orange(img4, random(0, 850), 0, 60, 60);
  orange5 = new Orange(img4, random(0, 850), 0, 60, 60);
  orange6 = new Orange(img4, random(0, 850), 0, 60, 60);
  orange7 = new Orange(img4, random(0, 850), 0, 60, 60);
  orange8 = new Orange(img4, random(0, 850), 0, 60, 60);
  orange9 = new Orange(img4, random(0, 850), 0, 60, 60);
  orange10 = new Orange(img4, random(0, 850), 0, 60, 60);
  orange11 = new Orange(img4, random(0, 850), 0, 60, 60);
  orange12 = new Orange(img4, random(0, 850), 0, 60, 60);
  orange13 = new Orange(img4, random(0, 850), 0, 60, 60);
  orange14 = new Orange(img4, random(0, 850), 0, 60, 60);
  orange15 = new Orange(img4, random(0, 850), 0, 60, 60);
  orange16 = new Orange(img4, random(0, 850), 0, 60, 60);
  orange17 = new Orange(img4, random(0, 850), 0, 60, 60);
  orange18 = new Orange(img4, random(0, 850), 0, 60, 60);
  orange19 = new Orange(img4, random(0, 850), 0, 60, 60);
  orange20 = new Orange(img4, random(0, 850), 0, 60, 60);
  orange21 = new Orange(img4, random(0, 850), 0, 60, 60);

//grapes

  grapes1 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes2 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes3 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes4 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes5 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes6 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes7 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes8 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes9 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes10 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes11 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes12 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes13 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes14 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes15 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes16 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes17 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes18 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes19 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes20 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes21 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes22 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes23 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes24 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes25 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes26 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes27 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes28 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes29 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes30 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes31 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes32 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes33 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes34 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes35 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes36 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes37 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes38 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes39 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes40 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes41 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes42 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes43 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes44 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes45 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes46 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes47 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes48 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes49 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes50 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes51 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes52 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes53 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes54 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes55 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes56 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes57 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes58 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes59 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes60 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes61 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes62 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes63 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes64 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes65 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes66 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes67 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes68 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes69 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes70 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes71 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes72 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes73 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes74 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes75 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes76 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes77 = new Grapes(img5, random(0, 850), 0, 70, 75);
  grapes78 = new Grapes(img5, random(0, 850), 0, 70, 75);



music.play();

}

function draw() {

  background(255);


var currentTime = millis();

//apple

if(currentTime > 3696) {
apple1.display();
apple1.move();
}

if(currentTime > 5018) {
apple2.display();
apple2.move();
}

if(currentTime > 5319) {
apple3.display();
apple3.move();
}

if(currentTime > 6590) {
apple4.display();
apple4.move();
}

if(currentTime > 6931) {
apple5.display();
apple5.move();
}

if(currentTime > 9226) {
apple6.display();
apple6.move();
}

if(currentTime > 9402) {
apple7.display();
apple7.move();
}

if(currentTime > 9606) {
apple8.display();
apple8.move();
}

if(currentTime > 9814) {
apple9.display();
apple9.move();
}

if(currentTime > 10061) {
apple10.display();
apple10.move();
}

if(currentTime > 11153) {
apple11.display();
apple11.move();
}

if(currentTime > 13478) {
apple12.display();
apple12.move();
}

if(currentTime > 15025) {
apple13.display();
apple13.move();
}

if(currentTime > 15847) {
apple14.display();
apple14.move();
}

if(currentTime > 16731) {
apple15.display();
apple15.move();
}

if(currentTime > 18713) {
apple16.display();
apple16.move();
}

if(currentTime > 19285) {
apple17.display();
apple17.move();
}

if(currentTime > 19478) {
apple18.display();
apple18.move();
}

if(currentTime > 19800) {
apple19.display();
apple19.move();
}

if(currentTime > 20452) {
apple20.display();
apple20.move();
}

if(currentTime > 20806) {
apple21.display();
apple21.move();
}

//banana

if(currentTime > 0) {
banana1.display();
banana1.move();
}

if(currentTime > 1235) {
banana2.display();
banana2.move();
}

if(currentTime > 2160) {
banana3.display();
banana3.move();
}

if(currentTime > 3838) {
banana4.display();
banana4.move();
}

if(currentTime > 4418) {
banana5.display();
banana5.move();
}

if(currentTime > 5336) {
banana6.display();
banana6.move();
}

if(currentTime > 6965) {
banana7.display();
banana7.move();
}

if(currentTime > 7590) {
banana8.display();
banana8.move();
}

if(currentTime > 8408) {
banana9.display();
banana9.move();
}

if(currentTime > 9234) {
banana10.display();
banana10.move();
}

if(currentTime > 10077) {
banana11.display();
banana11.move();
}

if(currentTime > 10881) {
banana12.display();
banana12.move();
}

if(currentTime > 11734) {
banana13.display();
banana13.move();
}

if(currentTime > 13479) {
banana14.display();
banana14.move();
}

if(currentTime > 14134) {
banana15.display();
banana15.move();
}

if(currentTime > 14988) {
banana16.display();
banana16.move();
}

if(currentTime > 16581) {
banana17.display();
banana17.move();
}

if(currentTime > 17374) {
banana18.display();
banana18.move();
}

if(currentTime > 18136) {
banana19.display();
banana19.move();
}

if(currentTime > 18993) {
banana20.display();
banana20.move();
}

if(currentTime > 19750) {
banana21.display();
banana21.move();
}

if(currentTime > 20664) {
banana22.display();
banana22.move();
}

if(currentTime > 21400) {
banana23.display();
banana23.move();
}

if(currentTime > 22865) {
banana24.display();
banana24.move();
}

if(currentTime > 23858) {
banana25.display();
banana25.move();
}

if(currentTime > 24472) {
banana26.display();
banana26.move();
}

if(currentTime > 25203) {
banana27.display();
banana27.move();
}

if(currentTime > 26037) {
banana28.display();
banana28.move();
}

if(currentTime > 26774) {
banana29.display();
banana29.move();
}

if(currentTime > 27589) {
banana30.display();
banana30.move();
}

if(currentTime > 28362) {
banana31.display();
banana31.move();
}

if(currentTime > 29111) {
banana32.display();
banana32.move();
}

if(currentTime > 30047) {
banana33.display();
banana33.move();
}

if(currentTime > 30903) {
banana34.display();
banana34.move();
}

if(currentTime > 31902) {
banana35.display();
banana35.move();
}

if(currentTime > 33359) {
banana36.display();
banana36.move();
}

//pear

if(currentTime > 21344) {
pear1.display();
pear1.move();
}

if(currentTime > 21615) {
pear2.display();
pear2.move();
}

if(currentTime > 21802) {
pear3.display();
pear3.move();
}

if(currentTime > 22139) {
pear4.display();
pear4.move();
}

if(currentTime > 22408) {
pear5.display();
pear5.move();
}

if(currentTime > 22614) {
pear6.display();
pear6.move();
}

if(currentTime > 22866) {
pear7.display();
pear7.move();
}

if(currentTime > 23095) {
pear8.display();
pear8.move();
}

if(currentTime > 23493) {
pear9.display();
pear9.move();
}

if(currentTime > 23632) {
pear10.display();
pear10.move();
}

if(currentTime > 23961) {
pear11.display();
pear11.move();
}

if(currentTime > 24201) {
pear12.display();
pear12.move();
}

if(currentTime > 24474) {
pear13.display();
pear13.move();
}

if(currentTime > 24658) {
pear14.display();
pear14.move();
}

if(currentTime > 24867) {
pear15.display();
pear15.move();
}

if(currentTime > 25136) {
pear16.display();
pear16.move();
}

if(currentTime > 25398) {
pear17.display();
pear17.move();
}

if(currentTime > 25626) {
pear18.display();
pear18.move();
}

if(currentTime > 25891) {
pear19.display();
pear19.move();
}

if(currentTime > 26238) {
pear20.display();
pear20.move();
}

if(currentTime > 26426) {
pear21.display();
pear21.move();
}

if(currentTime > 26681) {
pear22.display();
pear22.move();
}

if(currentTime > 26945) {
pear23.display();
pear23.move();
}

if(currentTime > 27139) {
pear24.display();
pear24.move();
}

if(currentTime > 27524) {
pear25.display();
pear25.move();
}

if(currentTime > 27718) {
pear26.display();
pear26.move();
}

if(currentTime > 27952) {
pear27.display();
pear27.move();
}

if(currentTime > 28308) {
pear28.display();
pear28.move();
}

if(currentTime > 28549) {
pear29.display();
pear29.move();
}

if(currentTime > 28716) {
pear30.display();
pear30.move();
}

if(currentTime > 29141) {
pear31.display();
pear31.move();
}

if(currentTime > 30836) {
pear32.display();
pear32.move();
}

if(currentTime > 33240) {
pear33.display();
pear33.move();
}

//orange

if(currentTime > 22866) {
orange1.display();
orange1.move();
}

if(currentTime > 24420) {
orange2.display();
orange2.move();
}

if(currentTime > 24771) {
orange3.display();
orange3.move();
}

if(currentTime > 25112) {
orange4.display();
orange4.move();
}

if(currentTime > 25604) {
orange5.display();
orange5.move();
}

if(currentTime > 25958) {
orange6.display();
orange6.move();
}

if(currentTime > 27715) {
orange7.display();
orange7.move();
}

if(currentTime > 28469) {
orange8.display();
orange8.move();
}

if(currentTime > 29154) {
orange9.display();
orange9.move();
}

if(currentTime > 29425) {
orange10.display();
orange10.move();
}

if(currentTime > 29670) {
orange11.display();
orange11.move();
}

if(currentTime > 30001) {
orange12.display();
orange12.move();
}

if(currentTime > 30243) {
orange13.display();
orange13.move();
}

if(currentTime > 30513) {
orange14.display();
orange14.move();
}

if(currentTime > 30840) {
orange15.display();
orange15.move();
}

if(currentTime > 31128) {
orange16.display();
orange16.move();
}

if(currentTime > 31464) {
orange17.display();
orange17.move();
}

if(currentTime > 31842) {
orange18.display();
orange18.move();
}

if(currentTime > 32228) {
orange19.display();
orange19.move();
}

if(currentTime > 32577) {
orange20.display();
orange20.move();
}

if(currentTime > 33246) {
orange21.display();
orange21.move();
}

//grapes

if(currentTime > 0) {
grapes1.display();
grapes1.move();
}

if(currentTime > 0631) {
grapes2.display();
grapes2.move();
}

if(currentTime > 0898) {
grapes3.display();
grapes3.move();
}

if(currentTime > 1168) {
grapes4.display();
grapes4.move();
}

if(currentTime > 1404) {
grapes5.display();
grapes5.move();
}

if(currentTime > 1649) {
grapes6.display();
grapes6.move();
}

if(currentTime > 1982) {
grapes7.display();
grapes7.move();
}

if(currentTime > 2202) {
grapes8.display();
grapes8.move();
}

if(currentTime > 2481) {
grapes9.display();
grapes9.move();
}

if(currentTime > 2725) {
grapes10.display();
grapes10.move();
}

if(currentTime > 2954) {
grapes11.display();
grapes11.move();
}

if(currentTime > 3268) {
grapes12.display();
grapes12.move();
}

if(currentTime > 3496) {
grapes13.display();
grapes13.move();
}

if(currentTime > 3829) {
grapes14.display();
grapes14.move();
}

if(currentTime > 4105) {
grapes15.display();
grapes15.move();
}

if(currentTime > 4350) {
grapes16.display();
grapes16.move();
}

if(currentTime > 4628) {
grapes17.display();
grapes17.move();
}

if(currentTime > 4895) {
grapes18.display();
grapes18.move();
}

if(currentTime > 5134) {
grapes19.display();
grapes19.move();
}

if(currentTime > 5469) {
grapes20.display();
grapes20.move();
}

if(currentTime > 5711) {
grapes21.display();
grapes21.move();
}

if(currentTime > 6006) {
grapes22.display();
grapes22.move();
}

if(currentTime > 6225) {
grapes23.display();
grapes23.move();
}

if(currentTime > 6456) {
grapes24.display();
grapes24.move();
}

if(currentTime > 6776) {
grapes25.display();
grapes25.move();
}

if(currentTime > 7095) {
grapes26.display();
grapes26.move();
}

if(currentTime > 7339) {
grapes27.display();
grapes27.move();
}

if(currentTime > 7555) {
grapes28.display();
grapes28.move();
}

if(currentTime > 7872) {
grapes29.display();
grapes29.move();
}

if(currentTime > 8130) {
grapes30.display();
grapes30.move();
}

if(currentTime > 8402) {
grapes31.display();
grapes31.move();
}

if(currentTime > 8702) {
grapes32.display();
grapes32.move();
}

if(currentTime > 8948) {
grapes33.display();
grapes33.move();
}

if(currentTime > 9211) {
grapes34.display();
grapes34.move();
}

if(currentTime > 9465) {
grapes35.display();
grapes35.move();
}

if(currentTime > 9727) {
grapes36.display();
grapes36.move();
}

if(currentTime > 10045) {
grapes37.display();
grapes37.move();
}

if(currentTime > 10372) {
grapes38.display();
grapes38.move();
}

if(currentTime > 10541) {
grapes39.display();
grapes39.move();
}

if(currentTime > 10805) {
grapes40.display();
grapes40.move();
}

if(currentTime > 11103) {
grapes41.display();
grapes41.move();
}

if(currentTime > 11314) {
grapes42.display();
grapes42.move();
}

if(currentTime > 11649) {
grapes43.display();
grapes43.move();
}

if(currentTime > 11887) {
grapes44.display();
grapes44.move();
}

if(currentTime > 12151) {
grapes45.display();
grapes45.move();
}

if(currentTime > 12435) {
grapes46.display();
grapes46.move();
}

if(currentTime > 12678) {
grapes47.display();
grapes47.move();
}

if(currentTime > 12953) {
grapes48.display();
grapes48.move();
}

if(currentTime > 13206) {
grapes49.display();
grapes49.move();
}

if(currentTime > 13482) {
grapes50.display();
grapes50.move();
}

if(currentTime > 13801) {
grapes51.display();
grapes51.move();
}

if(currentTime > 14044) {
grapes52.display();
grapes52.move();
}

if(currentTime > 14350) {
grapes53.display();
grapes53.move();
}

if(currentTime > 14625) {
grapes54.display();
grapes54.move();
}

if(currentTime > 14887) {
grapes55.display();
grapes55.move();
}

if(currentTime > 15147) {
grapes56.display();
grapes56.move();
}

if(currentTime > 15439) {
grapes57.display();
grapes57.move();
}

if(currentTime > 15672) {
grapes58.display();
grapes58.move();
}

if(currentTime > 15934) {
grapes59.display();
grapes59.move();
}

if(currentTime > 16240) {
grapes60.display();
grapes60.move();
}

if(currentTime > 16494) {
grapes61.display();
grapes61.move();
}

if(currentTime > 16772) {
grapes62.display();
grapes62.move();
}

if(currentTime > 17025) {
grapes63.display();
grapes63.move();
}

if(currentTime > 17273) {
grapes64.display();
grapes64.move();
}

if(currentTime > 17620) {
grapes65.display();
grapes65.move();
}

if(currentTime > 17854) {
grapes66.display();
grapes66.move();
}

if(currentTime > 18110) {
grapes67.display();
grapes67.move();
}

if(currentTime > 18472) {
grapes68.display();
grapes68.move();
}

if(currentTime > 18735) {
grapes69.display();
grapes69.move();
}

if(currentTime > 19009) {
grapes70.display();
grapes70.move();
}

if(currentTime > 19333) {
grapes71.display();
grapes71.move();
}

if(currentTime > 19635) {
grapes72.display();
grapes72.move();
}

if(currentTime > 19843) {
grapes73.display();
grapes73.move();
}

if(currentTime > 20085) {
grapes74.display();
grapes74.move();
}

if(currentTime > 20425) {
grapes75.display();
grapes75.move();
}

if(currentTime > 20545) {
grapes76.display();
grapes76.move();
}

if(currentTime > 20888) {
grapes77.display();
grapes77.move();
}

if(currentTime > 21209) {
grapes78.display();
grapes78.move();
}

image(img6, mouseX - 300, 550, 500, 200);


}

function Apple(img, x, y, w, h) {
  this.xpos = x;
  this.ypos = y;
  this.width = w;
  this.height = h;
  this.fruitImage = img;


  this.move = function() {
    this.ypos += 2;
  };

  this.display = function() {
    image(this.fruitImage, this.xpos, this.ypos, this.width, this.height);
  };
}

function Banana(img, x, y, w, h) {
  this.xpos = x;
  this.ypos = y;
  this.width = w;
  this.height = h;
  this.fruitImage = img;


  this.move = function() {
    this.ypos += 2;
  };

  this.display = function() {
    image(this.fruitImage, this.xpos, this.ypos, this.width, this.height);
  };
}

function Pear(img, x, y, w, h) {
  this.xpos = x;
  this.ypos = y;
  this.width = w;
  this.height = h;
  this.fruitImage = img;


  this.move = function() {
    this.ypos += 2;
  };

  this.display = function() {
    image(this.fruitImage, this.xpos, this.ypos, this.width, this.height);
  };
}

function Grapes(img, x, y, w, h) {
  this.xpos = x;
  this.ypos = y;
  this.width = w;
  this.height = h;
  this.fruitImage = img;


  this.move = function() {
    this.ypos += 2;
  };

  this.display = function() {
    image(this.fruitImage, this.xpos, this.ypos, this.width, this.height);
  };
}

function Orange(img, x, y, w, h) {
  this.xpos = x;
  this.ypos = y;
  this.width = w;
  this.height = h;
  this.fruitImage = img;


  this.move = function() {
    this.ypos += 2;
  };

  this.display = function() {
    image(this.fruitImage, this.xpos, this.ypos, this.width, this.height);
  };
}
