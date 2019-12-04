import $ from 'jquery';
export default class Writer {
  constructor(name, millisecondTimer) {
    this.name = name;
    this.timer = millisecondTimer;
    console.log(this.timer);
  }
  writerTimer() {
    setTimeout(function(){
      $(".writing-space").hide();
      $(".review").show();
    }, this.timer);
  }
}
