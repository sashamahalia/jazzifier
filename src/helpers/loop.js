import * as Tone from 'tone'

const synth = new Tone.PolySynth(Tone.Synth).toDestination();

const chord1 = ["C3", "E4", "G4"];
const chord2 = ["D3", "F4", "A4"];
const chord3 = ["E3", "G4", "B4"];
const chord4 = ["F3", "A4", "C4"];


const mainChords = [
  {'time': '0:0', 'note': chord3, 'duration': '1m'},
  {'time': '2:0', 'note': chord4, 'duration': '1m'},
  {'time': '3:0', 'note': chord2, 'duration': '1m'},
  {'time': '4:0', 'note': chord1, 'duration': '1m'},
];

export const loop = new Tone.Part((time, value) => {
    console.log(time);
    synth.triggerAttackRelease(value.note, value.duration, time);
}, mainChords).start(0);

loop.loopStart = 0
loop.loopEnd = "4m";
loop.loop = true;

 