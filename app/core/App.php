<?php

class App
{

    protected $controller = 'HomeController';

    protected $method = 'index';

    protected $params = [];

    protected $view = ['view' => 'home/index', 'data' => []];

    public function __construct()
    {

        if (file_exists('../app/controllers/' . $_GET['controller'] . 'Controller.php')) {
            $this->controller = $_GET['controller'] . 'Controller';
        }

        require_once '../app/controllers/' . $this->controller . '.php';

        $this->controller = new $this->controller;

        if (isset($_GET['method'])) {
            if (method_exists($this->controller, $_GET['method'])){
                $this->method = $_GET['method'];
            }
        }

        $this->params = $_GET['params'] ? array_values($_GET['params']) : [];

        if ($_SERVER['REQUEST_METHOD'] == 'POST'){
            $this->params['post'] = $_POST;
            $this->view = call_user_func([$this->controller, $this->method], $this->params);
        } else {
            $this->view = call_user_func_array([$this->controller, $this->method], $this->params);
        }


    }

    public function render(){
        $this->controller->view($this->view['view'], $this->view['data']);
    }

}


