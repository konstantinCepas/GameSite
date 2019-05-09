import {NewsPageLogic} from "../Business/news-logic.js";


export function NewsPage() {
this.newsTab = new NewsPageLogic();
this.newsPageData = null;
var menuChange = document.querySelector(".weblist");
var mainMenu = document.querySelector(".webmenu");
var newsLink = document.querySelectorAll("#newslink");
var newsTabHeader = document.querySelector("#newsTabHeader");
var storeHeader = document.querySelector("#storemenu");
var releaseMenu = document.querySelector("#releasemenu");
var loader = document.createElement("img");
loader.src = "Pictures/loading-bars2.gif"
loader.id = "siteLoader";
var allNewsList = document.createElement("ul");
allNewsList.id = "newsUL";

this.renderAllNews = async function() {
    mainMenu.className = "webmenu";
    this.newsPageData = await this.newsTab.getNewsData();
    for(var index = 0; index <= newsLink.length -1; index++) {
        newsLink[index].addEventListener("click", (event) =>{
            mainMenu.innerHTML = "";
            storeHeader.classList.remove("is-disabled");
            storeHeader.classList = "store2";
            newsTabHeader.className = "is-disabled";
            releaseMenu.classList.remove("is-disabled");
            releaseMenu.classList = "releases2";
            var homeTab = document.querySelector("#homeTab");
                homeTab.classList = "home2";
                scrolltoTop()
            event.preventDefault()
            menuChange.remove();    
            document.body.appendChild(loader);
            setTimeout(function(){ loader.remove(); }, 3000);
             mainMenu.appendChild(allNewsList);
             for(let i = 0; i <= 30; i++) {
                 var newNews = document.createElement("li");
                 var spanNews = document.createElement("span");
                 var mainImage = document.createElement("img");
                 var textDiv = document.createElement("div");
                 var underText = document.createElement("h2");
                 var articleText = document.createElement("html");
                 articleText.className = "articlebody";
                 articleText.id = "htmls";
                 underText.className = "news-undertext";
                 textDiv.className = "newsHeadline";
                 mainImage.classList = "newsImages";
                 newNews.appendChild(mainImage);
                 spanNews.id = "spans"+i;
                 spanNews.classList = "news-spans";
                 newNews.appendChild(textDiv);
                 textDiv.appendChild(spanNews);
                 allNewsList.appendChild(newNews);
                 newNews.id = "newsTab"+i; 
                 newNews.classList = "newsTab";
                 spanNews.innerHTML = this.newsPageData.newsData.results[i].title;
                 mainImage.src = this.newsPageData.newsData.results[i].image.original;
                 newsTabHeader.removeAttribute("href");
                 textDiv.appendChild(underText);
                 underText.innerHTML = this.newsPageData.newsData.results[i].lede;
                 newNews.appendChild(articleText);
                 articleText.innerHTML = this.newsPageData.newsData.results[i].body;
                 
   }
    })
    
    }
     newsTabHeader.addEventListener("click", (event) =>{
         mainMenu.innerHTML = "";
        mainMenu.className = "webmenu";
        var homeTab = document.querySelector("#homeTab");
        newsTabHeader.className = "is-disabled";
            homeTab.classList = "home2";
            releaseMenu.classList.remove("is-disabled");
            releaseMenu.classList = "releases2";
            storeHeader.classList.remove("is-disabled")
            storeHeader.classList = "store2";
            scrolltoTop()
        event.preventDefault()
        menuChange.remove();    
        document.body.appendChild(loader);
        setTimeout(function(){ loader.remove(); }, 3000);
         mainMenu.appendChild(allNewsList);
         for(let i = 0; i <= 30; i++) {
             var newNews = document.createElement("li");
             var spanNews = document.createElement("span");
             var mainImage = document.createElement("img");
             var textDiv = document.createElement("div");
             var underText = document.createElement("h2");
             var articleText = document.createElement("html");
             articleText.className = "articlebody";
             articleText.id = "htmls";
             underText.className = "news-undertext";
             textDiv.className = "newsHeadline";
             mainImage.classList = "newsImages";
             newNews.appendChild(mainImage);
             spanNews.id = "spans"+i;
             spanNews.classList = "news-spans";
             newNews.appendChild(textDiv);
             textDiv.appendChild(spanNews);
             allNewsList.appendChild(newNews);
             newNews.id = "newsTab"+i; 
             newNews.classList = "newsTab";
             spanNews.innerHTML = this.newsPageData.newsData.results[i].title;
             mainImage.src = this.newsPageData.newsData.results[i].image.original;
             newsTabHeader.removeAttribute("href");
             textDiv.appendChild(underText);
             underText.innerHTML = this.newsPageData.newsData.results[i].lede;
             newNews.appendChild(articleText);
             articleText.innerHTML = this.newsPageData.newsData.results[i].body;
             
}
})
function scrolltoTop() {
    window.scrollTo(0, 0);
  }
}


}



