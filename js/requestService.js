var result = [];

saveRequest = function(){
    FetchAndExecuteValidators().then(function(result){
        console.error(result);
        //Process Handler Result
        getListOfValidator().then((result)=> {
            console.log(result);
        });
    });
};


var FetchAndExecuteValidators = function(){  
    return new Promise ((resolve,reject) =>{
        var listOfValidators = ['./MyValidator','./YourValidator'];  
        for (var i = 0;i < listOfValidators.length;i++){
            require([listOfValidators[i]],function(myValidator){
                var validator = new myValidator.Validator();
                actionHandlerResult = validator.Validate(request);
                ProcessHandlerResult(actionHandlerResult,resolve);
            });
        };
    });
};

var ProcessHandlerResult = function(actionHandlerResult,resolve){    
    result.push(JSON.stringify(actionHandlerResult));  
    if (result.length % 2 === 0)
    resolve(result);
};