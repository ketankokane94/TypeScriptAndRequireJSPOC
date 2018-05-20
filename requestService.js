saveRequest = function()
{
// checked if this function getting called
console.log('Igonore : hello function is getting called on load');
hello2();

// Hello Two is supposed to return ActionHandlerResult
}
var listOfValidators = ['./dist/MyValidator','./dist/YourValidator'];
var hello2 = function()
{ 
    FetchAndExecuteValidators(ExecuteAfterValidators);   
}

var FetchAndExecuteValidators = function(callback)
{       
    //  getListOfValidator();
        for (var i = 0;i < listOfValidators.length;i++){
            require([listOfValidators[i]],function(myValidator ){
                var validator = new myValidator.Validator();
                actionHandlerResult = validator.Validate(request);
                    callback(actionHandlerResult);
            });
        }    
}

var ExecuteAfterValidators = function(actionHandlerResult)
{
    result.push(actionHandlerResult);
    if (result.length === listOfValidators.length){
    // I want the below code to be execute after all the validator code execution is done
        console.log(JSON.stringify(result));
    }
  
}

var getListOfValidator = function()
{
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://my-json-server.typicode.com/ketankokane94/TypeScriptAndRequireJSPOC/validators", true);
  xhttp.send();
  xhttp.onload = function()
  {
    console.log(JSON.stringify(xhttp.responseText));
  }
}

var result = [];

