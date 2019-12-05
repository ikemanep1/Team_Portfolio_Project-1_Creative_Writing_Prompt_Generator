import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import Gif from "./gifs.js";
import PictureAPI from "./pictures.js";
import StoryPrompts from "./prompts.js";
import Words from "./random-words.js";
import Writer from "./writer.js";
import img from "./letters.jpg";
import img2 from "./unnamed.jpg";
import img3 from "./images.jpg";
$(document).ready(function() {
  $("#div").prepend(`<img id="theImg" src=${img} />`);
    $("#div2").prepend(`<img id="theImg2" src=${img2} />`);
    $("#div3").prepend(`<img id="theImg3" src=${img3} />`);
  $('#menuSubmit').click(function(e) {
    e.preventDefault();

    let promptChoice = $("input:radio[name=promptChoice]:checked").val();
    let userModeChoice = $("input:radio[name=difficultyChoice]:checked").val();
    let draft = $("#draft").val();
    let inputtedName = $("#name").val();
    let newWriter = new Writer (inputtedName, userModeChoice, draft);
    newWriter.writerMode();
    let hardExcludeArray = newWriter.writerMode();

    $(".intro").hide();
    $(".writing-space").show();
    $("#excludeArray").text(`${hardExcludeArray}`);

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
          $("#gif-prompt").show();
          $(".writingInput").show();
          $(".userPrompt").show();
        })();

        var num = Math.floor((Math.random() * 15) + 1);
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
          $(".photo").show();
          $(".writingInput").show();
          $(".userPrompt").show();
        };

      } else if (promptChoice === "3") {
        let story = new StoryPrompts;
        const prompt = story.promptChoose();
        $(".promptResult").text(prompt);
        $(".promptResult").show();
        $(".writingInput").show();
        $(".userPrompt").show();

      } else if (promptChoice === "4") {
        (async () => {
          let wordIndex = new Words();
          const responseWords = await wordIndex.getWord();
          getElementsWords(responseWords);
          $("#words-prompt").show();
          $(".writingInput").show();
          $(".userPrompt").show();
        })();

        const getElementsWords = function(responseWords) {
          $("#words-prompt").append(`${responseWords[0]}, ${responseWords[1]}, ${responseWords[2]}, ${responseWords[3]}, ${responseWords[4]}, ${responseWords[5]}, ${responseWords[6]}, ${responseWords[7]}, ${responseWords[8]}, ${responseWords[9]}`);
        };

      }
    }
    apiDecider(promptChoice);
  });


  $('#writing-submit').click(function(e) {
    e.preventDefault();
    let draft = $("#draft").val();
    let inputtedName = $("#name").val();
    let userModeChoice = $("input:radio[name=difficultyChoice]:checked").val();
    $("#review").show();
    $("#submission").text(`${draft}`);
    let newWriter2 = new Writer(inputtedName, userModeChoice, draft)
    newWriter2.draftChecker();
  });

});
