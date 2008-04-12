Date.Specification = new Specification({
  'Need sugarpak.js tests?': {
    setup: function() {},
    'true': {
      run: function() { },
      assert: function() { return true; }
    }
  }
});

$(document).ready( function() { Date.Specification.validate().show() } );