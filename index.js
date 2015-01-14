var five = require("johnny-five"),
    // or "./lib/johnny-five" when running from the source
    board = new five.Board(),
    button,
    potentiometer;


board.on("ready", function() {
  var led = new five.Led(3)
  // var button = new five.Button(8);
  var potentiometer = new five.Sensor({
  	pin: "A3",
  	freq: 250
  });

  // led.blink();

  this.repl.inject({
  	led: led,
  	// button: button,
  	pot: potentiometer
  });

 //  button.on('up', function(){
 //  	led.off();
 //  });

 //  button.on('hold', function(){
	// led.on();
 //  });

	potentiometer.on('data', function(){
		console.log(this.value, this.raw);
		led.brightness(this.value);
	});

});