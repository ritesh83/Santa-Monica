import Ember from 'ember';

export default Ember.Controller.extend({
    init: function() {
        this._super();
         window.addEventListener("message", this, false);
    },

    handleEvent: function(event) {
        var message = event.data;

        if(typeof event.data === 'string') {
            message = JSON.parse(event.data);
        }

        if(message.source === "chrome") {
            this.transitionToRoute(message.data);
        }
    }
});
