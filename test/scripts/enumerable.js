var Hash = function(object) {
  if (object) {
    for(var k in object) { if (!(typeof this[k]=='function')) { this[k] = object[k] } }
  }
};
Hash.convert = function(object) {
  for( var k in Hash.prototype ) { object[k] = Hash.prototype[k] }; return object; 
};
Hash.prototype = {
  each: function( fn ) { 
    for( var k in this ) {
      if (! ( typeof this[k] == 'function' )) { fn({0:k, 1: this[k], key: k, value: this[k]}) }
    }
    return this; 
  },
  merge: function( hash ) {
    var self = this;
    new Hash(hash).each( function(item) { self[item.key] = item.value }); return this;
  }
};
Array.convert = function(object) { 
  if (object instanceof Array ) { return object }
  else if (object.toArray) { return object.toArray() }
  else {
    var rval = []; for(var i = 0; i<object.length; i++ ) { rval[i] = object[i] };
    return rval;
  }
};
Array.prototype.each = function( fn ) {
  for(var i = 0; i<this.length; i++) { fn(this[i]) }; return this;
};
Array.prototype.flatten = function() {
  var r = new Array(); 
  for(var i = 0;i<this.length;i++) {
    if ( this[i] instanceof Array ) {
      var x = this[i].flatten();
      for(j=0;j<x.length;j++) { r.push(x[j]); }
    } else { r.push(this[i]); }
  }
  return r;
};
Array.prototype.compact = function() {
  var r = new Array(); 
  for(var i=0;i<this.length;i++) { 
    if (this[i]!=null) { r.push(this[i]); } 
  }
  return r;
};
var Enumerable = {
  aggregate: function( rval, fn ) { 
    this.each( function( x ) { rval = fn(rval,x) } ); return rval; 
  },
  filter: function( fn ) {
    var r = []; this.each( function(x) { if (fn(x)) { r.push(x) } }); return r;
  },
  find: function( fn ) {
    var rval = null;
    this.each( function(x) { if (!rval && fn(x) ) { rval = x } } ); return rval;
  },
  map: function( fn ) {
    var results = []; this.each( function( x ) { results.push( fn(x) ) });
    return results;
  }
};
Enumerable.inject = Enumerable.aggregate;
Module( Array ).extend( Enumerable );
Module( Hash ).extend( Enumerable );
