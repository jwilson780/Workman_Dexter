<?php

//Basically just validating it
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
//Got name and other class level vars
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
	
// Create the email and send the message
$to = 'jakewilson780@gmail.com'; 
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from Workman Dexter.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$headers = "From: noreply@yourdomain.com\n"; 
$headers .= "Reply-To: $email_address";	
//sending the message
mail($to,$email_subject,$email_body,$headers);
return true;			
?>