<?php

require_once('Database.php');

$result = $database->query('SELECT NAME, DATE, DESCRIPTION FROM events')->fetchAll();

foreach($result as $row){
    echo $row['NAME'] . "\t" . $row['DATE'] . "\t" . $row['DESCRIPTION'] . "\n";
}

echo '\n';

