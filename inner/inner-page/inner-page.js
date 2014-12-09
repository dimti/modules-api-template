YUI.add('inner-page', function (Y) {
    var Lang = Y.Lang,
        getCN = Y.ClassNameManager.getClassName;

    function InnerPage() {
        InnerPage.superclass.constructor.apply(this, arguments);
    }

    InnerPage.NAME = 'inner-page';
    InnerPage.prototype = {
        _next: function () {
            Y.use('inner-common', function (Y) {
                new Y.MyApp.InnerCommon();
            });
        },
        _execute: function (next) {
            var
                self = this
                ;
            switch (Y.config.routeName) {
                case 'route1':

                    next();
                    break;
                case 'route2':

                    next();
                    break;
                default:
                    next();
                    break;
            }
        }
    };
    Y.namespace("MyApp").InnerPage = Y.extend(InnerPage, Y.MyApp.ModulesApi, InnerPage.prototype);
}, '0.0.1', {
    requires: ['gallery-scroll-nav', 'node', 'event', 'anim', 'plugin', 'base']
});
