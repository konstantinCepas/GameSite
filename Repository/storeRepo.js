import { CartItems } from "../Entities/store.js";

export function StoreRepo() {
 this.getCartItems = function() {
    var gameItems = [];
    gameItems.push(new CartItems("Red Dead Redemption 2", "69.99", "Pictures/game1.jpg", "rdRedemption"))
    gameItems.push(new CartItems("Anthem", "49.99", "Pictures/game2.jpg", "anthemgame"))
    gameItems.push(new CartItems("Resident Evil 2", "59.99", "Pictures/game3.jpg", "resev2"))
    gameItems.push(new CartItems("Call of Duty Blackops 4", "59.99", "Pictures/game4.jpg", "codblackops"))
    gameItems.push(new CartItems("Metro Exodus", "39.99", "Pictures/game5.jpg", "metroexo"))
    gameItems.push(new CartItems("Jump Force", "39.99", "Pictures/game6.jpg", "jmpForce"))
    gameItems.push(new CartItems("Far Cry New Dawn", "29.99", "Pictures/game7.jpg", "fcNewD"))
    gameItems.push(new CartItems("Assassin's Creed Odyssey", "29.99", "Pictures/game8.jpg", "acOdy"))
    gameItems.push(new CartItems("Days Gone", "50","Pictures/game9.jpg", "dayGon"))
    gameItems.push(new CartItems("Mortal Kombat 11", "60","Pictures/game10.png", "mkEleven"))
    gameItems.push(new CartItems("7 Days To Die", "30","Pictures/game11.jpg", "7daystodie"))
    gameItems.push(new CartItems("God of War", "59.99","Pictures/game12.jpg", "godofwar"))
    gameItems.push(new CartItems("A Way Out", "59.99","Pictures/game13.jpeg", "wayout"))
    gameItems.push(new CartItems("Fallout 4", "19.99","Pictures/game14.jpg", "falloutfour"))
    gameItems.push(new CartItems("The Elder Scrolls V : Skyrim", "29.99","Pictures/game15.jpg", "elderscrolls"))
    gameItems.push(new CartItems("The Witcher 3", "39.99","Pictures/game16.jpg", "witcher"))
    var gameStore = {
       gameItems : gameItems
    }
    return gameStore
 }
}
