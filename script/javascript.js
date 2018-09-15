console.clear();

var mic, recorder, soundFile;

var state = 0; // mousePress will increment from Record, to Stop, to Play

function setup() {
	createCanvas(1600, 1000);
	tint(255,127)
	  // create an audio in
	  mic = new p5.AudioIn();

	  // users must manually enable their browser microphone for recording to work properly!
	  mic.start();

	  // create a sound recorder
	  recorder = new p5.SoundRecorder();

	  // connect the mic to the recorder
	  recorder.setInput(mic);

	  // create an empty sound file that we will use to playback the recording
	  soundFile = new p5.SoundFile();
}
function draw() {
	clear();
	background(220, 10);
  	rect(100,100,100);
	var vol = mic.getLevel();
	ellipse(850, 350, 600, vol * 200);
	console.log(vol);
}
function keyPressed() {
	if(keyCode == 81) {
	  // use the '.enabled' boolean to make sure user enabled the mic (otherwise we'd record silence)
	  if (state === 0 && mic.enabled) {

	    // Tell recorder to record to a p5.SoundFile which we will use for playback
	    recorder.record(soundFile);

	    text('Recording now! Click to stop.', 20, 20);
	    state++;
	  }

	  else if (state === 1) {
	    recorder.stop(); // stop recorder, and send the result to soundFile

	    text('Recording stopped. Click to play & save', 20, 20);
	    state++;
	  }

	  else if (state === 2) {
	    soundFile.play(); // play the result!
	    saveSound(soundFile, 'mySound.wav'); // save file
	    state = 0;
	  }
	}
}
// microphone/ RECORD above

const membraneSynth = new Tone.MembraneSynth().toMaster();

const synth = new Tone.Synth({
	"oscillator" : {
		"type" : "triangle"
 },
 "envelope" : {
 	"attack" : 0.1
 }
}).toMaster();

$(document).ready(function(){
	$("#membraneSynth").mousedown(function(){
		membraneSynth.triggerAttackRelease("C4", .1);
	});
});

$(document).ready(function() {
	$("#synth").mousedown(function() {
		synth.triggerAttackRelease("C4", .1);
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="Base1.wav";
	$("#Base1").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="Base2.wav";
	$("#Base2").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="Base3.wav";
	$("#Base3").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="Base4.wav";
	$("#Base4").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="Base5.wav";
	$("#Base5").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="Drum.wav";
	$("#Drum").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="Kick.wav";
	$("#Kick").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="slowedClap.wav";
	$("#slowedClap").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="flare.wav";
	$("#flare").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="clap.wav";
	$("#clap").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="tick.wav";
	$("#tick").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});


$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="tap.wav";
	$("#tap").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="ting.wav";
	$("#ting").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="shake.wav";
	$("#shake").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="fancy.wav";
	$("#fancy").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="gun.wav";
	$("#gun").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="bongo.wav";
	$("#bongo").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="bonga.wav";
	$("#bonga").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="click.wav";
	$("#click").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="bomp.wav";
	$("#bomp").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="bamp.wav";
	$("#bamp").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="guitar1.wav";
	$("#guitar1").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="guitar2.wav";
	$("#guitar2").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="guitar3.wav";
	$("#guitar3").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="guitar4.wav";
	$("#guitar4").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="guitar5.wav";
	$("#guitar5").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="dazzle1.wav";
	$("#dazzle1").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="dazzle2.wav";
	$("#dazzle2").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="dazzle3.wav";
	$("#dazzle3").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="dazzle4.wav";
	$("#dazzle4").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src="dazzle5.wav";
	$("#dazzle5").mousedown(function() {
        obj.currentTime = 0;
        obj.play();
    });
});
