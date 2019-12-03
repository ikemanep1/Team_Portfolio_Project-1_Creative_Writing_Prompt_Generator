export default class Words {
  async getWord() {
    try {
      let response = await fetch(`https://random-word-api.herokuapp.com/word?key=GIJNPCOQ&number=2`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      alert("There was a problem with your request");
      // $("#gifs").html("there was an error with your request:" + error.message);
      return false;
    }
  }
}
