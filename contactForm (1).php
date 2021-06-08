<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "rodrigoida@rodrigoida.com.br";

    $headers = "From:".$mailFrom;

    $txt = " Você recebeu email de ".$name."\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: https://www.rodrigoida.com.br/");
};