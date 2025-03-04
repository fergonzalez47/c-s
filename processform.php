<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Requiere el autoload generado por Composer
require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $businessName = $_POST["businessName"];
    $description = $_POST["description"];

    // Crear una instancia de PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configurar servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Cambia esto si usas otro proveedor de correo
        $mail->SMTPAuth = true;
        $mail->Username = 'tu-email@gmail.com'; // Tu correo
        $mail->Password = 'tu-contraseña'; // Tu contraseña de correo (mejor usar App Passwords de Gmail)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Configurar el remitente y destinatario
        $mail->setFrom('tu-email@gmail.com', 'Cleaning Solution');
        $mail->addAddress('destinatario@email.com'); // El correo donde se enviarán los formularios

        // Contenido del correo
        $mail->isHTML(true);
        $mail->Subject = 'New contact from CS Website';
        $mail->Body    = "
            <h2>New message of contact</h2>
            <p><b>Name:</b> $firstName $lastName</p>
            <p><b>Email:</b> $email</p>
            <p><b>Phone:</b> $phone</p>
            <p><b>Business:</b> $businessName</p>
            <p><b>Description:</b> $description</p>
        ";

        // Enviar el correo
        $mail->send();
        echo 'Mensaje enviado correctamente.';
    } catch (Exception $e) {
        echo "Error al enviar: {$mail->ErrorInfo}";
    }
} else {
    echo "Acceso no permitido.";
}
