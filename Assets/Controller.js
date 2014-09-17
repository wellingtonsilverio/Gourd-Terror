#pragma strict

var velAndar = 10;

function Start () {

}

function Update () {
	if(TouchEsquerda.click == true){
		transform.Translate(velAndar,0,0);
	}
	if(TouchDireita.click == true){
		transform.Translate(velAndar*-1,0,0);
	}
	if(TouchCima.click == true){
		transform.Translate(0,velAndar,0);
	}
	if(TouchBaixo.click == true){
		transform.Translate(0,velAndar*-1,0);
	}

}