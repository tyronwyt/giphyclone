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
    console.log(this.responseText);
    var result = JSON.parse(this.responseText);
    app.container.innerHTML = "";
    result.data.map(function(gif){
      app.createCard(gif);
    })
  },

  createCard: function(gif){
    var hoverDiv = document.createElement("div");
    hoverDiv.setAttribute("class", "hover");
    hoverDiv.innerHTML = '<i class="fa fa-clipboard" aria-hidden="true"></i>';

    var div = document.createElement("div");
    div.setAttribute("class", "gif");
    var img = document.createElement("img");
    img.setAttribute("src", gif.images.fixed_height.url);
    div.append(img);
    div.append(hoverDiv);
    app.container.append(div);
  }


}

app.init();
