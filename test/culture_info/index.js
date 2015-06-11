Date.Specification = new Specification({
  'Overview': {
    setup: function() {  this.baseline = new Date('7/8/2004') },
    'Julio 8, 2004 : Espanol': {
        run: function() { this.date = Date.parse( 'Julio 8, 2004' ) },
        assert: function() { return this.baseline.equals( this.date ) }      
    }
  }
});

