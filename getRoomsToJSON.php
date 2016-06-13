<?php 
$aVar = mysqli_connect('localhost','root','','methotels');
$sql=mysqli_query($aVar, "select * from sobe"); 

$response = array();
$sobe = array();
$result=mysqli_query($aVar, "select * from sobe" );
while($row=mysqli_fetch_array($result)) 
{ 
    $id=$row['id'];
    $ime=$row['ime_sobe']; 
    $broj_kvadrata=$row['broj_kvadrata'];
    $broj_kreveta=$row['broj_kreveta'];

    $sobe[] = array('id'=> $id,'ime_sobe'=> $ime, 'broj_kvadrata'=> $broj_kvadrata, 'broj_kreveta'=> $broj_kreveta);

} 


$fp = fopen('results.json', 'w');
fwrite($fp, json_encode($sobe));
fclose($fp);
?> 