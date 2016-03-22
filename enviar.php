<?php
require('correo/PHPMailerAutoload.php');


// DATOS  A CONFIGURAR
//$destinatario='dartecasocia@hotmail.com';
$destinatario='aguilaralvear@yahoo.es';
$dominios_autorizados=array('aguilaralvear.es');
//$archivos_autorizados=array('cursosgratuitos');


$dominio_referer = parse_url($_SERVER['HTTP_REFERER'], PHP_URL_HOST);
//error_log($dominio_referer);
if(!in_array($dominio_referer,$dominios_autorizados)){
	header("HTTP/1.0 404 Not Found");
}

$path_referer = parse_url($_SERVER['HTTP_REFERER'], PHP_URL_PATH);
//error_log($path_referer);
if(!in_array($path_referer,$archivos_autorizados)){
        header("HTTP/1.0 404 Not Found");
}

$nombre = false;
if (isset($_POST["inputName3"]) && $_POST["inputName3"]) {
        $nombre = filter_input(INPUT_POST, 'inputName3', FILTER_SANITIZE_STRING);
}

$correo_usuario = false;
if (isset($_POST["inputEmail3"]) && $_POST["inputEmail3"]) {
	$correo_usuario = filter_input(INPUT_POST, 'inputEmail3', FILTER_SANITIZE_EMAIL);
}

$subjet = false;
if (isset($_POST["inputsubjet3"]) && $_POST["inputsubjet3"]) {
	$subjet = filter_input(INPUT_POST, 'inputsubjet3', FILTER_SANITIZE_STRING);
}

$mensaje = false;
if (isset($_POST["inputmessage3"]) && $_POST["inputmessage3"]) {
	$mensaje = filter_input(INPUT_POST, 'inputmessage3', FILTER_SANITIZE_STRING);
}



$mail = new PHPMailer;

// Datos del sistema
$mail->isSMTP();
$mail->Host = 'smtp.1and1.es';
$mail->SMTPAuth = true;
$mail->Username = 'sistema@aguilaralvear.es';
$mail->Password = 'yGp-2cf-GDw-s6K';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

// Datos del correo
$mail->setFrom($correo_usuario);
$mail->addAddress($destinatario);
$mail->addReplyTo($correo_usuario);

$mail->Subject = $subjet;
$mail->Body    = 'Nombre: '.$nombre."\n\n".'Correo-e: '.$correo_usuario."\n\n".'Asunto: '.$subjet."\n\n".'Mensaje: '.$mensaje;

if(!$mail->send()) {
	header('Location: error_correo.html');
} else {
	header('Location: gracias.html');
}
