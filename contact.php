<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mobile = $_POST['mobile']
    $whatsapp = $_POST['whatsapp'];
    $email = $_POST['email'];
    $message = $_POST['message'];

$to = "rahulkatari99@gmail.com";
$subject = "HTML email";

$message = "
<html>
<head>
<title>HTML email</title>
</head>
<body>
<p>This email contains HTML Tags!</p>
<table>
<tr>
<th>Name</th>
<th>Mobile</th>
<th>Whatsapp</th>
<th>Email</th>
<th>Message</th>

</tr>
<tr>
<td>'$name'</td>
<td>'$mobile'</td>
<td>'$whatsapp'</td>
<td>'$email'</td>
<td>'$message'</td>
</tr>
</table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";



$result = @mail($to,$subject,$message,$headers);
}



?>