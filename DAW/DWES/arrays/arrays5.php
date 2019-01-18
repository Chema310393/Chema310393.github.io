<?php
$continentes = [
    "Europa" => [
        "Francia" => [
            "Capital" => "Paris",
            "Bandera" => "francia.png"
        ],
        "Espana" => [
            "Capital" => "Madrid",
            "Bandera" => "espana.png"
        ]
    ],

    "Asia" => [
        "China" => [
            "Capital" => "Pekin",
            "Bandera" => "china.png"
        ],
        "Japon" => [
            "Capital" => "Tokio",
            "Bandera" => "japon.png"
        ]
    ]
];

foreach ($continentes as $keyContinente => $continente) {
    echo '<p>' . $keyContinente . '->';
    foreach ($continente as $keyPais => $pais) {
        echo '<p>' . $keyPais . '->';
        echo 'Capital = ' . $pais["Capital"] . ' Bandera = <img style="width: 150px; height:100px;" src="arrays/banderas/' . $pais["Bandera"] . '"/>';
        echo '</p>';
    }
    echo '</p>';
}

?>