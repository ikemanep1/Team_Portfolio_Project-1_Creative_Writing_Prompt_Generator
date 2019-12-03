export default class PictureAPI {
  async pictureAPI() {
    try {
      let response = await fetch(`http://www.splashbase.co/api/v1/images/random`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
