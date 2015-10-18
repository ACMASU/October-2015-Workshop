$(document).ready(function () {

    var $template = $('#events-template');
    var $eventsDiv = $('#events');
    var template = Handlebars.compile($template.html());

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


    $eventsDiv.on('click', 'button#add', function (e) {
        var name = $('#name').val();
        var datetime = $('#datetime').val();
        var description = $('#description').val();

        var event = new Event(name, datetime, description);
        eventList.addEvent(event)
        render();
    });

    $eventsDiv.on('click', 'button.remove', function (e) {
        var id = $(this).data('eventid');
        eventList.removeEvent(id);
        render();
    });

    function newId(){
        return ++id;
    }

    function Event(name, datetime, description) {
        var self = this;
        self.name = name;
        self.datetime = datetime;
        self.description = description;

        self.setName = function (name) {
            self.name = name;
        };

        self.setDatetime = function (datetime) {
            self.datetime = datetime;
        };

        self.setDescription = function (description) {
            self.description = description;
        };

        self.setId = function (id) {
            self.id = id;
        };
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
        }
    }


    function render() {
        var context = {
            events: eventList.events
        };
        $eventsDiv.html(template(context));
    }

    render();

});
