
import CustomRouter from './custom-router';

import config from './config/environment';

var Router = CustomRouter.extend({
    location: config.locationType,
});

Router.map(function() {
    this.route("venue", {navLabel: "Venue", className: "glyphicon glyphicon-object-align-bottom"});

    this.route("talks", {navLabel: "Talks", className: "glyphicon glyphicon-user"});
});

export default Router;

