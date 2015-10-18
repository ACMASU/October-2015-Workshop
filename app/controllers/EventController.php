<?php

/**
 * API for events
 */
class EventController extends Controller
{
    /**
     * Fetches events
     */
    function index()
    {
        $events = Event::all();
        header('Content-type:application/json');
        print(json_encode($events));
    }

    /**
     * Creates new event
     */
    function store($name, $datetime, $description)
    {

    }

    /**
     *  Replaces existing event with new event
     */
    function update($id, $datetime, $description)
    {

    }

    /**
     * Deletes existing event
     */
    function destroy($id)
    {

    }

}