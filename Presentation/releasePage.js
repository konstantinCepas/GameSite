export function RenderRelease() {
    var mainMenu = document.querySelector(".webmenu");
    var releaseMenu = document.querySelector("#releasemenu");
    var renderUl = document.createElement("ul");
    var newsHeader = document.querySelector("#newsTabHeader");
    var storeHeader = document.querySelector("#storemenu");
    var  homeHeader = document.querySelector(".hometab");
    renderUl.className = "releaseUL";
    var loader = document.createElement("img");
loader.src = "Pictures/loading-bars2.gif"
loader.id = "siteLoader";
    this.renderReleased = function() {
      
        this.renderTop = function() {
          mainMenu.innerHTML = "";
          renderUl.innerHTML = "";
          releaseMenu.className = "is-disabled";
          newsHeader.classList.remove("is-disabled");
            newsHeader.className = "news2";
            homeHeader.className = "home2";
            storeHeader.className = "store2";
            storeHeader.classList.remove("is-disabled");
            scrolltoTop()
            var loader = document.createElement("img");
loader.src = "Pictures/loading-bars2.gif"
loader.id = "siteLoader";
          mainMenu.style.flexWrap = "wrap";
          mainMenu.appendChild(renderUl);
          var topDiv = document.createElement("div");
          renderUl.appendChild(topDiv);
          topDiv.className = "days-header";
          var imageHeader = document.createElement("img");
          var spanDiv = document.createElement("div");
          topDiv.appendChild(imageHeader);
          topDiv.appendChild(spanDiv);
          spanDiv.className = "daysgone-spandiv";
          imageHeader.src = "Pictures/daysgone.jpg";
          imageHeader.className = "daysgoneImg";
          var goneHeader = document.createElement("span");
          spanDiv.appendChild(goneHeader);
          goneHeader.innerHTML = "Days Gone is finally here!!";
          goneHeader.className = "daysrelease";
          var goneDeck = document.createElement("span");
          goneDeck.className = "goneDeck";
          spanDiv.appendChild(goneDeck);
          goneDeck.innerHTML = "Initial release date: April 26, 2019";
          var mkElevenDiv = document.createElement("div");
          renderUl.appendChild(mkElevenDiv);
          mkElevenDiv.className = "mkheadDiv";
         var  mkSpanDiv = document.createElement("div");
         mkSpanDiv.className = "mkEleven";
          mkElevenDiv.appendChild(mkSpanDiv);
          var mkImageHeader = document.createElement("img");
          mkSpanDiv.appendChild(mkImageHeader);
          mkImageHeader.src = "Pictures/mk11.jpg";
          mkImageHeader.className = "mkimg";
          var mkSpanText = document.createElement("span");
          mkSpanText.className = "mkSpantxt";
          mkSpanText.innerHTML = "Mortal Kombat 11 is here check out all tips & tricks";
          mkSpanDiv.appendChild(mkSpanText);
          var newline = document.createElement("ul");
          newline.className = "rsecondul";
          mainMenu.appendChild(newline);
          var leftDiv = document.createElement("div");
          newline.appendChild(leftDiv);
          leftDiv.className = "worldwardiv";
          var leftmainImg = document.createElement("img");
          leftmainImg.src = "Pictures/wwz.jpg";
          leftDiv.appendChild(leftmainImg);
          leftmainImg.className = "wwzImg";
          var leftTxtDiv = document.createElement("div");
          leftDiv.appendChild(leftTxtDiv);
          leftTxtDiv.className = "wwztxt";
          var worldZspan = document.createElement("span");
          leftTxtDiv.appendChild(worldZspan);
          worldZspan.innerText = "World War Z is a third-person shooter video game developed by Saber Interactive and published by Focus Home Interactive. It was released for Microsoft Windows, PlayStation 4, and Xbox One on April 16, 2019. Loosely based on the 2006 book of the same name, and set in the same universe as the 2013 film adaptation, the game follows groups of survivors of a zombie apocalypse in the cities of Moscow, New York, Jerusalem, and Tokyo."
          worldZspan.className = "wwzspan";
          var wolrdZspansec = document.createElement("span");
          leftTxtDiv.appendChild(wolrdZspansec);
          wolrdZspansec.innerHTML = "Zombie games can still bring in big sales, as publisher Focus Home Interactive and developer Saber Interactive announced today that their co-op shooter World War Z has passed more than 1 million copies sold since its April 16 launch on PC, PlayStation 4, and Xbox One. It accomplished this despite not being on Steam — it’s an Epic Games Store exclusive for PC. This is a fantastic showing for Saber, the New Jersey-based studio that put out Shaq-Fu: A Legend Reborn and NBA 2K Playgrounds 2 last year.";
          wolrdZspansec.className = "wwzspan";
          var topUpcoming = document.createElement("div");
          newline.appendChild(topUpcoming);
          topUpcoming.className = "upcoming";
          var upcomingSpan = document.createElement("span");
          topUpcoming.appendChild(upcomingSpan);
          upcomingSpan.innerHTML = "Top Upcoming Games";
          upcomingSpan.className = "upSpan";
          var topList = document.createElement("ul");
          topUpcoming.appendChild(topList);
          topList.className = "topList";
          for(var i = 0; i < 10; i++) {
              var listItem = document.createElement("li");
              topList.appendChild(listItem);
              listItem.className = "topListLi";
              var backgroundDiv = document.createElement("div");
              listItem.appendChild(backgroundDiv);
              backgroundDiv.className = "listbackgr";
              var bgHeader = document.createElement("span");
              bgHeader.className = "bggamesHeader";
              backgroundDiv.appendChild(bgHeader);
              let text = ["The Last of Us 2","Borderlands 3", "Cyberpunk 3", "Doom Eternal", "Rage 2", "Star Wars - Jedi:Fallen Order", "Death Stranding", "Wolfenstein: YoungBlood", "Halo Infinite", "Fire Emblem: Three Houses"]
              let releasedt = ["Unknown release date","Coming Sep 13,2019", "Unknown release date", "Unknown release date", "Coming May 14,2019", "Coming Nov 15,2019", "Unknown release date", "Coming Jul 26,2019", "Unknown release date", "Coming Jul 26,2019"]
              var bgreleaseSpan = document.createElement("span");
              backgroundDiv.appendChild(bgreleaseSpan);
              bgreleaseSpan.className = "bgrelease2";
              bgHeader.innerHTML = text[i];
              bgreleaseSpan.innerHTML = releasedt[i];
              var listItembg = document.createElement("img");
              listItem.appendChild(listItembg);
              listItembg.className = "list-itemimg"
              listItembg.src = "Pictures/release"+ [i] + ".jpg";
          }
          var aboutList = document.createElement("ul");
          mainMenu.appendChild(aboutList);
          aboutList.className = "aboutUl";
          var aboutDays = document.createElement("div");
          aboutList.appendChild(aboutDays);
          aboutDays.className = "aboutDaysDiv";
          var aboutDaysimg = document.createElement("img");
          aboutDaysimg.src = "Pictures/aboutdays.jpg";
          aboutDaysimg.className = "aboutDimg";
          aboutDays.appendChild(aboutDaysimg);
          var aboutDaysSpan = document.createElement("span");
          aboutDaysSpan.className = "abtdaysspan";
          aboutDays.appendChild(aboutDaysSpan);
          aboutDaysSpan.innerHTML = "Back in 2016, Sony's E3 press conference ended with a teaser for what we now know is Days Gone. It's a post-apocalyptic survival game that features zombie-like hordes known as Freakers. They're massive in numbers and they're especially menacing in the cold.But what happened? Why did they turn? What does the future hold for civilization? Those are questions we'll get answers to in due time, but for now, let's focus on everything we know about Days Gone."
          var aboutDaysHeader = document.createElement("h1");
          aboutDaysHeader.className = "aboutdaysheader";
          aboutDays.appendChild(aboutDaysHeader);
          aboutDaysHeader.innerHTML = "What's new with Days Gone?";
          var aboutDaysSecondImage = document.createElement("img");
          aboutDays.appendChild(aboutDaysSecondImage);
          aboutDaysSecondImage.className = "aboutsecondimage";
          aboutDaysSecondImage.src = "Pictures/newts.jpg";
          var aboutDaysSecondSpan = document.createElement("span");
          aboutDays.appendChild(aboutDaysSecondSpan);
          aboutDaysSecondSpan.innerHTML = "Introducing... Newts. These are zombies that were once human children or teenagers. That's right, Days Gone is stepping out of the usual comfort zone with roleplaying games by having child-like zombies. Sony Bend's Emmanuel Roth did an interview with Stevivor where he explained,They're interesting creatures. They're afraid of the taller freakers; they need to protect themselves on the roof — to be away from the swarmers that go after them and feed on them. But they are still dangerous — they will look at Deacon's health; when your health is low they will jump on you and will attack you. We hide some here and there to surprise the player.So, not only do these zombies look like children, but they act like them too. The fact that they're terrified of creatures larger than them, hide to stay safe, and only attack the players when they're vulnerable reflects real life child-like behavior for survival. Alive child-like behavior.I have a lot of feelings about this and none of them are good. What do you think?"
          aboutDaysSecondSpan.className = "aboutsecondspan";
          var aboutMK = document.createElement("div");
          aboutList.appendChild(aboutMK);
          aboutMK.className = "aboutMKDiv";
          var aboutMKimg = document.createElement("img");
          aboutMK.appendChild(aboutMKimg);
          aboutMKimg.className = "aboutmkimg";
          aboutMKimg.src = "Pictures/mortal.gif";
          var aboutMKtxtSpan = document.createElement("span");
          aboutMKtxtSpan.className = "aboutMKSpan";
          aboutMK.appendChild(aboutMKtxtSpan);
          aboutMKtxtSpan.innerHTML = "NetherRealm is one of the best fighting game studios on the planet, with Mortal Kombat X among its most polished and engaging titles. It’s no surprise that the studio produced a follow-up, and it’s even gorier and more intense than its predecessors. Mortal Kombat 11 features brutal fatalities, a cast of memorable characters old and new, and a wild, time-hopping story.";
          var mkGeras = document.createElement("img");
          aboutMK.appendChild(mkGeras);
          mkGeras.className = "mkcharacter1";
          mkGeras.src = "Pictures/geras.gif";
          var aboutGeras = document.createElement("span");
          aboutMK.appendChild(aboutGeras);
          aboutGeras.className = "aboutgeras";
          aboutGeras.innerHTML = "Geras is the loyal and powerful servant of the Keeper of Time and Architect of the Universe's destiny, Kronika. He wields power to manipulate sands of time. He has died thousands of times over, each time coming back stronger and wiser. Due to his immortal lifespan and apparent immortality, he has witnessed various key events throughout time, such as the Ice Age and the Great Kung Lao’s defeat at the hands of Goro. Geras also exhibits the traits of a scholar, as a witness of many lifetimes in many timelines, he studies and collects knowledge of immeasurable events, cultures and peoples. Regarding this, he knows impressive and precious information about many of the denizens of the realms, including genealogical, cultural and racial unique features."
          var aboutCetrion = document.createElement("img");
          aboutMK.appendChild(aboutCetrion);
          aboutCetrion.className = "aboutCetrion";
          aboutCetrion.src = "Pictures/cetrion..gif";
          var aboutCetrionSpan = document.createElement("span");
          aboutCetrionSpan.className = "aboutcetrionspan";
          aboutMK.appendChild(aboutCetrionSpan);
          aboutCetrionSpan.innerHTML = "Cetrion is an Elder God who is the sister and counterpart of Shinnok and she is one of the deities responsible of banishing Shinnok to the Netherrealm. She is also the daughter of Kronika and is the secondary antagonist of Mortal Kombat 11.During the events of the aforementioned game, it is revealed that Cetrion, much like Shinnok, was a sleeping agent of Kronika among her fellow Elder Gods, and both played for eons an intricate game where she defends life, virtue and light in reality, and he defends death, corruption and darkness. While siblings, both are rivals, and Kronika's plans are that both keep existing and keeping balance of these essential aspects of the universe, having both fighting at an endgame."
          topDiv.addEventListener("click", scrolltoDays);
          mkImageHeader.addEventListener("click", scrolltoMK);
        }
       releaseMenu.addEventListener("click", this.renderTop);
       function scrolltoDays() {
        window.scrollTo(0, 1150);
      }
      function scrolltoMK() {
        window.scrollTo(0, 2200);
      }
      function scrolltoTop() {
        window.scrollTo(0, 0);
      }
    }

}