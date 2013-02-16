window.addEventListener('DOMContentLoaded', function() {
  new FastClick(document.body);

  metronome = new Metrognome.Metronome();
  var toggleButton = document.querySelector('input[name="toggle_playing"]');
  toggleButton.addEventListener('click', metronome.togglePlaying);

  var tapButton = document.querySelector('input[name="tap_tempo"]');
  var controller = new Metrognome.TapTempoController(tapButton);
  controller.tempoChanged = function(tempo) {
    if ( !isNaN(tempo) ) {
      tapButton.value = "Tap Tempo: " + tempo + 'bpm';
      metronome.tempo = tempo;
    }
  }

  var watf = new Metrognome.Song("We Are The Free", 140);
  watf.save();
});

