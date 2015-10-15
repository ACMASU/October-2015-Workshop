<?php

class Event implements Model
{
    protected $name, $datetime, $description;

    public static function all(){
        $result = Database::getInstance()->query('SELECT * FROM events');
        return $result->fetchAll(PDO::FETCH_ASSOC);
    }

    public function __construct($name, $datetime, $description)
    {
        $this->name = $name;
        $this->datetime = $datetime;
        $this->description = $description;
    }

    public function save()
    {
        $statement = 'INSERT INTO events (NAME, DATE, DESCRIPTION) VALUES (:name, :date, :description)';
        try {
            $prepared = $database->prepare($statement);
            $prepared->bindParam(':name', $this->name);
            $prepared->bindParam(':date', $this->datetime);
            $prepared->bindParam(':description', $this->description);
            $prepared->execute();
        } catch(PDOException $e){
            die(print($e->getMessage()));
        }
    }

    public function toJSON()
    {
        $props = (object) array(
            'name' => $this->name,
            'datetime' => $this->datetime,
            'description' =>$this->description);
        return json_encode($props);
    }
}