import { GenerateNews } from "../Repository/newsRepo.js";
import { User } from "../Entities/user.js";
import {UserRepo} from "../Repository/userRepo.js";
import { StoreRepo } from "../Repository/storeRepo.js";

export function NewsPageLogic() {
    this.newsRepo = new GenerateNews()
    this.userRepo = new UserRepo()
    this.storeRepo = new StoreRepo()

    

    this.getNewsData = async function() {
        var newsData = await this.newsRepo.getNews();

        var pageData = {
            newsData : newsData,
        };

        return pageData
        
    }
    this.postUserData = function(username, password) {
        var username = new User(username, password);
        var postData = this.userRepo.registerUser(username);
        return postData;
    }



    this.getUserData = function(username, password) {
        var getData = this.userRepo.getUser(username);
        if (getData === null) {
            return false;
        } else {
            if (getData.password === password) {
                return true;
            } else {
                return false;
            }
        }
    }

    this.getCartData = function() {
        return this.storeRepo.getCartItems();
    }
    
    

}