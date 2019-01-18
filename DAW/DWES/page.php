<?php
//Si existe page en la url y no existe preformatted carga la página y el botón ver código
if(isset($_GET['page']) && !isset($_GET['preformatted'])){

    $page = $_GET['page'];
   
    echo '<div id="content">';
    echo "<div><a href='index.php?preformatted=true&page=".$page."'><button>Ver código</button></a></div><br>";
    include($page);
    
    echo '</div>';
}
//Si existen page y preformatted muestra el código de la página y el botón atrás.
else if(isset($_GET['page']) && isset($_GET['preformatted'])){
    $page = $_GET['page'];
    echo "<div><br><br><a href='index.php?page=".$page."'><button>Atrás</button></a></div>";

    highlight_file($page);

}
?>