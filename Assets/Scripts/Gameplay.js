#pragma strict

var Sol : GameObject;

function Start () {

}

function Update () {
	if(Input.GetKeyDown(KeyCode.Escape)){
		Application.LoadLevel("Menu");
	}
	
	if(Sol.transform.position.y < 1340){
		Sol.transform.Translate(0,0.01,0);
	}
	
}