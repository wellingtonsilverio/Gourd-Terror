#pragma strict

var btnTexture : Texture;

function Start () {

}

function Update () {
	if(Input.GetKeyDown(KeyCode.Escape)){
		Application.Quit();
	}
}