YUI.add('inner', function (Y) {
    var Lang = Y.Lang,
        getCN = Y.ClassNameManager.getClassName;

    function Inner() {
        Inner.superclass.constructor.apply(this, arguments);
    }

    Inner.NAME = 'inner';
    Inner.prototype = {
        _next: function () {
            new Y.MyApp.InnerPage();
        },
        _execute: function (next) {
            var
                self
                ;
            next();
        }
    };
    Y.namespace("MyApp").Inner = Y.extend(Inner, Y.MyApp.ModulesApi, Inner.prototype);
}, '0.0.1', {
    requires: ['base', 'cookie']
});