// https://libraryofcongress.github.io/data-exploration/

let baseURL = "https://www.loc.gov/";
let toJSON = "fo=json";

let format = {
  maps: "maps",
  audio: "audio",
  photos: "photos",
  manuscripts: "manuscripts",
  newspapers: "newspapers",
  videos: "film-and-videos",
  music: "notated-music",
  websites: "websites",
};

let searchMethod = ["search", "collections", format, "item"];

function queryLOC() {
  let requestURL = baseURL + "search/?q=baseball&" + toJSON;
  console.log(requestURL);
  fetch(requestURL)
    .then((res) => {
      if (!res.ok) {
        console.log(res.status);
      } else {
        console.log(res);
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);
    });
}

$(".searchBtn").click(function () {
  searchText = $(".mainSearch").val();
  console.log(searchText);
  queryLOC();
});
