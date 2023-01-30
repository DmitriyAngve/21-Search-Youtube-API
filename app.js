// 1029074837685-ipi82jmnovnf8sd0sik23pp0t98r78tl.apps.googleusercontent.com
// API KEY AIzaSyDC9zdYlOagHelNeqDfECMojTtQ86KfdHo

const apiKey = "AIzaSyDC9zdYlOagHelNeqDfECMojTtQ86KfdHo";
const baseurl = "https://www.googleapis.com/youtube/v3/search";
// GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=test&key=AIzaSyDC9zdYlOagHelNeqDfECMojTtQ86KfdHo

// GET2 https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCgsZ8_79Eclct_VDoql_Dwg&maxResults=10&order=relevance&q=test&key=AIzaSyDC9zdYlOagHelNeqDfECMojTtQ86KfdHo

const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

btn.addEventListener("click", (e) => {
  let paras = "?part=snippet&channelId=UCgsZ8_79Eclct_VDoql_Dwg";
  let maxResults = "&maxResults=10";
  let order = "&order=relevance";
  let q = "test";
  let searchTerm = "&q=" + q;
  let connKey = "&key=" + apiKey;
  let url = baseurl + paras + maxResults + order + searchTerm + connKey;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.items.forEach((item) => {
        console.log(item);
      });
    });
});
