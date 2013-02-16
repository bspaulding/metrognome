if ( !window.Metrognome ) { window.Metrognome = {}; }

window.Metrognome.Song = (function() {
  function bind(fn, scope) {
    return function() {
      return fn.apply(scope, arguments);
    }
  }

  function mixin(target, source) {
    for ( var key in source ) {
      target[key] = bind(source[key], target);
    }
  }

  function Song(name, bpm) {
    this.name = name;
    this.bpm = bpm;

    mixin(this, Metrognome.Serializable);
  }

  return Song;
}());
