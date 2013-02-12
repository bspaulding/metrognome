if ( !window.Metrognome ) { window.Metrognome = {}; }

window.Metrognome.TapTempoController = (function() {
  function bind(fn, scope) {
    return function() {
      return fn.apply(scope, arguments);
    }
  }

  function bindAll(object) {
    for ( var key in object ) {
      if ( 'function' === typeof object[key] ) {
        object[key] = bind(object[key], object);
      }
    }
  }

  function TapTempoController(element) {
    this.tapBufferSize = 3;
    this.tapEvents = [];

    bindAll(this);

    element.addEventListener('click', this.handleTapEvent);
  }

  TapTempoController.prototype.handleTapEvent = function(element) {
    var time = (new Date()).getTime();
    this.tapEvents.push(time);

    if ( this.tapEvents.length > this.tapBufferSize ) {
      this.tapEvents = this.tapEvents.slice(1, this.tapEvents.length);
    }

    this.recalculateTempo();
  }

  TapTempoController.prototype.recalculateTempo = function() {
    var sum = 0;

    for ( var i = 0; i < this.tapEvents.length - 1; i += 1 ) {
      var diff = this.tapEvents[(i + 1)] - this.tapEvents[i];
      sum += diff;
    }

    var averageMs = sum / (this.tapEvents.length - 1);

    this.setTempo(this.mspbToBpm(averageMs));
  }

  TapTempoController.prototype.mspbToBpm = function(mspb) {
    return parseInt(1 / (mspb/ 60000.0));
  },

  TapTempoController.prototype.setTempo = function(tempo) {
    this.tempo = tempo;

    if ( 'function' === typeof this.tempoChanged ) {
      this.tempoChanged(this.tempo);
    }
  }

  return TapTempoController;
}());
Metrognome.TapTempoController = (function() {
  function bind(fn, scope) {
    return function() {
      return fn.apply(scope, arguments);
    }
  }

  function bindAll(object) {
    for ( var key in object ) {
      if ( 'function' === typeof object[key] ) {
        object[key] = bind(object[key], object);
      }
    }
  }

  function TapTempoController(element) {
    this.tapBufferSize = 3;
    this.tapEvents = [];

    bindAll(this);

    element.addEventListener('click', this.handleTapEvent);
  }

  TapTempoController.prototype.handleTapEvent = function(element) {
    var time = (new Date()).getTime();
    this.tapEvents.push(time);

    if ( this.tapEvents.length > this.tapBufferSize ) {
      this.tapEvents = this.tapEvents.slice(1, this.tapEvents.length);
    }

    this.recalculateTempo();
  }

  TapTempoController.prototype.recalculateTempo = function() {
    var sum = 0;

    for ( var i = 0; i < this.tapEvents.length - 1; i += 1 ) {
      var diff = this.tapEvents[(i + 1)] - this.tapEvents[i];
      sum += diff;
    }

    var averageMs = sum / (this.tapEvents.length - 1);

    this.setTempo(this.mspbToBpm(averageMs));
  }

  TapTempoController.prototype.mspbToBpm = function(mspb) {
    return parseInt(1 / (mspb/ 60000.0));
  },

  TapTempoController.prototype.setTempo = function(tempo) {
    this.tempo = tempo;

    if ( 'function' === typeof this.tempoChanged ) {
      this.tempoChanged(this.tempo);
    }
  }

  return TapTempoController;
}());

