export default class Gif {
  async getGif() {
    try {
      let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=LcQvnDJKQVtThD6fRxYBWV1l4cCTZbtB&q=art&rating=g&type=random`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      // alert("There was a problem with your request")
      // $("#gifs").html("there was an error with your request:" + error.message);
      return false;
    }
  }
}
