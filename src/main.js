import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gif from "./gifs.js";
import PictureAPI from "./pictures.js";
import StoryPrompts from "./prompts.js";
// import Words from "./random-words.js";
$(document).ready(function() {
  $('#menuSubmit').click(function(e) {
    e.preventDefault();

    let promptChoice = $("input:radio[name=promptChoice]:checked").val();
    console.log(promptChoice);
    const apiDecider = function() {
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
    apiDecider();

});
});

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
