<?php
    header('Access-Control-Allow-Methods: GET, POST');  
    include("functions.php");
    if(isset($_POST['ime_hotela'])){
        $ime_hotela = $_POST['ime_hotela'];
        addHotel($ime_hotela);
    }
?>