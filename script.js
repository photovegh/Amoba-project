let gameOver=1;
let jel= " ";
let i = 0;
let keres=true;
let talalat=0;
let ycoor=0;
let xcoor=0;
let player = [1];
player[0] = "X";
player[1] = "O";
let actualPlayer = 0;
let actualRound = 0;
let playerName = [1];
playerName[0]=("Tom");
playerName[1]=("Jerry")
let actualPlayerName = [3];
actualPlayerName[0] = ("Te vagy Tom   O            ");
actualPlayerName[1] = ("Te vagy Jerry X            ");
actualPlayerName[2] = ("Nem kattinthatsz ugyanarra!");
actualPlayerName[3] = ("A nyertes:                 ");
$("#pl0").text(playerName[0]);
$("#pl1").text(playerName[1]);
$("#gameGo").text(actualPlayerName[actualPlayer]);
//player field index (0 - 99) & felt�lt +
let data = [];
for (i = 0; i < 100; i++) {
  data.push("+");
}

// 10 x 10-es t�bla, (+1 mezo a sz�lekhez, vizsg�latn�l ne szaladjon ki a t�mbbol)
playGround = new Array(12);
for (i=0; i < playGround.length; ++i){
   playGround[i] = new Array(12);
	
   for (j=0; j<playGround[i].length; ++j){
      playGround[i][j]="+";
   }
}

//mezok felrajzol�sa, minden egyes elem kap k�l�n id-t -> b0,b1,b2... �s egy indexet
let index = 0;
for (index = 0; index < 100; index++) {
  $('#container').append(`<div class="box" id="b${index}" data-index="${index}"></div>`)
  //  (data-index=${index})  
}

//jQuery(document).ready(function(){

