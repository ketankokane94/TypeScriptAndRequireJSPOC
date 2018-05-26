var getListOfValidator = function(){
  return new Promise((resolve)=>{
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://my-json-server.typicode.com/ketankokane94/TypeScriptAndRequireJSPOC/validators", true);
    xhttp.send();
    xhttp.onload = function(){
      resolve(xhttp.responseText);
    }
  });
};