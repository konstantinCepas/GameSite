import {News} from "../Entities/news.js"

export function GenerateNews() {
    
// this.getNews = async function () {
//     try {
//     var response = await fetch("https://newsapi.org/v2/top-headlines?sources=ign&apiKey=6aac7cca1f21459aa1b06da9d18fd29f");
//     var data = await response.json()
//     console.log("response from api", data);
//     return new News(data);

// } catch(err) {
//         return err
//     }
// }
this.getNews = async function() {
    try {
        let response = await fetch("https://www.gamespot.com/api/articles/?api_key=07cdb787a4b5f2f04005ccd439b500523caef2b7&filter=publish_date:2019.04.30|2019.05.04&format=json")
        let data = await response.json()
        console.log("response from api", data);
        return new News(data)
    
    } catch(err) {
            return err
        }
}

}

// $.ajax ({
//     type: 'GET',
//     dataType: 'jsonp',
//     crossDomain: true,
//     jsonp: 'json_callback',
//     url: 'http://www.giantbomb.com/api/search/?format=jsonp&api_key=0e475eca0fa0d616735613d24c3bd167625bab32&query=uncharted',
//     complete: function() {
//         console.log('done');
//     },
//     success: function(data) {
//         console.log(data);
//     }
// });

