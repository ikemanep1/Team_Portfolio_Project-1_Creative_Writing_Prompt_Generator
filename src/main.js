import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gif from "./gifs.js";
import PictureAPI from "./pictures.js";
import StoryPrompts from "./prompts.js";
import Words from "./random-words.js";
$(document).ready(function() {
  $('#menuSubmit').click(function(e) {
    e.preventDefault();

    let promptChoice = $("input:radio[name=prompt]:checked").val();

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

    (async () => {
      let wordIndex = new Words();
      const responseWords = await wordIndex.getWord();
      getElementsWords(responseWords);
      })();
    // var word = Math.floor((Math.random() * 15) + 1)

    const getElementsWords = function(responseWords) {
      $("#words-prompt").append(`${responseWords[0]}, ${responseWords[1]}, ${responseWords[2]}, ${responseWords[3]}, ${responseWords[4]}, ${responseWords[5]}, ${responseWords[6]}, ${responseWords[7]}, ${responseWords[8]}, ${responseWords[9]}`);
      $("#words-prompt2").append(`${responseWords[10]}, ${responseWords[11]}, ${responseWords[12]}, ${responseWords[13]}, ${responseWords[14]}, ${responseWords[15]}, ${responseWords[16]}, ${responseWords[17]}, ${responseWords[18]}, ${responseWords[19]}`);
    };


    (async () => {
      let pictureGrab = new PictureAPI();
      const responsePicture = await pictureGrab.pictureAPI();
      getElementsPic(responsePicture);
    })();
    const getElementsPic = function(responsePicture) {
      $(".photo").attr("src", `${responsePicture.url}`);
    };
    let story = new StoryPrompts;
    const prompt = story.promptChoose();
    $("#storyPrompts").text(prompt);
  });
});
