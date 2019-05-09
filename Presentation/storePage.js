import { NewsPageLogic } from "../Business/news-logic.js";


export function GameShop() {
    this.gameShop = new NewsPageLogic();
    var itemData = this.gameShop.getCartData()
    var mainMenu = document.querySelector(".webmenu");
    var mainwebList = document.querySelector(".weblist");
    var shopHeader = document.querySelector(".store");
    var shopUl = document.createElement("ul");
    var removeOtherTabs = document.querySelector("#newsUL");
    var newsHeader = document.querySelector("#newsTabHeader");
    var shopMenu = document.createElement("div");
    var storeHeader = document.querySelector("#storemenu");
    var cartDiv = document.querySelector(".contentDiv");
    var  homeHeader = document.querySelector(".hometab");
    var releaseMenu = document.querySelector("#releasemenu");
    var self = this;
    var loader = document.createElement("img");
loader.src = "Pictures/loading-bars2.gif"
loader.id = "siteLoader";
    

    this.shopRenderer = function () {
          
        this.pageShop = function() {
            mainMenu.innerHTML = "";
            shopUl.innerHTML = "";
            newsHeader.id = "news2"
            newsHeader.classList.remove("is-disabled");
            newsHeader.className = "news2";
            homeHeader.className = "home2";
            storeHeader.className = "is-disabled";
            releaseMenu.classList.remove("is-disabled");
            releaseMenu.className = "releases2";
            document.body.appendChild(loader);
            setTimeout(function(){ loader.remove(); }, 1000);
            scrolltoTop()
            for (let i = 0 ; i < itemData.gameItems.length; i++) {
                var gameDiv = document.createElement("div");
                mainMenu.appendChild(shopUl);
                shopUl.appendChild(gameDiv);
                shopUl.className = "shopul";
                gameDiv.className = "gameDiv";
                gameDiv.id = itemData.gameItems[i].id;
                var storeimage = document.createElement("img")
                gameDiv.appendChild(storeimage);
                storeimage.src = itemData.gameItems[i].image;
                storeimage.className = "game-img";
                var gameName = document.createElement("span");
                gameDiv.appendChild(gameName)
                gameName.innerHTML = itemData.gameItems[i].name;
                gameName.className = "game-name";
                var price = document.createElement("p");
                gameDiv.appendChild(price);
                var gamepriceSpan = document.createElement("span");
                gamepriceSpan.className = "gprice";
                gamepriceSpan.innerText = itemData.gameItems[i].price;
                gameDiv.appendChild(gamepriceSpan);
                price.innerText = "Price: " + gamepriceSpan.innerText + "$";
                price.className = "gameprice";
                var addtoCart = document.createElement("button");
                gameDiv.appendChild(addtoCart)
                addtoCart.className = "add-tocart"
                addtoCart.innerHTML = "Add To Cart";
            }
           
            this.addtoCart = function(event) {
                var addButton = document.getElementsByClassName("add-tocart");
                for(var i = 0; i < 1; i++) {
                    var clickButton = event.target;
                    clickButton.innerHTML = "Added To Cart";
                    setTimeout(function(){clickButton.innerHTML = "Add To Cart"}, 3000);
                    var titleName = clickButton.parentElement;
                    var gameTitle = titleName.getElementsByClassName("game-name")[0].innerText;
                    var gamePrice = titleName.getElementsByClassName("gprice")[0].innerText;
                    var gameImg = titleName.getElementsByClassName("game-img")[0].src;
                     addItemtoCart(gameTitle, gamePrice, gameImg);
                     UpdateCartTotal()
                }
            }
            function addItemtoCart(gameTitle, gamePrice, gameImg) {
                var gameText = document.createElement("div");
                var gamePriceText = document.createElement("span");
                var gameCartImg = document.createElement("img");
                var gameQuantity = document.createElement("input");
                var removeCartItem = document.createElement("button");
                var gameNameSpan = document.createElement("span");
                gameNameSpan.className = "gamecart-name";
                removeCartItem.className = "btn-remove";
                removeCartItem.innerHTML = "Remove";
                gameCartImg.className = "gameCartImage";
                gameCartImg.src = gameImg; 
                gamePriceText.className = "dollars";
                gamePriceText.innerText = gamePrice + "$";
                gameText.className = "gameTextDiv";
                gameQuantity.className = "game-quantity";
                gameQuantity.type = "number";
                gameQuantity.value = 1;
                var checkTitle = document.getElementsByClassName("gamecart-name");
                for(var i = 0; i < checkTitle.length; i++) {
                    if(checkTitle[i].innerText == gameTitle) {
                        return;
                    }
                }
                gameNameSpan.innerText = gameTitle;
                cartDiv.appendChild(gameText);
                gameText.appendChild(gameCartImg);
                gameText.appendChild(gameNameSpan);
                gameText.appendChild(gamePriceText);
                gameText.appendChild(gameQuantity);
                gameText.appendChild(removeCartItem);
                gameText.getElementsByClassName("btn-remove")[0].addEventListener("click", removeCartButton);
                gameText.getElementsByClassName("game-quantity")[0].addEventListener("change", changeQuantity);
            }
            var addButton = document.querySelectorAll(".add-tocart");
            for(let j = 0; j < addButton.length; j++) {
            addButton[j].addEventListener("click", this.addtoCart);
            }

            function removeCartButton(event) {
               var clickedButton = event.target;
               clickedButton.parentElement.remove();
               UpdateCartTotal()
            }

            function changeQuantity(event) {
              var inputChange = event.target;
              if (isNaN(inputChange.value) || inputChange.value <= 0) {
                inputChange.value = 1
            }
            UpdateCartTotal()
            }
            function UpdateCartTotal() {
                var cartContent = document.getElementsByClassName("contentDiv")[0]
                var gameContent = cartContent.getElementsByClassName("gameTextDiv"); 
                var total = 0;
                for(var i = 0; i < gameContent.length; i++) {
                    var gameRows = gameContent[i];
                    var gamePrices = gameRows.getElementsByClassName("dollars")[0];
                    var price = parseFloat(gamePrices.innerText.replace('$', ''))
                    var quantityDiv = gameRows.getElementsByClassName("game-quantity")[0];
                    var quantityValue = quantityDiv.value
                    total = total + (price * quantityValue)
                }
                total = Math.round(total * 100) / 100
                document.getElementsByClassName("totalprices")[0].innerHTML = "$" + total
            }
        }
    
        storeHeader.addEventListener("click", this.pageShop);
       var gamelist = document.getElementsByClassName("games");
       for(let i = 0; i< gamelist.length; i++) {
           gamelist[i].addEventListener('click', this.pageShop);
       }
       function scrolltoTop() {
        window.scrollTo(0, 0);
      }
    }

        

      
    }

    
