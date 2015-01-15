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
  // var servo = new five.Servo(process.argv[2] || 10);
   var servo = new five.Servo({
    id: "MyServo",     // User defined id
    pin: 10,           // Which pin is it attached to?
    type: "standard",  // Default: "standard". Use "continuous" for continuous rotation servos
    range: [0,180],    // Default: 0-180
    fps: 100,          // Used to calculate rate of movement between positions
    isInverted: false, // Invert all specified positions
    startAt: 90,       // Immediately move to a degree
    center: true,      // overrides startAt if true and moves the servo to the center of the range
    specs: {           // Is it running at 5V or 3.3V?
      speed: five.Servo.Continuous.speeds["@5.0V"] 
    }
  });

  // led.blink();

  this.repl.inject({
  	led: led,
  	// button: button,
  	pot: potentiometer,
  	servo: servo
  });

 //  button.on('up', function(){
 //  	led.off();
 //  });

 //  button.on('hold', function(){
	// led.on();
 //  });

	// potentiometer.on('data', function(){
	// 	console.log(this.value, this.raw);
	// 	led.brightness(this.value);
	// });

	potentiometer.on('data', function(){
		servo.sweep();
	});

});

