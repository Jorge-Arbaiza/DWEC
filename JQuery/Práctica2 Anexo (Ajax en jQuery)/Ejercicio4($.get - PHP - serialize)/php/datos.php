<?php
	$user = $_GET['user'];
	$password = $_GET['password'];
	if($user == 'pepe' && $password== 'hola'){
		echo 'Usuario correcto';
	}else{
		echo 'Usuario Incorrecto';
	}
?>