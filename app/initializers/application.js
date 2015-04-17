
export default {
    name: 'application',

    initialize: function(container) {
        var moduleNavObj = container.lookup('router:main').get('moduleNavigation');

        var message = {
            "type": "unity",
            "name": "nav-register",
            "data": moduleNavObj,
            "source": "module"
        };

        window.parent.postMessage(JSON.stringify(message), "*");
    }
};
