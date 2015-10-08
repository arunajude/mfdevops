<?php
$myemail = 'reports@datano.me';
if (isset($_POST['name'])) {
$name = strip_tags($_POST['txt_name']);
$email = strip_tags($_POST['txt_email']);
$link = strip_tags($_POST['txt_link']);
$location = strip_tags($_POST['txt_location']);
$price = strip_tags($_POST['txt_price']);
$comments = strip_tags($_POST['txt_comments']);
echo "<span class=\"alert alert-success\" >Your request has been received. Thanks! Here is what you submitted:</span><br><br>";
echo "<stong>Name:</strong> ".$name."<br>";	
echo "<stong>Email:</strong> ".$email."<br>";	
echo "<stong>Message:</strong> ".$message."<br>";
echo "<stong>Website:</strong> ".$link."<br>";
echo "<stong>Location:</strong> ".$location."<br>";
echo "<stong>Price:</strong> ".$price."<br>";
echo "<stong>Comments:</strong> ".$comments."<br>";

$to = $myemail;
$email_subject = "Contact form submission: $name";
$email_body = "You have received a new message. ".
" Here are the details:\n Name: $name \n ".
"Email: $email\n Website \n $link".
"Location: $message\n Price: $price \n Comments: $comments"
;
$headers = "From: $myemail\n";
$headers .= "Reply-To: $email";
mail($to,$email_subject,$email_body,$headers);
}?>