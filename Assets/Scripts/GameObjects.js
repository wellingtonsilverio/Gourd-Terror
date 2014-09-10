#pragma strict

static var coletaLivro:boolean;
static var coletaFolhas:int;
var targetGuiText : GUIText;
var aparecer:int;

function Start () {
	coletaLivro = false;
	coletaFolhas = 0;
	aparecer = 0;
}

function Update () {
	if(aparecer < 10){
		targetGuiText.text = "Seja bem vindo ao Gourd, vamos aprender a jogar.";
		aparecer += 1;
	}else if(aparecer < 25){
		targetGuiText.text = "Nos cantos inferiores da tela ha dois controles!";
		aparecer += 1;
	}else if(aparecer < 40){
		targetGuiText.text = "Do lado direito, move a camera.";
		aparecer += 1;
	}else if(aparecer < 60){
		targetGuiText.text = "Do lado esquerdo, move o personagem.";
		aparecer += 1;
	}else if(aparecer < 65){
		targetGuiText.text = "Ache o Diario de ???????";
		aparecer += 1;
	}else if(coletaLivro){
		if(aparecer < 80){
			targetGuiText.text = "Voce coletou o Diario.";
			aparecer += 1;
		}else if(aparecer < 100){
			targetGuiText.text = "Falta 5 folhas no Diario, ache-as!";
			aparecer += 1;
		}else if(coletaFolhas <= 4 && aparecer < 200){
			targetGuiText.text = "Falta "+(5 - coletaFolhas)+" folhas no Diario, ache-as!";
		}else if(coletaFolhas >= 5 && aparecer < 200){
			targetGuiText.text = "Voce terminou de coletar as folhas!";
			aparecer += 1;
		}else{
			targetGuiText.text = "";
		}
	}
}