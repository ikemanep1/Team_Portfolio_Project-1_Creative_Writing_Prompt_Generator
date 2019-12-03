import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gif from "./gifs.js";
import PictureAPI from "./pictures.js";
import StoryPrompts from "./prompts.js";
import Words from "./random-words.js";
$(document).ready(function() {
  $('#menuSubmit').click(function(e) {
    e.preventDefault();

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

        var num = Math.floor((Math.random() * 15) + 1);
        console.log(num);
        const getElements = function(responseGif) {
          $("#gif-prompt").attr("src", `${responseGif.data[num].images.original.url}`);
        };

      } else if (promptChoice === "2") {
        (async () => {
          let pictureGrab = new PictureAPI();
          const responsePicture = await pictureGrab.pictureAPI();
          getElementsPic(responsePicture);
        })();
        const getElementsPic = function(responsePicture) {
          $(".photo").attr("src", `${responsePicture.url}`);
        };

      } else if (promptChoice === "3") {
        let story = new StoryPrompts;
        const prompt = story.promptChoose();
        $(".promptResult").text(prompt);
        console.log(prompt);

      } else if (promptChoice === "4") {
        (async () => {
          let wordIndex = new Words();
          const responseWords = await wordIndex.getWord();
          getElementsWords(responseWords);
        })();

        const getElementsWords = function(responseWords) {
          $("#words-prompt").append(`${responseWords[0]}, ${responseWords[1]}, ${responseWords[2]}, ${responseWords[3]}, ${responseWords[4]}, ${responseWords[5]}, ${responseWords[6]}, ${responseWords[7]}, ${responseWords[8]}, ${responseWords[9]}`);
          $("#words-prompt2").append(`${responseWords[10]}, ${responseWords[11]}, ${responseWords[12]}, ${responseWords[13]}, ${responseWords[14]}, ${responseWords[15]}, ${responseWords[16]}, ${responseWords[17]}, ${responseWords[18]}, ${responseWords[19]}`);
        };
      }
    };
    apiDecider(userChoice);
  });
});
