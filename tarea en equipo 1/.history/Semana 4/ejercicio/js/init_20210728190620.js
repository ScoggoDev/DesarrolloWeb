const LIST_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";


var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
  document.getElementsByClassName("lds-ring").style.display = "block";

}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
  document.getElementsByClassName("lds-ring")[0].style.display = "none";
}

var getJSONData = function(url){
  showSpinner();
    var result = {};  
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
}
