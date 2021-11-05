document.getElementById('bar').addEventListener('click', function(){
	document.getElementById('bar').style.display = 'none'; // faz o bars desaparecer
	document.getElementById('menu-nav').style.display = 'block'; // faz o menu aparecer 
	document.getElementById('btc').style.display = 'block'; // faz o icon btc aparecer 
});
	// Agora é só fazer o reverso :))))
document.getElementById('btc').addEventListener('click', function(){
	document.getElementById('bar').style.display = 'block'; // faz o bars aparecer
	document.getElementById('menu-nav').style.display = 'none'; // faz o menu desaparecer 
	document.getElementById('btc').style.display = 'none'; // faz o icon btc desaparecer 
});