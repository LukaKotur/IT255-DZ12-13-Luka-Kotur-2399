<?php
    header('Access-Control-Allow-Methods: GET, POST');  
    include("functions.php");
    if(isset($_POST['ime_sobe']) && isset($_POST['broj_kvadrata']) && isset($_POST['broj_kreveta'])){
        $ime_sobe = $_POST['ime_sobe'];
        $broj_kvadrata = intval($_POST['broj_kvadrata']);
        $broj_kreveta = intval($_POST['broj_kreveta']);
        addRoom($ime_sobe, $broj_kvadrata, $broj_kreveta);
    }
?>