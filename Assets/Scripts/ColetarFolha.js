﻿#pragma strict

function Start () {

}

function Update () {
	for(var i:int =0; i < Input.touches.Length; i++){
	
		var touch:Touch=Input.touches[i];
		var ray = Camera.main.ScreenPointToRay (Input.GetTouch(i).position);
		var hit:RaycastHit =new RaycastHit ();

		if(Physics.Raycast(ray,hit,1000)){
			if(hit.collider.gameObject ==this.gameObject){
				GameObjects.coletaFolhas += 1;
				Destroy (gameObject);
			}
		}
	}
}