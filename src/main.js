import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Gif from "./gifs.js";
import PictureAPI from "./pictures.js";
import StoryPrompts from "./prompts.js";
// import Words from "./random-words.js";
$(document).ready(function() {
  $('#menuSubmit').click(function(e) {
    e.preventDefault();

    let timer = parseInt($("#time-limit").val());
    let timeLeft = (timer * 60000);

    setTimeout(function(){

    })

    let userChoice = $("input:radio[name=promptChoice]:checked").val();
    const apiDecider = function(promptChoice) {
      if (promptChoice === "5") {
        let random = Math.floor((Math.random() * 3) + 1);
        apiDecider(random.toString());
      }
      if (promptChoice === "1") {
        (async () => {
          let gifIndex = new Gif();
          const responseGif = await gifIndex.getGif();
          getElements(responseGif);
        })();
      } else if (promptChoice === "2") {
        (async () => {
          let pictureGrab = new PictureAPI();
          const responsePicture = await pictureGrab.pictureAPI();
          getElementsPic(responsePicture);
        })();
      } else if (promptChoice === "3") {
        let story = new StoryPrompts;
        const prompt = story.promptChoose();
        $(".promptResult").text(prompt);
        console.log(prompt);
      }
      var num = Math.floor((Math.random() * 15) + 1);
      const getElements = function(responseGif) {
        $("#gif-prompt").attr("src", `${responseGif.data[num].images.original.url}`);
      };
      const getElementsPic = function(responsePicture) {
        $(".photo").attr("src", `${responsePicture.url}`);
      };

    };
    apiDecider(userChoice);

  });
});
