// console.clear();

// const synth = new Tone.Synth().toMaster();
// // synth.oscillator.type = 'sine';
// const notes = [
// 	'C4','E4','G4',
// 	'C5','E5','G5'
// ];

// var index = 0;

// Tone.Transport.scheduleRepeat(time => {
// 	repeat(time);
// }, '8n');


// // Tone.Transport.bpm.value = 90;

// function repeat(time) {
// 	let note = notes[index % notes.length];
// 	synth.triggerAttackRelease(note, '8n', time);
// 	index++;
// }

// Tone.Transport.start();

// setTimeout(() => {
// 	Tone.Transport.stop();
// }, 5000)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!   sample script 1 above    !!!!!!!!!!!!!!!!!!!!!!!!!!!!





// console.clear();

// var monoSynth = new Tone.MonoSynth({
// 	"oscillator" : {
// 		"type" : "sine"
//  },
//  "envelope" : {
//  	"attack" : 0.1
//  }
// }).toMaster();


// const oscillator = new Tone.OmniOscillator(440, "triangle").toMaster();

// const drum = new Tone.MembraneSynth().toMaster();

// const metalSynth = new Tone.MetalSynth().toMaster();

// const membraneSynth = new Tone.MembraneSynth().toMaster();

// const FMSynth = new Tone.FMSynth().toMaster();

// const DuoSynth = new Tone.DuoSynth().toMaster();

// const AMSynth = new Tone.AMSynth().toMaster();

// const synth = new Tone.Synth({
// 	"oscillator" : {
// 		"type" : "triangle"
//  },
//  "envelope" : {
//  	"attack" : 0.1
//  }
// }).toMaster();

// synth.oscillator.type = 'sine';
// var noiseSynth = new Tone.NoiseSynth().toMaster();
// noiseSynth.set("noise.type", "brown");

// $(document).ready(function(){
// 	$("p").mousedown(function(){	
// 		synth.triggerAttackRelease("C4", .01);
// 	});
// });


// $(document).ready(function(){
// 	$("h1").mousedown(function(){
// 		oscillator.start("+0.01");
// 		oscillator.stop("+0.11");
// 	});
// });

// $(document).ready(function(){
// 	$("h2").mousedown(function(){
// 		monoSynth.triggerAttackRelease("A8", .1);
// 	});
// });

// $(document).ready(function(){
// 	$("h3").mousedown(function(){
// 		metalSynth.triggerAttackRelease("G1", .1);
// 	});
// });

// $(document).ready(function(){
// 	$("h4").mousedown(function(){
// 		membraneSynth.triggerAttackRelease("G4", .1);
// 	});
// });

// $(document).ready(function(){
// 	$("h5").mousedown(function(){
// 		FMSynth.triggerAttackRelease("G4", .1);
// 	});
// });

// $(document).ready(function(){
// 	$("h6").mousedown(function(){
// 		DuoSynth.triggerAttackRelease("A4", .1);
// 	});
// });

// $(document).ready(function(){
// 	$("div").mousedown(function(){
// 		AMSynth.triggerAttackRelease("G4", .1);
// 	});
// });

// $(document).ready(function(){
// 	$("span").mousedown(function(){
// 		drum.triggerAttackRelease(40);
// 		drum.triggerAttack(40);
// 	});
// });

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!   sample script 2 above    !!!!!!!!!!!!!!!!!!!!!!!!!!!!