$('.box').click((event) => {

	if (gameOver==1){//click esem�ny kezel�se START
	
  let indexClicked = $(event.target).attr('data-index');
  let numberIndex = parseInt(indexClicked);
  console.log(numberIndex);
  console.log(data[numberIndex])
//**********************************************if start	
  if (data[numberIndex] == "+") {//ha a mezo m�g nem haszn�lt (+) felt�lt O vagy X

	  $("#gameGo").text(actualPlayerName[actualPlayer]);
    //console.log(actualPlayerName[actualPlayer]);
    data[numberIndex] = player[actualPlayer];// aktu�lis j�t�kos jele: X O
	console.log("elemsorsz�m: "+numberIndex);
// dimension koordin�t�k kisz�mol�sa MOD f�ggv�nnyel
	  xcoor=numberIndex % 10;
	  ycoor=((numberIndex-xcoor)/10);
	  xcoor++;
	  console.log("xcoor: "+xcoor);
	  ycoor++;
	  console.log("ycoor: "+ycoor);
//t�bla mezok  
	  
	  playGround[xcoor][ycoor]=data[numberIndex]//akt. j�t�kos jele elhelyez�se a t�bl�ba
	  
	  //console.log(data[numberIndex]);
    $('#clicked').text(data[numberIndex]);//teszthez haszn�lt kiirat�s k�pernyore
//aktu�lis j�t�kos kiirat�sa a k�pernyore
	  if (actualPlayer == 0) {
      $("#b" + numberIndex + ".box").css("background-color", "hotpink");
      $("#b" + numberIndex + ".box").text("X")
      actualRound++;
    }
    if (actualPlayer == 1) {
      $("#b" + numberIndex + ".box").css("background-color", "cornflowerblue");
      $("#b" + numberIndex + ".box").text("O")
      actualRound++;
    }
    actualPlayer = actualRound % 2; //az aktu�lis j�t�kos 0 vagy 1
  } else {//ha m�r felhaszn�lt a mezo figy. �zenet
    $("#gameGo").text(actualPlayerName[2]);
  }
	
//Tal�latviszg�lat ***********************************
	keres=true
	novel=1; //zero novel 2x talalja sajat magat !
	talalat=1;
	jel=data[numberIndex];
	console.log("jel. "+jel);
	  console.log("jel-jel: "+playGround[ycoor][xcoor+i]+" <---> "+jel+" szamlalo  "+novel+" novelt vizsgalando: "+(xcoor+novel));
	
	while (keres==true) {//tal�latvizsg�lat ciklus
//***********************************************************   keres ciklus start	
		
//--------------------------------------------------------------------------------		
///////keres jobbra xcoor+1 !!! teh�t balra tedd az elemet !!!		
		 while ((playGround[xcoor+novel][ycoor])==jel){
			 talalat++;
			 novel++;
			 if (talalat==5){
				 console.log("**************+++++++++++++******* HEUREKAAA *****");
				 gameOver=0;
			 }
		 }
		novel=1;
///////keres ballra xcoor-1
		    while ((playGround[xcoor-novel][ycoor])==jel){
		 talalat++;
			 novel++;
			 if (talalat==5){
				 console.log("**************+++++++++++++******* HEUREKAAA *****");
				 gameOver=0;
			 }
		 }	
		 console.log("talalat: "+talalat+"  keres: "+keres);
		 keres=false;
		 console.log("talalat: "+talalat+"  keres: "+keres);
		novel=1;
		talalat=1;
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------		
///////keres fugg fel ycoor+1
		 while ((playGround[xcoor][ycoor+novel])==jel){
			 talalat++;
			 novel++;
			 if (talalat==5){
				 console.log("**************+++++++++++++******* HEUREKAAA *****");
				 gameOver=0;
			 }
		 }
		novel=1;
///////keres fugg le ycoor-1
		    while ((playGround[xcoor][ycoor-novel])==jel){
		 talalat++;
			 novel++;
			 if (talalat==5){
				 console.log("**************+++++++++++++******* HEUREKAAA *****");
				 gameOver=0;
			 }
		 }	
		 console.log("talalat: "+talalat+"  keres: "+keres);
		 keres=false;
		 console.log("talalat: "+talalat+"  keres: "+keres);
		novel=1;
		talalat=1;
//--------------------------------------------------------------------------------	
//--------------------------------------------------------------------------------		
///////keres jobbra le
		 while ((playGround[xcoor+novel][ycoor-novel])==jel){
			 talalat++;
			 novel++;
			 if (talalat==5){
				 console.log("**************+++++++++++++******* HEUREKAAA *****");
				 gameOver=0;
			 }
		 }
		novel=1;
///////keres ballra fel
		    while ((playGround[xcoor-novel][ycoor+novel])==jel){
		 talalat++;
			 novel++;
			 if (talalat==5){
				 console.log("**************+++++++++++++******* HEUREKAAA *****")
			 }
		 }	
		 console.log("talalat: "+talalat+"  keres: "+keres);
		 keres=false;
		 console.log("talalat: "+talalat+"  keres: "+keres);
		novel=1;
		talalat=1;
//--------------------------------------------------------------------------------	
//--------------------------------------------------------------------------------		
///////keres ballra le	
		 while ((playGround[xcoor-novel][ycoor-novel])==jel){
			 talalat++;
			 novel++;
			 if (talalat==5){
				 console.log("**************+++++++++++++******* HEUREKAAA *****");
				 gameOver=0;
			 }
		 }
		novel=1;
///////keres jobbra fel
		    while ((playGround[xcoor+novel][ycoor+novel])==jel){
		 talalat++;
			 novel++;
			 if (talalat==5){
				 console.log("**************+++++++++++++******* HEUREKAAA *****");
				 gameOver=0;
			 }
		 }	
		 console.log("talalat: "+talalat+"  keres: "+keres);
		 keres=false;
		 console.log("talalat: "+talalat+"  keres: "+keres);
		novel=1;
		talalat=1;
//--------------------------------------------------------------------------------	
//***********************************************************   keres ciklus end	

	}//tal�latvizsg�lat ciklus
 
//***************************************************** if end
	
	}//click esem�ny kezel�se END
	
/////�s a gy�ztes !!!
	if(gameOver==0){
		$("#gameGo").text(actualPlayerName[3]+playerName[actualPlayer]);
		$("#newGame").click(newg);
		function newg(){location.reload();};
	}
})
