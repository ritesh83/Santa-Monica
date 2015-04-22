import Ember from 'ember';

var moduleNavigation = Ember.Object.create();
var route = Ember.RouterDSL.prototype.route;

Ember.RouterDSL.prototype.route = function(name, options) {

    if(typeof options === "object" && options['navLabel'] && options['className']) {
        var navObj = Ember.Object.create();
        navObj.setProperties({
            label: options['navLabel'],
            route: name,
            className: options['className']
        });

        moduleNavigation.set(name, navObj);
    }

    route.apply(this, arguments);
};

var Router = Ember.Router.extend({
    moduleNavigation: moduleNavigation
});

export default Router;
