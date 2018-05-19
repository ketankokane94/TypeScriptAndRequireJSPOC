define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Validator = (function () {
        function Validator() {
            this.name = 'YourValidator';
        }
        Validator.prototype.Validate = function (requestData) {
            console.log('Ignore  ' + this.name + ' is getting called');
            console.log('Validation Successfull');
            return this.name + "'s result";
        };
        return Validator;
    }());
    exports.Validator = Validator;
});
