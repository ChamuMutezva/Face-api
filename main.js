let picImage = document.getElementById("urlID");
console.log(picImage.innerHTML);


var initObject = {
    method: 'POST',
    headers: new Headers(),
    mode: 'cors',
    body: "{}"
}

//creates a new request object using an URL and an init object
var request = new Request(picImage.value, initObject);

//fetch() method used with a request
fetch(request).then(function (result) { //result contains a Response object
    return result.json()
    //returns a Promise containing JSON data extracted from the Response object
}).then(function (result) {
    console.log(result);
    //logs Object {id: 101}
}).catch(function (err) {
    console.log(err);
});