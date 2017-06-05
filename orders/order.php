<?php

echo 'start<br>';

// require('./mail/PHPMailerAutoload');
require_once('./mail/class.phpmailer.php');
require_once('./mail/config.php');

$mail = new PHPMailer;

$mail->IsSMTP();

try {
    $subject            = $_POST['subject'];
    $content            = $_POST['content'];

    $mail->Host         = $__smtp['host'];
    $mail->SMTPDebug    = $__smtp['debug'];

} catch(phpmailerException $e) {
    echo $e->errorMessage();
} catch(Exception $e) {
    echo $e->getMessage();
}

echo $subject . '<br>';
echo $content . '<br>';

echo 'end';

?>