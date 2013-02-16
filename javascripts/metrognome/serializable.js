if ( !window.Metrognome ) { window.Metrognome = {}; }

window.Metrognome.Serializable = {
  all: function() {},
  save: function() {},

  attributes: function() {
    var attributes = {};

    for ( var key in this ) {
      if ( this.hasOwnProperty(key) && 'function' !== typeof this[key] ) {
        attributes[key] = this[key];
      }
    }

    return attributes;
  },

  toJSON: function() {
    return JSON.stringify(this.attributes());
  }
}
