<script id="events-template" type="text/x-handlebars-template">
    <section class="event-list">
        {{#each events}}
        <div class="event">
            <h2>{{name}}</h2>
            <h3>{{datetime}}</h3>
            <p>{{description}}</p>
            <button class="remove" type="button" data-eventId="{{id}}">-</button>
        </div>
         {{/each}}
    </section>
    <fieldset class="add-event">
        <label for="name">Name: </label>
        <input id="name" type="text"/>
        <label for="datetime">Date: </label>
        <input id="datetime" type="text"/>
        <label for="description">Description: </label>
        <input id="description" type="textarea"/>
        <button id="add" type="button">+</button>
    </fieldset>
</script>
<section id="events">

</section>
