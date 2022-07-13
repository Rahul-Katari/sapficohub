<?php
if(isset($_POST['submit'])) {

$to = "rahulkatari99@gmail.com";
$name = $_POST['name'];
    $mobile = $_POST['mobile'];
    $whatsapp = $_POST['whatsapp'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = "email";

    $message = "name:" . $name . "\n"
    . "mobile:" . $mobile . "\n"
    . "whatsapp:" . $whatsapp . "\n"
    . "email:" . $email . "\n"
    . "message:" . $message . "\n";

    $headers = "From: " .$email;
 

    // php mailer function
    $result = mail($to, $subject, $message, $headers);

    if(result) {
        echo '<script> alert("successful");</script>';
    }
    else {
        echo '<script> alert("unsuccessful");</script>';

    }

}

?>