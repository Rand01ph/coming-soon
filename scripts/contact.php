<?php
require "vendor/autoload.php";

use Postmark\PostmarkClient;

/*
$_SERVER['REQUEST_METHOD'] = "POST";
$_POST['contactemail'] = 'y@y.com';
$_POST['contactwebsite'] = 'y.com';
$_POST['contactmessage'] = 'hello from wyx';
$_POST['contactname'] = "yx";
*/

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if(!empty($_POST['contactname']) && !empty($_POST['contactemail']) && !empty($_POST['contactmessage'])) {


        $client = new PostmarkClient("07112fae-9a27-469d-9327-0d1c02d1cb5e");

        $body = "Name: {$_POST['contactname']}\n\nEmail: {$_POST['contactemail']}\n\nWebsite: {$_POST['contactwebsite']}\n\nMessage: {$_POST['contactmessage']}";

//	function sendEmail($from, $to, $subject, $htmlBody = NULL, $textBody = NULL,
//		$tag = NULL, $trackOpens = true, $replyTo = NULL, $cc = NULL, $bcc = NULL,
//		$headers = NULL, $attachments = NULL) {

        $sendResult = $client->sendEmail(
            "hi@songguokeji.com", 
            "account@songguokeji.com", 
            "Hello from Coming soon!",
            NULL,
            $body,  
            NULL,
            TRUE,
            $_POST['contactemail']
        );

    }
}
