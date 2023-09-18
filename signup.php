<?php
if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' && !empty($_POST['email'])) {

    $message = 'Email: ' . $_POST['email'] . ' ';
    $mailTo = "tatiana.chernova.work@gmail.com";
    $subject = "New sign up";
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: client" . $_POST['email'] . "\r\n";
    if (mail($mailTo, $subject, $message, $headers)) {
        echo "Thank you for your sign up!";
    } else {
        echo "Please try again";
    }
}

?>