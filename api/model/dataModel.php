<?php
require_once('dbconn.php');

function insert($user) {
    $conn = getConnection();

    if (!$conn) {
        die("Database connection failed. " . mysqli_connect_error());
    }

    $userid = mysqli_real_escape_string($conn, $user['userid']);
    $name = mysqli_real_escape_string($conn, $user['name']);
    $email = mysqli_real_escape_string($conn, $user['email']);

    $query = "INSERT INTO test (userid, name, email) VALUES ('$userid', '$name', '$email')";
    $data = mysqli_query($conn, $query);

    if (!$data) {
        error_log("Error: " . mysqli_error($conn));
    }

    mysqli_close($conn);
}
?>