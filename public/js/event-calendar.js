$(document).ready(function () {

    /* Constructor for individual event */
    function Event(name, datetime, description) {
        var self = this;

        self.setName = function (name) {
            self.name = name;
        };

        self.setDatetime = function (datetime) {
            var date = new Date(Date.parse(datetime));
            if (date != "Invalid Date") {
                self.datetime = date.toDateString();
                self.dateObj = date;
            } else {
                throw "Invalid date."
            }
        };

        self.setDescription = function (description) {
            self.description = description;
        };

        self.setId = function (id) {
            self.id = id;
        };

        self.setName(name);
        self.setDatetime(datetime);
        self.setDescription(description);
    }

    /* Constructor for list of events */
    function EventList(events) {
        var self = this;
        self.events = [];

        // Initializing ID for events
        var id = 0;

        self.addEvent = function (event) {
            id++;
            event.setId(id);
            self.events.push(event);
        };

        self.removeEvent = function (id) {
            self.events = self.events.filter(function (event) {
                return id != event.id;
            });
        };

        self.sort = function () {
            self.events.sort(function (event1, event2) {
                return event2.dateObj < event1.dateObj;
            });
        };

        events.forEach(function (event) {
            self.addEvent(event);
        })
    }

    /* Cache DOM */
    // Template for events list
    var $template = $('#events-template');
    var template = Handlebars.compile($template.html());
    var $eventsDiv = $('#events');

    // Section for adding new events
    var $addEventDiv = $('#add-event');
    var $nameInput = $('#name');
    var $datetimeInput = $('#datetime');
    var $descriptionInput = $('#description');

    /* Creating initial events to display */
    var event1 = new Event(
        "Team Tryouts",
        "2015-10-20",
        "Tryouts for the programming competition team."
    );

    var event2 = new Event(
        "Halloween",
        "2015-10-31",
        "Spooky."
    );

    var eventList = new EventList([
        event1,
        event2
    ]);

    /* Event handlers */
    // Handler for adding new events 
    $addEventDiv.on('click', 'button#add', function (e) {
        var name = $nameInput.val();
        var datetime = $datetimeInput.val();
        var description = $descriptionInput.val();

        try {
            var event = new Event(name, datetime, description);
            eventList.addEvent(event)
            $nameInput.val('');
            $datetimeInput.val('');
            $descriptionInput.val('');
            render();
        } catch (error) {
            alert(error);
            $datetimeInput.get(0).focus();
        }
    });

    // Handler for removing individual events 
    $eventsDiv.on('click', '.event-remove button', function (e) {
        var id = $(this).data('eventid');
        eventList.removeEvent(id);
        render();
    });


    /* Render the page with the current data */
    function render() {
        eventList.sort();
        var context = {
            events: eventList.events
        };
        $eventsDiv.html(template(context));
    }

    /* Initial render */
    render();

});
