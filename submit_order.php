<?php
// Establish connection to the database
$conn = new mysqli("localhost", "root", "", "artiq_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form data exists and assign it to variables
$name = isset($_POST['name']) ? $_POST['name'] : '';
$product = isset($_POST['product']) ? $_POST['product'] : '';
$customization = isset($_POST['customization']) ? $_POST['customization'] : '';

// Proceed only if all required fields are filled out
if ($name && $product && $customization) {
    $sql = "INSERT INTO orders (name, product, customization) 
            VALUES ('$name', '$product', '$customization')";

    if ($conn->query($sql) === TRUE) {
        echo "<h2 style='color:#ff1493; text-align:center;'>Thank you for your order, $name! 💖</h2>";
        echo "<p style='text-align:center;'>We’ll contact you soon!</p>";
    } else {
        echo "Error: " . $conn->error;
    }
} else {
    echo "<p style='color:red; text-align:center;'>Please fill out all fields.</p>";
}

$conn->close();
?>
