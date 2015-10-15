<?php

class HomeController extends Controller
{

    public function index()
    {
        return ['view' => 'home/index', 'data' => []];
    }

}
