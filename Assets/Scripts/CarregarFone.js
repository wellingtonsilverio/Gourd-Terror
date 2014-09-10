#pragma strict
@script RequireComponent (AudioSource)

function Start () {

}

function Update () {
	if(audio.isPlaying){
		transform.Translate(0.045,0,0);
	}else{
		Application.LoadLevel("Menu");
	}
}