//fetch(destinationURL, configurationObject);

////The `configurationObject` contains three core components that are needed for
//standard POST requests: the HTTP verb, the headers, and the body.


////const configurationObject = {
  //  //method: "POST",
  //  headers: {
  ////    "Content-Type": "application/json",
  //    //"Accept": "application/json"
  //  },
 //   body: JSON.stringify({
    //dogName: "Byron",
    //dogBreed: "Poodle",
  //}),
 // };
 // fetch("http://localhost:3000/dogs", configurationObject);




// Add your code here

const configObject = {
        
  method: "POST", 
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json"
  }, 
  body: JSON.stringify({
    name: "Steve",
    email: "steve@steve.com"
  }),
}

 function submitData(name, email){

      return fetch("http://localhost:3000/users", configObject)

      .then(function (response) {
        return response.json()
      } )
      .then(function (object) {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch(function (error) {
        document.body.innerHTML = error.message
      } )
    }
     
 