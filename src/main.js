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
    // let prompt = $("input:radio[name=prompt]:checked").val();
    //we need to figure out how these random words will get accessed--are they their own prompt and/or an option for another prompt

    // (async () => {
    //   let wordIndex = new Words();
    //   const response = await gifIndex.getGif();//might need to change variable name so it doesn't duplicate GIF code
    //   getElements(response);
    //   })();
    // var num = Math.floor((Math.random() * 15) + 1)

    //need to update this for the random word API stuff
    // const getElements = function(response) {
    //   $("#words-prompt").attr("src", `${response.data[num].images.original.url}`);
    //
    // }
    // });

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
