// 1029074837685-ipi82jmnovnf8sd0sik23pp0t98r78tl.apps.googleusercontent.com
// API KEY AIzaSyDC9zdYlOagHelNeqDfECMojTtQ86KfdHo

const apiKey = "AIzaSyDC9zdYlOagHelNeqDfECMojTtQ86KfdHo";
const baseurl = "https://www.googleapis.com/youtube/v3/search";
// GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=test&key=AIzaSyDC9zdYlOagHelNeqDfECMojTtQ86KfdHo
// GET2 https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCgsZ8_79Eclct_VDoql_Dwg&maxResults=10&order=relevance&q=test&key=AIzaSyDC9zdYlOagHelNeqDfECMojTtQ86KfdHo

const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const searchQuery = document.querySelector(".searchQ");

btn.addEventListener("click", (e) => {
  //   let paras = "?part=snippet&";
  let paras = "?part=snippet&channelId=UCgsZ8_79Eclct_VDoql_Dwg";
  let maxResults = "&maxResults=10";
  let order = "&order=relevance";
  let q = searchQuery.value || "test";
  let searchTerm = "&q=" + q;
  let connKey = "&key=" + apiKey;
  let url = baseurl + paras + maxResults + order + searchTerm + connKey;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      output.innerHTML = "";
      data.items.forEach((item) => {
        const ele = makeCard(item);
        output.append(ele);
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

function makeCard(data) {
  console.log(data);
  const vid = data.snippet;
  const main = document.createElement("div");
  main.classList.add("box");
  const div1 = document.createElement("div");
  const thumbnail = vid.thumbnails.high.url;
  const linkVideo = `https://www.youtube.com/watch?v=${data.id.videoId}`;
  div1.innerHTML = `<p>${vid.title}</p><img src=${thumbnail}> <div>${vid.description}</div><div>Link <a href="${linkVideo}" target="_blank">${linkVideo}</a></div>`;
  main.append(div1);
  return main;
}
