<?php 

require_once('./libs/phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$vocation = $_POST['user_vocation'];
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$experience = $_POST['user_experience'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'andryushenka_vasilev_8484@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'fklg%#dsjq'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('andryushenka_vasilev_8484@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('seregagl1996@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name . ' оставил заявку, его телефон: ' .$phone. '<br>Почта этого пользователя: ' .$email '<br>Опыт работы: ' .$experience;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Произошла какая-то ошибка, попробуйте еще раз.';
} else {
    echo 'Сообщение отправлено!';
}
?>
