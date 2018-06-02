var result = [];

save = function() {

    saveRequest().then(function(finalActionHandlerResult){
        console.log(finalActionHandlerResult);
    });

};

saveRequest = function(){
    return new Promise((resolve)=> {
        FetchAndExecuteValidators().then(function(result1){
            //console.error(result);
            // TODO: rename the below functio   n,  Process Handler Result
            getListOfValidator().then((result1)=> {
                //console.log(result1);
                resolve(result1);

            });
        });
});  
};


var FetchAndExecuteValidators = function(){  
    return new Promise ((resolve,reject) =>{
        var listOfValidators = ['dist/MyValidator','dist/YourValidator'];  
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