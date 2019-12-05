import $ from 'jquery';
export default class Writer {
  constructor(name, userModeChoice, draft) {
    this.name = name;
    this.mode = userModeChoice;
    this.draft = draft;
    this.exclude = ['like', 'well', 'kind of', 'stuff', 'things', 'basically', 'understatement', 'ironic', 'inside', 'really', 'actually', 'stupid', 'sort of', 'wow', 'lol', 'smh', 'tbd', 'lmao', 'IMO', 'IMHO', 'gregarious', 'codify', 'furthermore', 'overrated'];
  }

  writerMode() {
    if (this.mode === '3') {
      setTimeout(function(){
        $(".writing-space").hide();
        $(".review").show();
        $("#writing-submit").submit();
      }, 300000);
      let excludeArray = this.exclude.join(', ');
      $("#exclude-words").show();
      return excludeArray;
    } else if (this.mode === '2') {
      setTimeout(function(){
        $(".writing-space").hide();
        $(".review").show();
        $("#writing-submit").submit();
      }, 600000);
    } else {
      setTimeout(function(){
        $(".writing-space").hide();
        $(".review").show();
        $("#writing-submit").submit();
      }, 1000000);
    }
  }

  draftChecker() {
    if (this.mode === '3') {
      let tabooArray = [];
      for (var i = 0; i < this.exclude.length; i++) {
        if (this.draft.includes(this.exclude[i])) {
          tabooArray.push(this.exclude[i]);
          return false;
        }
      }
    }
  }

}
