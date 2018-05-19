define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Validator = (function () {
        function Validator() {
            this.name = 'MyValidator';
        }
        Validator.prototype.Validate = function (requestData) {
            console.log('Ignore  ' + this.name + ' is getting called');
            var documentDTO = requestData.instanceFields;
            var id1 = documentDTO['DTFGUID1'];
            var id2 = documentDTO['DTFGUID2'];
            if (id1[0].Value === id2[0].Value) {
                console.log("Validation Successfull");
            }
            return this.name + "'s result";
        };
        return Validator;
    }());
    exports.Validator = Validator;
});
