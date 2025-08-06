<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

require_once('../model/dataModel.php');

// Read JSON input
$rawData = file_get_contents("php://input");
$user = json_decode($rawData, true);

// Check for required fields
if (isset($user['userid']) && isset($user['name']) && isset($user['email'])) {
    insert($user);
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => "Missing required fields"]);
}
?>