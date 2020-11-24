var app = document.getElementById('textAnim');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  deleteSpeed: 50,
});

typewriter
  .pauseFor(1800)
  .typeString('<span class=" h4">Le n° 1 des ventes sur <span>')
  .pauseFor(300)
  .typeString('<span class=" h4" style="color: blue;"><strong> Playstation </strong> <span>')
  .pauseFor(300)
  .deleteChars(13)
  .typeString('<span class=" h4" style="color: Green;"><strong>Xbox</strong> </span>')
  .pauseFor(300)
  .deleteChars(5)
  .typeString('<strong> <span class=" h4" style="color: red;"><strong> Nintendo</span></strong>')
  .pauseFor(300)
  .deleteChars(8)
  .typeString('<strong> <span class=" h4" style="color: black;"> <strong> PC</span></strong>')
  .pauseFor(1000)
  .start();