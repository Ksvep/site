<?php
$phone=$_POST['phone'];
$backurl="http://ugcran.ru/index.html";

// На случай если какая-то строка письма длиннее 70 символов мы используем wordwrap()

$msgp=" Телефон: $phone";
mail('southerncccompan@gmail.com', 'My Subject', $msgp);

print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 0); 
//--></script> 
<p>Сообщение отправлено! Подождите, сейчас вы будете перенаправлены на главную страницу...</p>";  
exit;
?>