<?php
// Enable CORS (Cross-Origin Resource Sharing) if needed, to allow requests from different origins
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Set the content type to JSON
header('Content-Type: application/json');

// Get the input data from the request
$data = json_decode(file_get_contents("php://input"));

// Check if data is correctly received
if ($data) {
    // Extract individual fields from the data object
    $first_name = $data->first_name;
    $last_name = $data->last_name;
    $email = $data->email;
    $password = $data->password;

    // Establish a connection to the MySQL database
    $con = mysqli_connect("localhost:3306", "root", "Jay*729852#", "loginregister");

    // Check if the connection was successful
    if (!$con) {
        die(json_encode(["Status" => "Error", "Message" => "Connection failed: " . mysqli_connect_error()]));
    }

    // Prepare an SQL statement for inserting data into the 'new_table'
    $sql = "INSERT INTO register (first_name, last_name, email, password) VALUES (?, ?, ?, ?)";

    // Initialize a prepared statement
    $stmt = mysqli_prepare($con, $sql);

    if ($stmt) {
        // Bind parameters to the prepared statement
        mysqli_stmt_bind_param($stmt, "ssss", $first_name, $last_name, $email, $password);

        // Execute the prepared statement
        if (mysqli_stmt_execute($stmt)) {
            $response = ["Status" => "Success"];
        } else {
            $response = ["Status" => "Error", "Message" => "Failed to insert data"];
        }

        // Close the prepared statement
        mysqli_stmt_close($stmt);
    } else {
        $response = ["Status" => "Error", "Message" => "Failed to prepare statement"];
    }

    // Close the database connection
    mysqli_close($con);
} else {
    $response = ["Status" => "Error", "Message" => "Invalid input"];
}

// Output the response as JSON
echo json_encode($response);
?>
