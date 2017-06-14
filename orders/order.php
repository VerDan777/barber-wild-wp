<?php

echo 'start<br>';

require('./mail/PHPMailerAutoload.php');
require_once('./mail/config.php');

$mail = new PHPMailer;

$mail->isSMTP();

try {
    $subject            = $_POST['subject'];
    $content            = $_POST['content'];

    $to                 = $__smtp['mailto'];
    $mail->Host         = $__smtp['host'];
    $mail->SMTPDebug    = $__smtp['debug'];
    $mail->SMTPAuth     = $__smtp['auth'];
    $mail->Port         = $__smtp['port'];
    $mail->Username     = $__smtp['username'];
    $mail->Password     = $__smtp['password'];

    $mail->AddReplyTo($__smtp['addreply'], $__smtp['nickname']);
    $mail->AddAddress($to);
    $mail->SetFrom($__smtp['addreply'], $__smtp['nickname']);

    $mail->isHTML(true);
    // $mail->Subject = "?utf-8?b?" . base64_encode(htmlspecialchars($subject));
    // $mail->Subject = "?utf-8?b?" . utf8_encode(htmlspecialchars($subject));
    $mail->Subject = utf8_encode(htmlspecialchars($subject));
    // $mail->Subject = utf8_encode($subject);
    $mail->Body = $content;
    // $mail->Subject = 'Ajax subject';
    // $mail->Body = 'Test content';
//   $mail->MsgHTML($content);
//   if($attach)  $mail->AddAttachment($attach);
    $mail->Send();

} catch(phpmailerException $e) {
    echo $e->errorMessage();
} catch(Exception $e) {
    echo $e->getMessage();
}

echo $subject . '<br>';
echo $content . '<br>';

echo 'end';

?>