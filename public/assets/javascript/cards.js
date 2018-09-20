function createCard(cardData) {
  var cardTemplate = [
    '<div class="row mongo-items mt-4 mb-4">',
    '<div class="col-lg-12">',
    '<div class="card" data-id="',
    cardData._id,
    '">',
    '<h4 class="card-header"><a href="',
    cardData.url,
    '">',
    cardData.headline,
    "</a>",
    '<a class="saveArticle btn">Save Article</a></h4>',
    '<div class="card-body p-2">',
    cardData.summary || "No name provided",
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
// data.forEach(function(item, i) {
//   cards = cards.add(createCard(item));
// });

// Add them to the page... for instance the <body>
$(function() {
  $.get("/api/").then(data => {
    data.forEach(function(item, i) {
      cards = cards.add(createCard(item));
    });
    $(".container-fluid").append(cards);
    console.log("Here");
    console.log(data);
  });
  //   $(".container-fluid").append(cards);
});

$(document).on("click", ".saveArticle", removeCard);

function removeCard() {
  //remove card from DOM
  let id = $(this)
    .parents(".row")
    .find(".card")
    .attr("data-id");
  //Take the data
  //Save to the dom
  //Remove the Element
  $.ajax({
    method: "PUT",
    url: "/api/updateSaved/" + id,
    data: { saved: true }
  }).then(response => console.log(response));
  $(this)
    .parents(".row")
    .remove();

  console.log($(".container-fluid").find(".row").length);
  if ($(".container-fluid").find(".row").length === 0) {
    //createNoResultsView();
    var noResults = $(createNoResultsView());
    // noResults.add(createNoResultsView());
    $(".container-fluid").append(noResults);
  }

  console.log(
    $(this)
      .parents(".row")
      .find("h4")
      .text()
  );

  console.log(
    $(this)
      .parents(".row")
      .find("div .card-body")
      .text()
  );
  console.log(
    $(this)
      .parents(".row")
      .find(".card")
      .attr("data-id")
  );
}

function onLoad() {
  $.get("/api/articles/notSaved").then(data => {
    data.forEach(function(item, i) {
      cards = cards.add(createCard(item));
    });
    createCard(data);
  });
}

//clears the data out the db
function clear() {
  $.delete("/api/articles/deleteAll").then(response => {
    if (success) {
      //clear the DOM
      clearCards();

      //Then append new Elements
    }
  });
}

$(document).on("click", ".newArticles", newArticleScrape);

function newArticleScrape() {
  $(".container-fluid").empty();
  $.get("/api/scraped").then(() => {
    onLoad();
  });
}

//Clears the DOM
function clearCards() {
  console.log("In here");
  $(".container-fluid").empty();
}

//Function to create no results DOM
function createNoResultsView() {
  var cardTemplate = [
    '<div class="row mongo-items mt-4 mb-4">',
    '<div class="col-lg-12">',
    '<div class="card">',
    '<h3 class="card-header text-center"><a class="scrapeNew">Scrape New Articles</a></h3>',
    "</div></div></div>"
  ];
  //   var cardTemplate = [
  //     '<div class="row mongo-items mt-4 mb-4"><div class="col-lg-12"><div class="card"><div class="card-body p-2"><h4>Try</h4>',
  //     "</div></div></div></div>"
  //   ];

  return $(cardTemplate.join(""));
}
