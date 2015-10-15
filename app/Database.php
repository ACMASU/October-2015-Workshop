<?php

class Database
{
    private static $connection;

    private function __construct(){
        try {
            self::$connection = new PDO('sqlite:/home/vagrant/Code/simple-event-calendar/database/EventsDatabase.db');
            self::$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        } catch
        (PDOException $e) {
            echo $e->getMessage();
        }
    }

    public static function getInstance()
    {
        if (self::$connection){
            return self::$connection;
        } else{
            new Database();
            return self::getInstance();
        }
    }

}
