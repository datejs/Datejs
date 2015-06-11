Date.Specification = new Specification({
  'Specific Format': {
    setup: function() {
        this.baseline = new Date(2004,6,1);
        this.baseline2 = new Date(2004,6,15);
    },
    '2008/1/1 : "yyyy/M/d"': {
      run: function() { this.date = Date.parseExact('2008/1/1', "yyyy/M/d") },
      assert: function() { return new Date(2008, 0, 1).equals(this.date) }
    },
    '2008/1/5 : "yyyy/M/d"': {
      run: function() { this.date = Date.parseExact('2008/1/5', "yyyy/M/d") },
      assert: function() { return new Date(2008, 0, 5).equals(this.date) }
    },
    '2008/1/31 : "yyyy/M/d"': {
      run: function() { this.date = Date.parseExact('2008/1/31', "yyyy/M/d") },
      assert: function() { return new Date(2008, 0, 31).equals(this.date) }
    },    
    '04/07/15 : "yy/MM/dd"': {
      run: function() { this.date = Date.parseExact('04/07/15', "yy/MM/dd" ) },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '04/7/15 : "yy/M/d"': {
      run: function() { this.date = Date.parseExact('04/7/15', "yy/M/d" ) },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '2004/1/7 : "yyyy/d/M"': {
      run: function() { this.date = Date.parseExact('2004/1/7', "yyyy/d/M" ) },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '2004/01/07 : "yyyy/dd/MM"': {
      run: function() { this.date = Date.parseExact('2004/01/07', "yyyy/dd/MM" ) },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '04/01/07 : "yy/dd/MM"': {
      run: function() { this.date = Date.parseExact('04/01/07', "yy/dd/MM" ) },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '04/1/7 : "yy/d/M"': {
      run: function() { this.date = Date.parseExact('04/1/7', "yy/d/M" ) },
      assert: function() { return this.baseline.equals( this.date ) }
    },   
    '2004/15/7 : "yyyy/d/M"': {
      run: function() { this.date = Date.parseExact('2004/15/7', "yyyy/d/M" ) },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '2004/15/07 : "yyyy/dd/MM"': {
      run: function() { this.date = Date.parseExact('2004/15/07', "yyyy/dd/MM" ) },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '04/15/07 : "yy/dd/MM"': {
      run: function() { this.date = Date.parseExact('04/15/07', "yy/dd/MM" ) },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '04/15/7 : "yy/d/M"': {
      run: function() { this.date = Date.parseExact('04/15/7', "yy/d/M" ) },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '1/7/2004 : "d/M/yyyy"': {
      run: function() { this.date = Date.parseExact('1/7/2004', 'd/M/yyyy' ) },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '01/07/2004 : "dd/MM/yyyy"': {
      run: function() { this.date = Date.parseExact('01/07/2004', 'dd/MM/yyyy' ) },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '01/07/04 : "dd/MM/yy"': {
      run: function() { this.date = Date.parseExact('01/07/04', 'dd/MM/yy' ) },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '15/7/2004 : "d/M/yyyy"': {
      run: function() { this.date = Date.parseExact('15/7/2004', 'd/M/yyyy' ) },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '15/07/2004 : "d/M/yyyy"': {
      run: function() { this.date = Date.parseExact('15/07/2004', 'd/M/yyyy' ) },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '15/07/04 : "d/MM/yy"': {
      run: function() { this.date = Date.parseExact('15/07/04', 'd/MM/yy' ) },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
	'2004 : "yyyy"': {
      run: function() { this.date = Date.parseExact('2004', 'yyyy' ) },
      assert: function() { return Date.today().set({ year: 2004, day: 1 }).equals( this.date ) }
    },
    'July 2004 : "MMMM, yyyy"': {
      run: function() { this.date = Date.parseExact('July 2004', 'MMMM yyyy') },
      assert: function() { 
				return new Date(2004, 6, 1).equals( this.date );
			}
    },
    'March 15, 2004 : "MMMM d, yyyy"': {
      run: function() { this.date = Date.parseExact('March 15, 2004', 'MMMM d, yyyy') },
      assert: function() { 
				return new Date(2004, 2, 15).equals( this.date );
			}
    },
    '00:15 pm : "hh:mm tt"': {
      run: function() { this.date = Date.parseExact('00:15 pm', 'hh:mm tt').set({millisecond: 0, second: 0}) },
      assert: function() {
                return new Date().set({millisecond: 0, hour: 0, minute: 15, second: 0}).equals(this.date);
			}
    },
    '12:15 am : "hh:mm tt"': {
      run: function() { this.date = Date.parseExact('12:15 am', 'hh:mm tt').set({millisecond: 0, second: 0}) },
      assert: function() {
                return new Date().set({millisecond: 0, hour: 0, minute: 15, second: 0}).equals(this.date);
			}
    },
    '12:15 pm : "hh:mm tt"': {
      run: function() { this.date = Date.parseExact('12:15 pm', 'hh:mm tt').set({millisecond: 0, second: 0}) },
      assert: function() {
                return new Date().set({millisecond: 0, hour: 12, minute: 15, second: 0}).equals(this.date);
			}
    }    
  }
});

