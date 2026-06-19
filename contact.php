<?php
header('Content-Type: application/json');

// Database configuration
$servername = "localhost";
$username = "root"; // Default XAMPP username
$password = "";     // Default XAMPP password is empty
$dbname = "muniwilla_db";

// Create database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]);
    exit();
}

// Check if form is submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Retrieve and sanitize inputs
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';
    
    // Basic validation
    if (!empty($name) && !empty($email) && !empty($message)) {
        
        // Prepare statement to prevent SQL injection
        $stmt = $conn->prepare("INSERT INTO contact_messages (name, email, phone, message) VALUES (?, ?, ?, ?)");
        
        if ($stmt) {
            $stmt->bind_param("ssss", $name, $email, $phone, $message);
            
            if ($stmt->execute()) {
                // Success
                echo json_encode(["status" => "success", "message" => "Thank you for getting in touch! We have received your message and will get back to you shortly."]);
            } else {
                // Error on execution
                echo json_encode(["status" => "error", "message" => "Oops! Something went wrong while saving your message. Please try again later."]);
            }
            
            $stmt->close();
        } else {
             // Error preparing statement
             echo json_encode(["status" => "error", "message" => "Oops! Something went wrong with the database. Please try again later."]);
        }
        
    } else {
        // Missing required fields
        echo json_encode(["status" => "error", "message" => "Please fill out all the required fields (Name, Email, Message)."]);
    }
} else {
    // Redirect to home page if accessed directly
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}

// Close connection
$conn->close();
?>
