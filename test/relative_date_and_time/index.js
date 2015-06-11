if(typeof require !== 'undefined') {
  var Specification = require('../scripts/specification-converter.js');
}


Date.Specification = new Specification({
  '@': {
    setup: function() { },
    'monday @ 8': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 8 }).equals( Date.parse('monday @ 8') ) }
    },
    'monday @ 8a': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 8 }).equals( Date.parse('monday @ 8a') ) }
    },
    'monday @ 8am': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 8 }).equals( Date.parse('monday @ 8am') ) }
    },
    'monday @ 8 a.m.': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 8 }).equals( Date.parse('monday @ 8 a.m.') ) }
    },    
    'monday @ 8:15': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 8, minute: 15 }).equals( Date.parse('monday @ 8:15') ) }
    },
    'monday @ 8p': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 20 }).equals( Date.parse('monday @ 8p') ) }
    },
    'monday @ 8pm': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 20 }).equals( Date.parse('monday @ 8pm') ) }
    },
    'monday @ 8 p.m.': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 20 }).equals( Date.parse('monday @ 8 p.m.') ) }
    },    
    'monday @ 20:15': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 20, minute: 15 }).equals( Date.parse('monday @ 20:15') ) }
    },
    'sunday @ 8': {
      run: function() { },
      assert: function() { return Date.sunday().set({ hour: 8 }).equals( Date.parse('sunday @ 8') ) }
    },
    'sunday @ 8a': {
      run: function() { },
      assert: function() { return Date.sunday().set({ hour: 8 }).equals( Date.parse('sunday @ 8a') ) }
    },
    'sunday @ 8am': {
      run: function() { },
      assert: function() { return Date.sunday().set({ hour: 8 }).equals( Date.parse('sunday @ 8am') ) }
    },
    'sunday @ 8 a.m.': {
      run: function() { },
      assert: function() { return Date.sunday().set({ hour: 8 }).equals( Date.parse('sunday @ 8 a.m.') ) }
    },    
    'sunday @ 8:15': {
      run: function() { },
      assert: function() { return Date.sunday().set({ hour: 8, minute: 15 }).equals( Date.parse('sunday @ 8:15') ) }
    },
    'sunday @ 8p': {
      run: function() { },
      assert: function() { return Date.sunday().set({ hour: 20 }).equals( Date.parse('sunday @ 8p') ) }
    },
    'sunday @ 8pm': {
      run: function() { },
      assert: function() { return Date.sunday().set({ hour: 20 }).equals( Date.parse('sunday @ 8pm') ) }
    },
    'sunday @ 8 p.m.': {
      run: function() { },
      assert: function() { return Date.sunday().set({ hour: 20 }).equals( Date.parse('sunday @ 8 p.m.') ) }
    },    
    'sunday @ 20:15': {
      run: function() { },
      assert: function() { return Date.sunday().set({ hour: 20, minute: 15 }).equals( Date.parse('sunday @ 20:15') ) }
    }
  },
