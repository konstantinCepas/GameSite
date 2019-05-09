import {NewsPageLogic} from "../Business/news-logic.js";

export function Renderer(){
    this.pageData = null
    this.pageLogic = new NewsPageLogic()

 
 
     this.renderDaily = async function() {
       
     for(let i = 0; i <=2; i++) {
     let newsImage = document.querySelectorAll("#newsimage");
      newsImage[i].src = this.pageData.newsData.results[i].image.original;
      let newsHeader = document.querySelectorAll("#spantitle")
      newsHeader[i].innerHTML = this.pageData.newsData.results[i].title;
     }
 }
 this.init = async function() {
    this.pageData = await this.pageLogic.getNewsData();
    this.renderDaily(); 
    console.log(this.pageData);
}

}
    
     
 

 
