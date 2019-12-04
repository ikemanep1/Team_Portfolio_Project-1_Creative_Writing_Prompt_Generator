import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import Gif from "./gifs.js";
import PictureAPI from "./pictures.js";
import StoryPrompts from "./prompts.js";
import Words from "./random-words.js";
$(document).ready(function() {
  $('#menuSubmit').click(function(e) {
    e.preventDefault();


    apiDecider(userChoice);
  });
});
