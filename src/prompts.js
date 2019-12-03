export default class StoryPrompts {
  constructor() {
    this.prompts = ["a mailwoman who is obsessed with the color yellow", "a man who could escape from any and all handcuffs", "a plane that flies through multiple dimensions", "a dinosaur that can swim and fly", "a murderous, miniature cactus", "a cat that can read", "a haunted statue", "the Great Depression", "the apocalypse", "Zombies", "Travis' evil twin, Clavis", "Trump's toupee", "the internet turning off", "the ocean rising 5 feet", "the amazon rainforest burning down", "evil kittens", "all the guns on earth disapperaing", "sleeper agents at the DMV", "angry muffins", "a car with a mind of its own", "a politician who wants to abolish television", "humans losing the ability to smell", "gravity being reversed", "the Cuban Missile Crisis going nuclear", "plastic never being invented", "your best friend winning the lottery", "losing your family to scurvy", "Seattle being overrun by drunk moose", "creepy noises coming from your basement", "an itch that won't go away", "werewolves at the prom", "aliens abducting everybody whose name starts with W", "nuclear bomb going off in Moscow", "World War 3", "bees going extinct", "lions taking over the world", "spontaneous combustion in humans", "demonic salad enslaving mankind"];
  }
  promptChoose() {
    let index = Math.floor(this.prompts.length*Math.random())+1;
    console.log(index);
    let prompt = this.prompts[index];
    console.log(prompt);
    return prompt;
  }
}
