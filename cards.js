function createCard(cardData) {
  var cardTemplate = [
    '<div class="row mongo-items mt-4 mb-4">',
    '<div class="col-lg-12">',
    '<div class="card">',
    '<h3 class="card-header">How Dare They Take Our Money! <a class="saveArticle btn">Save Article</a></h3>',
    '<div class="card-body p-2">',
    cardData.Name || "No name provided",
    "</div></div></div></div>"
  ];

  // a jQuery node
  return $(cardTemplate.join(""));
}

/* <div class="row mongo-items">
            <div class="col-lg-12">
                <div class="card">
                    <h5 class="card-header">Featured</h5>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div> */

var data = [
  { Name: "Peter", Job: "Programmer" },
  { Name: "John", Job: "Programmer" },
  { Name: "Kevin", Job: "Scientist" }
];

var cards = $();
// Store all the card nodes
data.forEach(function(item, i) {
  cards = cards.add(createCard(item));
});

// Add them to the page... for instance the <body>
$(function() {
  $.get("/").then(data => {
    console.log(data);
  });
  //$(".container-fluid").append(cards);
});

$(document).on("click", ".saveArticle", removeCard);

function removeCard() {
  //remove card from DOM

  //Take the data
  //Save to the dom
  //Remove the Element
  $(this)
    .parents(".row")
    .remove();
}

function onLoad() {
  $.get("/api/articles/notSaved").then(data => {
    createCard(data);
  });
}

//clears the data out the db
function clear() {
  $.delete("/api/articles/deleteAll").then(response => {
    if (success) {
      //clear the DOM
      clearCards();
      createNoResultsView();
      //Then append new Elements
    }
  });
}

$(document).on("click", ".newArticles", newArticleScrape);

function newArticleScrape() {
  clearCards();
  onLoad();
}

//Clears the DOM
function clearCards() {
  $("container-fluid").empty();
}

//Function to create no results DOM
function createNoResultsView() {
  var cardTemplate = [
    '<div class="row mongo-items mt-4 mb-4">',
    '<div class="col-lg-12">',
    '<div class="card">',
    '<h3 class="card-header">What would you like to do? <a class="saveArticle">Save Article</a></h3>',
    '<div class="card-body p-2">',
    "<h4><a>Try Scraping New Articles</a></h4>",
    '<h4><a href="/savedArticles>Try Scraping New Articles</a></h4>',
    "</div></div></div></div>"
  ];

  $(cardTemplate.join(""));

  $(".container-fluid").append(cardTemplate);
}
