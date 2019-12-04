import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import Gif from "./gifs.js";
import PictureAPI from "./pictures.js";
import StoryPrompts from "./prompts.js";
import Words from "./random-words.js";
import Writer from "./writer.js";
$(document).ready(function() {
  (async () => {
    let domPictures = new PictureAPI();
    const responseDom = await domPictures.pictureAPI();
    getElementsDom(responseDom);
  })();
  const getElementsDom = function(responseDom) {
    $(".pic").attr("src", `${responseDom.url}`);
  };
  $('#menuSubmit').click(function(e) {
    e.preventDefault();

    let promptChoice = $("input:radio[name=promptChoice]:checked").val();
    let minuteTimer = parseInt($("#time-limit").val());
    let millisecondTimer = (minuteTimer * 60000);
    let inputtedName = $("#name").val();
    let newWriter = new Writer (inputtedName, millisecondTimer);
    newWriter.writerTimer();
    $(".intro").hide();
    $(".writing-space").show();

    const apiDecider = function(promptChoice) {
      console.warn(promptChoice);
      if (promptChoice === "5") {
        let random = Math.floor((Math.random() * 3) + 1);
        apiDecider(random.toString());
      }
      if (promptChoice === "1") {
        console.log("You chose 1");
        (async () => {
          let gifIndex = new Gif();
          const responseGif = await gifIndex.getGif();
          getElements(responseGif);
          $("#gif-prompt").show();
          $(".writingInput").show();
          $(".userPrompt").show();
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
        console.log(prompt);

      } else if (promptChoice === "4") {
        (async () => {
          let wordIndex = new Words();
          const responseWords = await wordIndex.getWord();
          getElementsWords(responseWords);
          $("#words-prompt").show();
          $("#words-prompt2").show();
          $(".writingInput").show();
          $(".userPrompt").show();
        })();

        const getElementsWords = function(responseWords) {
          $("#words-prompt").append(`${responseWords[0]}, ${responseWords[1]}, ${responseWords[2]}, ${responseWords[3]}, ${responseWords[4]}, ${responseWords[5]}, ${responseWords[6]}, ${responseWords[7]}, ${responseWords[8]}, ${responseWords[9]}`);
        };
        $("#words-prompt2").text("Words to avoid: like, well, kind of, stuff, things, basically, understatement, ironic, inside, really, actually, stupid, sort of, wow, lol, smh, tbd, lmao, IMO, IMHO, gregarious, codify, furthermore, and overrated.");
      }
    }
    apiDecider(promptChoice);
  });
});
