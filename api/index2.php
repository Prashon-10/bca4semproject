<?php
require_once "connection.php";

$server = $_SERVER['REQUEST_METHOD'];

function getUser($conn)
{
    $sql = "SELECT * FROM users";
    $result = mysqli_query($conn, $sql);
    $users = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($users);
}

function addUser($conn)
{
    $name = $_POST['name'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $stmt = $conn->prepare("INSERT INTO users (name, email, address) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $address);
    if ($stmt->execute()) {
        echo "User added successfully";
    } else {
        echo "Error: data not added";
    }
    $stmt->close();
}

function deleteUser($conn)
{
    $myEntireBody = file_get_contents('php://input');
    $myBody = json_decode($myEntireBody);
    $id = $myBody->id;
    $stmt = $conn->prepare('DELETE FROM users WHERE id = ?');
    $stmt->bind_param('i', $id); // Fixed: Specify the parameter type 'i' for integer
    if ($stmt->execute()) {
        echo 'User Deleted Successfully.';
    } else {
        echo 'Error: Data not deleted.';
    }
    $stmt->close();
}

function updateUser()
{
    echo "Update data";
}

global $conn;

switch ($server) {
    case "GET":
        getUser($conn);
        break;
    case "POST":
        addUser($conn);
        break;
    case "DELETE":
        deleteUser($conn);
        break;
    case "PUT":
        updateUser();
        break;
    default:
        echo "Invalid request";
        break;
}