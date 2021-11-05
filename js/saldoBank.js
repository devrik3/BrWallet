var saldo = 'R$43.324,00';

document.getElementById('hide').addEventListener('click', function(){
	document.getElementById('hide').style.display = 'none'; 
	document.getElementById('saldoBank').innerHTML = 'R$******'; 
	document.getElementById('view').style.display = 'block';
	document.getElementById('percent').style.display = 'none';
});
	// Agora é só fazer o reverso :))))
document.getElementById('view').addEventListener('click', function(){
	document.getElementById('view').style.display = 'none';
	document.getElementById('saldoBank').innerHTML = saldo;
	document.getElementById('hide').style.display = 'block'; 
	document.getElementById('percent').style.display = 'block';
	//document.getElementById('menu-nav').style.display = 'none'; // faz o menu desaparecer 
});