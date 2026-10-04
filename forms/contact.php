<?php
if(session_status()===PHP_SESSION_NONE){session_start();}
if($_SERVER['REQUEST_METHOD']!=='POST'){http_response_code(405);exit('Method not allowed.');}
$token=$_POST['csrf_token']??'';
if(empty($_SESSION['csrf_token'])||!hash_equals($_SESSION['csrf_token'],$token)){http_response_code(419);exit('Your session expired. Please return to the contact page and try again.');}
$name=trim($_POST['name']??'');
$phone=trim($_POST['phone']??'');
$email=trim($_POST['email']??'');
$subject=trim($_POST['subject']??'');
$message=trim($_POST['message']??'');
if($name===''||mb_strlen($name)>100||$phone===''||mb_strlen($phone)>30){http_response_code(400);exit('Please provide a valid name and phone number.');}
if($email!==''&&!filter_var($email,FILTER_VALIDATE_EMAIL)){http_response_code(400);exit('Please provide a valid email address.');}
if(mb_strlen($subject)>160||mb_strlen($message)>3000){http_response_code(400);exit('Please shorten the enquiry and try again.');}
// Production note: connect this validated payload to the practice SMTP/mail provider.
$_SESSION['form_sent']=true;
header('Location: ../contact.php?sent=1');exit;
