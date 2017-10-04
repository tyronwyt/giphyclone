// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });
//
var app = {
  apiKey: "bHE29mcCF3FQmpOWEThQO3BFpu01SJZU",
  url: "http://api.giphy.com/v1/gifs/",
  limit: "&limit=9",

  container: document.getElementById('output'),
  searchBtn: document.getElementById('searchBtn'),
  searchInput: document.getElementById('searchInput'),



  init: function() {
    app.addEventListerners();
    app.search("trending");
  },


  addEventListerners: function(){
    app.searchBtn.addEventListener("click", function(){
      var query = app.searchInput.value;
      app.searchInput.value = "";
      app.search("search?q=" + query);
    })
  },

  search: function(search) {
    var searchTerm = app.url + search + "?&api_key=" + app.apiKey + app.limit;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", app.reqListener);
    oReq.open("GET", searchTerm);
    oReq.send();
  },


  reqListener: function() {
    var result = JSON.parse(this.responseText);
    app.container.innerHTML = "";
    result.data.map(function(gif){
      app.createCard(gif);
    })
  },

  createCard: function(gif){

    var div = document.createElement("div");
    div.setAttribute("class", "gif");
    var img = document.createElement("img");
    img.setAttribute("src", gif.images.fixed_height.url);
    div.append(img);
    app.container.append(div);
  }


}

app.init();



// search?q=big+cats

// var apiKey = "bHE29mcCF3FQmpOWEThQO3BFpu01SJZU";
// var url = "http://api.giphy.com/v1/gifs/trending?&api_key=" + apiKey + "&limit=9";
//
//
//
// function reqListener () {
//   var result = JSON.parse(this.responseText);
//   result.data.map(function(gif){
//     createCard(gif);
//   })
//
// }
//
// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", url);
// oReq.send();
//
//
//
// function createCard(gif){
//   console.log(gif);
//   var container = document.getElementById('output');
//   var div = document.createElement("div");
//   div.setAttribute("class", "gif");
//   var img = document.createElement("img");
//   img.setAttribute("src", gif.images.fixed_height.url);
//   div.append(img);
//   container.append(div);
// }
