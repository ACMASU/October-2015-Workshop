<script id="events-template" type="text/x-handlebars-template">
    <section class="event-list">
        {{#each events}}
        <div class="event">
            <div class="event-info">
                <h2>{{name}}</h2>

                <h3>{{datetime}}</h3>

                <p>{{description}}</p>
            </div>
            <div class="event-remove">
                <button class="pure-button" type="button" data-eventId="{{id}}">Remove</button>
            </div>
        </div>
        {{/each}}
    </section>
</script>
<section id="events">

</section>
<div id="add-event">
    <div class="event-input__container">
        <h2>Add Event</h2>

        <div class="event-input">
            <label for="name">Name: </label>
            <input id="name" type="text"/>
        </div>
        <div class="event-input">
            <label for="datetime">Date: </label>
            <input id="datetime" type="text"/>
        </div>
        <div class="event-input">
            <label for="description">Description: </label>
            <input id="description" type="text"/>
        </div>
    </div>
    <div class="add-event__button">
        <button id="add" class="pure-button" type="button">Add</button>
    </div>
</div>
