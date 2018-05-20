
saveRequest = function(){
    var result = [];
    FetchAndExecuteValidators(ProcessHandlerResult);   

}

var FetchAndExecuteValidators = function(callback){        
var listOfValidators = ['./MyValidator','./YourValidator'];  
//  getListOfValidator();
    for (var i = 0;i < listOfValidators.length;i++){
        require([listOfValidators[i]],function(myValidator ){
            var validator = new myValidator.Validator();
            actionHandlerResult = validator.Validate(request);
            callback(actionHandlerResult);
        });
    }    
}

var ProcessHandlerResult = function(actionHandlerResult){
    var result = [];
    result.push(JSON.stringify(actionHandlerResult));  
    console.log(result);     
}