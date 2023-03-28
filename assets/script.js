// https://libraryofcongress.github.io/data-exploration/

let baseURL = "https://www.loc.gov/";
let toJSON = "&fo=json";

let searchText;
let searchMethod;

let resultsContainer = $(".resultsContainer");

function queryLOC(searchMethod, searchText) {
  let requestURL = baseURL + searchMethod + searchText + toJSON;
  console.log(requestURL);
  fetch(requestURL)
    .then((res) => {
      if (!res.ok) {
        console.log(res.status);
        alert("Sorry, your request didn't go through as submitted.\n\nPlease adjust your search and try again.");
      } else {
        console.log(res);
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);
      displayResults(data);
    });
}

function displayResults(data) {
resultsContainer.empty();

for (let i = 0; i < data.results.length; i++) {
  result = $("<div>");
  resultIMG = $("<img>");
  resultDesc = $("<p>");
  resultInfoContainer = $("<div>");
  resultTextContainer = $("<div>");
  resultTitle = $("<h3>")
  resultURL = data.results[i].url;
  resultBtn = $("<a>");
  resultIMGURL = data.results[i].image_url;

  // fetch(resultIMGURL, {
  //   mode: "no-cors"
  // })
  // .then(function(res) {
  //   if (!res.ok) {
  //     resultIMGURL = "https://plchldr.co/i/500x250"
  //   }
  // })

  resultTitle.text(data.results[i].title)
  resultBtn.text("Get More Info");
  resultDesc.text(data.results[i].description)

  resultIMG.attr("src", resultIMGURL);
  resultInfoContainer.addClass("with-sidebar resultInfoContainer");
  resultBtn.attr("href", resultURL);
  resultBtn.addClass("resultBtn");
  result.addClass("resultBox stack");
  resultTextContainer.addClass("stack resultTextContainer");

  resultInfoContainer.append(resultIMG);
  resultInfoContainer.append(resultTextContainer);
  resultTextContainer.append(resultDesc);
  resultTextContainer.append(resultBtn);
  result.append(resultTitle);
  result.append(resultInfoContainer);
  resultsContainer.append(result);
}

}

$(".searchBtn").click(function (e) {
  e.preventDefault()
  
  searchText = $(".mainSearch").val().toLowerCase().trim().replace(" ", "+");
  searchMethod = $("#searchMethod").val();
  console.log(searchMethod + searchText);
  queryLOC(searchMethod, searchText);
  location.assign("results.html" + "??" + searchMethod + "??" + searchText)
  
});


test = "hello=goodbye=help"
console.log(test.split("=")[1])