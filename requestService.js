hello = function()
{
// checked if this function getting called
console.log('Igonore : hello function is getting called on load');
hello2();
}
var listOfValidators = ['./dist/MyValidator','./dist/YourValidator'];
var hello2 = function()
{
    FetchAndExecuteValidators(ExecuteAfterValidators);   
}

var FetchAndExecuteValidators = function(callback)
{       

        for (var i = 0;i < listOfValidators.length;i++){
            require([listOfValidators[i]],function(myValidator ){
                var validator = new myValidator.Validator();
                actionHandlerResult = validator.Validate(request);
                    callback(actionHandlerResult);
            });
        }    
}


var result = [];
var ExecuteAfterValidators = function(actionHandlerResult)
{
    result.push(actionHandlerResult);
    if (result.length === listOfValidators.length){
    // I want the below code to be execute after all the validator code execution is done
        console.log(JSON.stringify(result));
    }
  
}





var request = 
{
    "workflowInstanceStatus":"active",
    "originator":"",
    "instanceFields":{
    "DTFGUID3": [
      {
        Value:"123",
        Display_Name:"Yes",
        "name": "Kittin",
        "system_name": "42",
        "DTFID": "DTFGUID3"
      },
      {
       Value:456,
       Display_Name:"Yes",
       Display_Name:"Yes",
       "name": "Mittin",
        "system_name": "42",
        "DTFID":"DTFGUID3"
      }],
      "DTFGUID2":[
      {
        Value:"456",
        Display_Name:"Yes",
        "name": "Fluffy",
        "system_name": "42",
        "DTFID": "DTFGUID2"
      }
    ],
    "DTFGUID1":[
      {
        Value:"456",
        Display_Name:"Yes",
        "name": "Fluffy",
        "system_name": "42",
        "DTFID": "DTFGUID1"
        
      }
    ]
    ,
    "favoriteNumber": 42,
    "favoriteWord": "Hello"
  }
  }
;