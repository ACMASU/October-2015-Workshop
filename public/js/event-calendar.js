$(document).ready(function () {

    var $template = $('#events-template');
    var $eventsDiv = $('#events');
    var $addEventDiv = $('#add-event');
    var template = Handlebars.compile($template.html());
    var $nameInput = $('#name');
    var $datetimeInput = $('#datetime');
    var $descriptionInput = $('#description');

    var id = 0;
    var event1 = new Event(
        "Team Tryouts",
        "2015-10-20",
        "Tryouts for the programming competition team."
    );

    event1.setId(newId());
    var event2 = new Event(
        "Halloween",
        "2015-10-31",
        "Spooky."
    );
    event2.setId(newId());
    var eventList = new EventList([
        event1,
        event2
    ]);


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

    $eventsDiv.on('click', '.event-remove button', function (e) {
        var id = $(this).data('eventid');
        eventList.removeEvent(id);
        render();
    });

    function newId() {
        return ++id;
    }

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

    function EventList(events) {
        var self = this;
        self.events = events;

        self.addEvent = function (event) {
            id++;
            event.setId(id);
            self.events.push(event);
            render();
        };

        self.removeEvent = function (id) {
            self.events = self.events.filter(function (event) {
                return id != event.id;
            });
            render();
        };


    }


    function render() {
        var context = {
            events: eventList.events
        };
        $eventsDiv.html(template(context));
    }

    render();

});
