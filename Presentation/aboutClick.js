export function About() {
    var about = document.querySelector(".about");
    this.aboutClick = function() {
       this.scrollToBottom = function() {
           window.scrollTo(0,20000);
       }
       about.addEventListener("click" , this.scrollToBottom);
    }
    
}