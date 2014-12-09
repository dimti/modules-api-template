YUI.add('inner-common', function (Y) {
    var Lang = Y.Lang,
        getCN = Y.ClassNameManager.getClassName;

    function InnerCommon() {
        InnerCommon.superclass.constructor.apply(this, arguments);
    }

    InnerCommon.NAME = 'inner-common';
    InnerCommon.prototype = {
        _next: function () {

        },
        _execute: function (next) {
            var
                self = this
                ;
            next();
        }
    };
    Y.namespace("MyApp").InnerCommon = Y.extend(InnerCommon, Y.MyApp.ModulesApi, InnerCommon.prototype);
}, '0.0.1', {
    requires: ['']
});
