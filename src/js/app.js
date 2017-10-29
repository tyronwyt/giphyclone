
var app = {
  apiKey: "bHE29mcCF3FQmpOWEThQO3BFpu01SJZU",
  url: "https://api.giphy.com/v1/gifs/",
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

    // create parent gif div
    var div = document.createElement("div");

    // create image and place url and img src then append to parent div

    div.setAttribute("class", "gif");
    var img = document.createElement("img");
    img.setAttribute("src", gif.images.fixed_height.url);


    // create link div
    var linkContainer = document.createElement("div");
    linkContainer.setAttribute("class", "linkContainer");

    var gifUrl = document.createElement("a");
    gifUrl.setAttribute("href", gif.url);


    var p = document.createElement("p");
    p.innerHTML = gif.bitly_gif_url;

    gifUrl.append(p);

    linkContainer.append(gifUrl);
  


    div.append(img);
    div.append(linkContainer);
    // div.append(hoverDiv);
    app.container.append(div);


  }


}

app.init();
