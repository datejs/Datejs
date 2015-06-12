if(typeof require !== 'undefined') {
  var Specification = require('../scripts/specification-converter.js');
}


Date.Specification = new Specification({
  'Overview': {
    setup: function() {  this.baseline = new Date('7/8/2004') },
    'July 8th, 2004 : Typical': {
      run: function() { this.date = Date.parse('July 8th, 2004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    'jul-08-04 : Abbreviated': {
      run: function() { this.date = Date.parse('jul-8-04') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '07/08/04 : Numeric': {
      run: function() { this.date = Date.parse('07/08/04') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '2004.07.08 : Separator': {
      run: function() { this.date = Date.parse('2004.07.08') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '7-8, \'04 : Random Curve ball': {
      run: function() { this.date = Date.parse('7-8, \'04') },
      assert: function() { return this.baseline.equals( this.date ) }      
    },
    '07/8/2004 : Leading Zeros': {
      run: function() { this.date = Date.parse('07/08/2004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '15-Jan-2004 : Custom': {
      run: function() { this.date = Date.parse('15-Jan-2004') },
      assert: function() { return new Date(2004,0,15).equals( this.date ) } 
    },
    '2004-07-08 : Sortable': {
      run: function() { this.date = Date.parse('2004-07-08') },
      assert: function() { return this.baseline.equals( this.date ) }
    }
  },

'Phrase Variations': {
    setup: function() {
        this.baseline = new Date(2004,6,1);
        this.baseline2 = new Date(2004,6,15);
    },
     '1-Jul-2004': {
       run: function() { this.date =  Date.parse('1-Jul-2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     '01-Jul-2004': {
       run: function() { this.date =  Date.parse('01-Jul-2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     }, 
     '01-Jul-04': {
       run: function() { this.date =  Date.parse('01-Jul-04') },
       assert: function() { return this.baseline.equals( this.date ) }
     },  
     '1-July-2004': {
       run: function() { this.date =  Date.parse('1-July-2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     '01-July-2004': {
       run: function() { this.date =  Date.parse('01-July-2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     }, 
     '01-July-04': {
       run: function() { this.date =  Date.parse('01-July-04') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     '15-July-2004': {
       run: function() { this.date =  Date.parse('15-July-2004') },
       assert: function() { return this.baseline2.equals( this.date ) }
     },
     '15-July-2004': {
       run: function() { this.date =  Date.parse('15-July-2004') },
       assert: function() { return this.baseline2.equals( this.date ) }
     }, 
     '15-July-04': {
       run: function() { this.date =  Date.parse('15-July-04') },
       assert: function() { return this.baseline2.equals( this.date ) }
     },
     'July 1, 2004': {
       run: function() { this.date =  Date.parse('July 1, 2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'July 1,2004': {
       run: function() { this.date =  Date.parse('July 1,2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'Jul 1, 2004': {
       run: function() { this.date =  Date.parse('Jul 1, 2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'Jul 1,2004': {
       run: function() { this.date =  Date.parse('Jul 1,2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'July 01, 2004': {
       run: function() { this.date =  Date.parse('July 01, 2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'July 01,2004': {
       run: function() { this.date =  Date.parse('July 01,2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'Jul 01, 2004': {
       run: function() { this.date =  Date.parse('Jul 01, 2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'Jul 01,2004': {
       run: function() { this.date =  Date.parse('Jul 01,2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },    
     'July 01, 04': {
       run: function() { this.date =  Date.parse('July 01, 04') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'July 01,04': {
       run: function() { this.date =  Date.parse('July 01,04') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'Jul 01, 04': {
       run: function() { this.date =  Date.parse('Jul 01, 04') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'Jul 01,04': {
       run: function() { this.date =  Date.parse('Jul 01,04') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'July 1st 2004': {
       run: function() { this.date =  Date.parse('July 1st 2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },  
     'July 2nd 2004': {
       run: function() { this.date =  Date.parse('July 2nd 2004') },
       assert: function() { return new Date(2004,6,2).equals( this.date ) }
     },  
     'July 3rd 2004': {
       run: function() { this.date =  Date.parse('July 3rd 2004') },
       assert: function() { return new Date(2004,6,3).equals( this.date ) }
     },  
     'July 4th 2004': {
       run: function() { this.date =  Date.parse('July 4th 2004') },
       assert: function() { return new Date(2004,6,4).equals( this.date ) }
     },  
     'July 15th 2004': {
       run: function() { this.date =  Date.parse('July 15th 2004') },
       assert: function() { return new Date(2004,6,15).equals( this.date ) }
     },  
     'July 21st 2004': {
       run: function() { this.date =  Date.parse('July 21st 2004') },
       assert: function() { return new Date(2004,6,21).equals( this.date ) }
     },  
     'July 22nd 2004': {
       run: function() { this.date =  Date.parse('July 22nd 2004') },
       assert: function() { return new Date(2004,6,22).equals( this.date ) }
     },
     'July 23rd 2004': {
       run: function() { this.date =  Date.parse('July 23rd 2004') },
       assert: function() { return new Date(2004,6,23).equals( this.date ) }
     },  
     'July 31st 2004': {
       run: function() { this.date =  Date.parse('July 31st 2004') },
       assert: function() { return new Date(2004,6,31).equals( this.date ) }
     }, 
     'Jul 1st 04': {
       run: function() { this.date =  Date.parse('Jul 1st 04') },
       assert: function() { return this.baseline.equals( this.date ) }
     },  
     'Jul 2nd 04': {
       run: function() { this.date =  Date.parse('Jul 2nd 04') },
       assert: function() { return new Date(2004,6,2).equals( this.date ) }
     },  
     'Jul 3rd 04': {
       run: function() { this.date =  Date.parse('Jul 3rd 04') },
       assert: function() { return new Date(2004,6,3).equals( this.date ) }
     },  
     'Jul 4th 04': {
       run: function() { this.date =  Date.parse('Jul 4th 04') },
       assert: function() { return new Date(2004,6,4).equals( this.date ) }
     },  
     'Jul 15th 04': {
       run: function() { this.date =  Date.parse('Jul 15th 04') },
       assert: function() { return new Date(2004,6,15).equals( this.date ) }
     },  
     'Jul 21st 04': {
       run: function() { this.date =  Date.parse('Jul 21st 04') },
       assert: function() { return new Date(2004,6,21).equals( this.date ) }
     },  
     'Jul 22nd 04': {
       run: function() { this.date =  Date.parse('Jul 22nd 04') },
       assert: function() { return new Date(2004,6,22).equals( this.date ) }
     },
     'Jul 23rd 04': {
       run: function() { this.date =  Date.parse('Jul 23rd 04') },
       assert: function() { return new Date(2004,6,23).equals( this.date ) }
     },  
     'Jul 31st 04': {
       run: function() { this.date =  Date.parse('Jul 31st 04') },
       assert: function() { return new Date(2004,6,31).equals( this.date ) }
     },
     'Thu July 1, 2004': {
       run: function() { this.date =  Date.parse('Thu July 1, 2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     }, 
     'Fri July 2, 2004': {
       run: function() { this.date =  Date.parse('Fri July 2, 2004') },
       assert: function() { return new Date(2004,6,2).equals( this.date ) }
     },        
     'Sat July 3, 2004': {
       run: function() { this.date =  Date.parse('Sat July 3, 2004') },
       assert: function() { return new Date(2004,6,3).equals( this.date ) }
     },
     'jul-1-2004': {
       run: function() { this.date =  Date.parse('jul-1-2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'jul-1-04': {
       run: function() { this.date =  Date.parse('jul-1-04') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'jul-01-2004': {
       run: function() { this.date =  Date.parse('jul-01-2004') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'jul-01-04': {
       run: function() { this.date =  Date.parse('jul-01-04') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     'jul-15-2004': {
       run: function() { this.date =  Date.parse('jul-15-2004') },
       assert: function() { return this.baseline2.equals( this.date ) }
     },
     'jul-15-04': {
       run: function() { this.date =  Date.parse('jul-15-04') },
       assert: function() { return this.baseline2.equals( this.date ) }
     },
     'jul-15-2004': {
       run: function() { this.date =  Date.parse('jul-15-2004') },
       assert: function() { return this.baseline2.equals( this.date ) }
     },
     'jul-15-04': {
       run: function() { this.date =  Date.parse('jul-15-04') },
       assert: function() { return this.baseline2.equals( this.date ) }
     }
  },
'Separator Variations': {
    setup: function() {
        this.baseline = new Date(2004,6,1);
        this.baseline2 = new Date(2004,6,15);
    },
    '7/1/2004': {
      run: function() { this.date =  Date.parse('7/1/2004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '07/01/2004': {
      run: function() { this.date =  Date.parse('07/01/2004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '07/01/04': {
      run: function() { this.date =  Date.parse('07/01/04') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '7/1/04': {
      run: function() { this.date =  Date.parse('7/1/04') },
      assert: function() { return this.baseline.equals( this.date ) }
    },   
    '7/15/2004': {
      run: function() { this.date =  Date.parse('7/15/2004') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '07/15/2004': {
      run: function() { this.date =  Date.parse('07/15/2004') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '07/15/04': {
      run: function() { this.date =  Date.parse('07/15/04') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '7/15/04': {
      run: function() { this.date =  Date.parse('7/15/04') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '7-1-2004': {
      run: function() { this.date =  Date.parse('7-1-2004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '07-01-2004': {
      run: function() { this.date =  Date.parse('07-01-2004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '07-01-04': {
      run: function() { this.date =  Date.parse('07-01-04') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '7-1-04': {
      run: function() { this.date =  Date.parse('7-1-04') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '7-15-2004': {
      run: function() { this.date =  Date.parse('7-15-2004') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '07-15-2004': {
      run: function() { this.date =  Date.parse('07-15-2004') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '07-15-04': {
      run: function() { this.date =  Date.parse('07-15-04') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '7-15-04': {
      run: function() { this.date =  Date.parse('7-15-04') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '7.1.2004': {
      run: function() { this.date =  Date.parse('7.1.2004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '07.01.2004': {
      run: function() { this.date =  Date.parse('07.01.2004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '07.01.04': {
      run: function() { this.date =  Date.parse('07.01.04') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '7.1.04': {
      run: function() { this.date =  Date.parse('7.1.04') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '7.15.2004': {
      run: function() { this.date =  Date.parse('7.15.2004') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '07.15.2004': {
      run: function() { this.date =  Date.parse('07.15.2004') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '07.15.04': {
      run: function() { this.date =  Date.parse('07.15.04') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '7.15.04': {
      run: function() { this.date =  Date.parse('7.15.04') },
      assert: function() { return this.baseline2.equals( this.date ) }
    }
  },
'Sortable Variations': {
     setup: function() {
         this.baseline = new Date(2004,6,1);
         this.baseline2 = new Date(2004,6,15);
    },
    '2004-07-01': {
       run: function() { this.date =  Date.parse('2004-07-01') },
       assert: function() { return this.baseline.equals( this.date ) }
    },
    '2004-07-15': {
       run: function() { this.date =  Date.parse('2004-07-15') },
       assert: function() { return this.baseline2.equals( this.date ) }
     },
     '2004/7/1': {
       run: function() { this.date =  Date.parse('2004/7/1') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     '2004/07/01': {
       run: function() { this.date =  Date.parse('2004/07/01') },
       assert: function() { return this.baseline.equals( this.date ) }
     },
     '2004/7/15': {
       run: function() { this.date =  Date.parse('2004/7/15') },
       assert: function() { return this.baseline2.equals( this.date ) }
     },
     '2004/07/15': {
       run: function() { this.date =  Date.parse('2004/07/15') },
       assert: function() { return this.baseline2.equals( this.date ) }
     }
   },
   'Numeric Dates': {
    setup: function() {
        this.baseline = new Date(2004,6,1);
        this.baseline2 = new Date(2004,6,15);
    },
        
    '07012004': {
      run: function() { this.date =  Date.parse('07012004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
      

    '07152004': {
      run: function() { this.date =  Date.parse('07152004') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '7152004': {
      run: function() { this.date =  Date.parse('7152004') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
  },

    'Fail -- pattern "d" does not handle single numbers in ambiguous contexts' : {
      setup: function() {
        this.baseline = new Date(2004,6,1);
        this.baseline2 = new Date(2004,6,15);
    },
      '712004': {
      run: function() { 
        this.date =  Date.parseExact('712004', 'Mdyyyy') 
      },
      assert: function() { 
        return this.baseline.equals( this.date ) 
      }
    },
    '7104': {
      run: function() { 
        this.date =  Date.parse('7104', { format : "Mdyy" } ) 
      },
      assert: function() { 
        return this.baseline.equals( this.date ) 
      }
    },  

    '71504': {
      run: function() { 
        this.date =  Date.parse('71504', { format : "Mdyy" } ) 
      },
      assert: function() { 
        return this.baseline2.equals( this.date ) 
      }
    }, 
    }    
});

