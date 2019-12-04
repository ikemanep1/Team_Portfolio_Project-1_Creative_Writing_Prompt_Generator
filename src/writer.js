export default class Writer {
  constructor(name, millisecondTimer) {
    this.name = name;
    this.timer = millisecondTimer;
    console.log(this.timer);
  }
  writerTimer() {
    setTimeout(function(){
  alert("Hello friend! Maybe you should sign up for our newsletter!");
}, this.timer);
  }
}
