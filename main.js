import {Renderer} from "./Presentation/presentation.js";
import { NewsPage } from "./Presentation/newsPage.js";
import { RenderUser } from "./Presentation/userlogin.js";
import { GameShop } from "./Presentation/storePage.js";
import { RenderRelease } from "./Presentation/releasePage.js";
import { About } from "./Presentation/aboutClick.js";


function main() {
    var renderer = new Renderer();
   renderer.init()
   var renderNewsTab = new NewsPage();
   renderNewsTab.renderAllNews();
   var renderUser = new RenderUser()
   renderUser.renderLogin();
   var renderShop = new GameShop();
   renderShop.shopRenderer();
  var releaseTab = new RenderRelease();
  releaseTab.renderReleased();
  var aboutTab = new About();
  aboutTab.aboutClick();
}
main()