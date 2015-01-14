var five = require("johnny-five"),
    // or "./lib/johnny-five" when running from the source
    board = new five.Board(),
    button;


board.on("ready", function() {
  var led = new five.Led(3)
  var button = new five.Button(8);

  // led.blink();

  this.repl.inject({
  	led: led,
  	button: button
  });

  button.on('up', function(){
  	led.off();
  });

  button.on('hold', function(){
	led.on();
  });

});