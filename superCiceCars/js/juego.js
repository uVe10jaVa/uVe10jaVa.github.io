console.log("Jugando...");

//object.onkeypress=function(){myScript};
//object.addEventListener("keypress",myScript);

const SPEED=20;
const DISTANCIA=1000;

var posPlayer1=0;
var posPlayer2=0;
var posPlayer3=0;
var posPlayer4=0;
var jugando=true; //en c no existe, pero en js sí existen las variables booleanas

function inicializar(){

	var logo=document.getElementById("logo");
	//Alternativa del BIND1
	logo.onmouseover=function(){
		console.log("Entrando...");
	}	
	//ALTERNATIVA del BIND2
	logo.addEventListener("mouseleave",function(){
		console.log("Saliendo... ");
	});
}

function capturarPulsacion(tecla){
	//a minúscula -> player1
	//l minúscula -> player2
	console.log(tecla.key);

	//var ganador;

	if(jugando==true){
		if(tecla.key=='q' || tecla.key=='Q'){
			console.log("Mueve player1");
			posPlayer1=posPlayer1+SPEED;
			document.getElementById("player1").style.paddingLeft=posPlayer1+"px";
			if(posPlayer1>=DISTANCIA){
				//ganador=1;
				document.getElementById("campeon").innerHTML="El ganador es el Jugador 1 !! ";
				//document.getElementById("ap").play();
				jugando=false;
			}
		}
		if(tecla.key=='p' || tecla.key=='P'){
			console.log("Mueve player2");
			posPlayer2=posPlayer2+SPEED;
			document.getElementById("player2").style.paddingLeft=posPlayer2+"px";
			if(posPlayer2>=DISTANCIA){
				//ganador=2;
				document.getElementById("campeon").innerHTML="El ganador es el Jugador 2 !! ";
				//document.getElementById("ap").play();
				jugando=false;
			}
		}
		if(tecla.key=='z' || tecla.key=='Z'){
			console.log("Mueve player3");
			posPlayer3=posPlayer3+SPEED;
			document.getElementById("player3").style.paddingLeft=posPlayer3+"px";
			if(posPlayer3>=DISTANCIA){
				//ganador=3;
				document.getElementById("campeon").innerHTML="El ganador es el Jugador 3 !! ";
				//document.getElementById("ap").play();
				jugando=false;
			}
		}
		if(tecla.key=='m' || tecla.key=='M'){
			console.log("Mueve player4");
			posPlayer4=posPlayer4+SPEED;
			document.getElementById("player4").style.paddingLeft=posPlayer4+"px";
			if(posPlayer4>=DISTANCIA){
				//ganador=4;
				document.getElementById("campeon").innerHTML="El ganador es el Jugador 4 !! ";
				//document.getElementById("ap").play();
				jugando=false;
			}
		}
	}
	//console.log("El ganador es el player "+ganador);
	//alert("El ganador es el player "+ganador+"!!!!")
}

function zoom(idCoche){//podemos pasar el elemento entero 

	console.log("Haciendo Zoom");

	//esta línea de abajo se omitiría, porque ya tendríamos recogido el elemento
	var coche=document.getElementById("player"+idCoche);//Guardamos el 

	console.log(coche);//Nos muestra la etiqueta entera de la imagen

	coche.style.width="250px";// Nos agranda la imagen

}

function antizoom(idCoche){
	var coche=document.getElementById("player"+idCoche);//Guardamos el 
	coche.style.width="150px";// Nos agranda la imagen	
}