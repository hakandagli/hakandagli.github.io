<?php
if(isset($_POST['mailForm'])){
    $diger = 'MIME-Version: 1.0'."\r\n";
    $diger.='Content-type: text/html; charset=UTF-8'."\r\n";
    $adsoyad=$_POST['isim'];
    $mail=$_POST['mail'];
    $konu=$_POST['konu']; 
    $mesaj=$_POST['mesaj'];
    $kime ="webdeveloper@hakandagli.net";
    $icerik = "Gönderen: ".$adsoyad."<br/> E-posta:".$mail."<br/> Konu: ". $konu."<br/> Mesaj: ".$mesaj;
    $gonder=mail($kime,$konu,$icerik,$diger);
    if($gonder){
        Header("Location:index.html?durum=ok");
    }else{
        Header("Location:index.html?durum=no");
    }
}
?>