'at': {
    setup: function() { },
    'monday at 8': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 8 }).equals( Date.parse('monday at 8') ) }
    },
    'monday at 8a': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 8 }).equals( Date.parse('monday at 8a') ) }
    },
    'monday at 8am': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 8 }).equals( Date.parse('monday at 8am') ) }
    },
    'monday at 8 a.m.': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 8 }).equals( Date.parse('monday at 8 a.m.') ) }
    },    
    'monday at 8:15': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 8, minute: 15 }).equals( Date.parse('monday at 8:15') ) }
    },
    'monday at 8p': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 20 }).equals( Date.parse('monday at 8p') ) }
    },
    'monday at 8pm': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 20 }).equals( Date.parse('monday at 8pm') ) }
    },
    'monday at 8 p.m.': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 20 }).equals( Date.parse('monday at 8 p.m.') ) }
    },    
    'monday at 20:15': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 20, minute: 15 }).equals( Date.parse('monday at 20:15') ) }
    },
    'sunday at 8': {
      run: function() { },
      assert: function() { return Date.sunday().set({ hour: 8 }).equals( Date.parse('sunday at 8') ) }
    },
    'sunday at 8a': {
      run: function() { },
      assert: function() { return Date.sunday().set({ hour: 8 }).equals( Date.parse('sunday at 8a') ) }
    },
    'sunday at 8am': {
      run: function() { },
      assert: function() { return Date.sunday().set({ hour: 8 }).equals( Date.parse('sunday at 8am') ) }
    },
    'sunday at 8 a.m.': {
      run: function() { },
      assert: function() { return Date.sunday().set({ hour: 8 }).equals( Date.parse('sunday at 8 a.m.') ) }
    },    
    'sunday at 8:15': {
      run: function() { },
      assert: function() { return Date.sunday().set({ hour: 8, minute: 15 }).equals( Date.parse('sunday at 8:15') ) }
    },
    'sunday at 8p': {
      run: function() { },
      assert: function() { return Date.sunday().set({ hour: 20 }).equals( Date.parse('sunday at 8p') ) }
    },
    'sunday at 8pm': {
      run: function() { },
      assert: function() { return Date.sunday().set({ hour: 20 }).equals( Date.parse('sunday at 8pm') ) }
    },
    'sunday at 8 p.m.': {
      run: function() { },
      assert: function() { return Date.sunday().set({ hour: 20 }).equals( Date.parse('sunday at 8 p.m.') ) }
    },    
    'sunday at 20:15': {
      run: function() { },
      assert: function() { return Date.sunday().set({ hour: 20, minute: 15 }).equals( Date.parse('sunday at 20:15') ) }
    }
  },
'on': {
    setup: function() { },
    '12a on monday': {
      run: function() { },
      assert: function() { return Date.monday().equals( Date.parse('12a on monday') ) }
    },
    '12am on monday': {
      run: function() { },
      assert: function() { return Date.monday().equals( Date.parse('12am on monday') ) }
    },
    '12 am on monday': {
      run: function() { },
      assert: function() { return Date.monday().equals( Date.parse('12 am on monday') ) }
    },
    '12 a.m on monday': {
      run: function() { },
      assert: function() { return Date.monday().equals( Date.parse('12 a.m on monday') ) }
    },    
    '12p on monday': {
      run: function() { },
      assert: function() { return Date.monday().set({hour: 12}).equals( Date.parse('12p on monday') ) }
    }, 
    '12pm on monday': {
      run: function() { },
      assert: function() { return Date.monday().set({hour: 12}).equals( Date.parse('12pm on monday') ) }
    },
    '12 pm on monday': {
      run: function() { },
      assert: function() { return Date.monday().set({hour: 12}).equals( Date.parse('12 pm on monday') ) }
    },
    '12 p.m. on monday': {
      run: function() { },
      assert: function() { return Date.monday().set({hour: 12}).equals( Date.parse('12 p.m. on monday') ) }
    },          
    '8a on monday': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 8 }).equals( Date.parse('8a on monday') ) }
    }, 
    '8am on monday': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 8 }).equals( Date.parse('8am on monday') ) }
    },           
    '8 a.m. on monday': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 8 }).equals( Date.parse('8 a.m. on monday') ) }
    },           
    '8:15 on monday': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 8, minute: 15 }).equals( Date.parse('8:15 on monday') ) }
    }, 
    '8:15am on monday': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 8, minute: 15 }).equals( Date.parse('8:15am on monday') ) }
    },
    '8:15 am on monday': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 8, minute: 15 }).equals( Date.parse('8:15 am on monday') ) }
    },
    '8p on monday': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 20 }).equals( Date.parse('8p on monday') ) }
    }, 
    '8pm on monday': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 20 }).equals( Date.parse('8pm on monday') ) }
    },           
    '8 p.m. on monday': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 20 }).equals( Date.parse('8 p.m. on monday') ) }
    },           
    '20:15 on monday': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 20, minute: 15 }).equals( Date.parse('20:15 on monday') ) }
    }, 
    '8:15pm on monday': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 20, minute: 15 }).equals( Date.parse('8:15pm on monday') ) }
    },
    '8:15 pm on monday': {
      run: function() { },
      assert: function() { return Date.monday().set({ hour: 20, minute: 15 }).equals( Date.parse('8:15 pm on monday') ) }
    }
  }      
});

