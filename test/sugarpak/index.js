if(typeof require !== 'undefined') {
  var Specification = require('../scripts/specification-converter.js');
}


Date.Specification = new Specification({
    
  'Need more sugarpak.js tests?': {
    setup: function() {},
    'true': {
      run: function() { },
      assert: function() { 
        return true;
      }
    }
   },
    
    
  '.same()': {
    setup: function() {},
    'same year(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().year();
      }
    },
    'same month(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().month();
      }
    },
    'same week(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().week();
      }
    },
    'same day(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().day();
      }
    },
    'same hour(Date.today())': {
      run: function() { },
      assert: function() { 
        return !Date.today().same().hour();
      }
    },
    'same minute(Date.today())': {
      run: function() { },
      assert: function() { 
        return !Date.today().same().minute();
      }
    },
    'same second(Date.today())': {
      run: function() { },
      assert: function() { 
        return !Date.today().same().second();
      }
    },
    'same millisecond(Date.today())': {
      run: function() { },
      assert: function() { 
        return !Date.today().same().millisecond();
      }
    },
    'same year(new Date())': {
      run: function() { },
      assert: function() { 
        return new Date().same().year();
      }
    },
    'same month(new Date())': {
      run: function() { },
      assert: function() { 
        return new Date().same().month();
      }
    },
    'same week(new Date())': {
      run: function() { },
      assert: function() { 
        return new Date().same().week();
      }
    },
    'same day(new Date())': {
      run: function() { },
      assert: function() { 
        return new Date().same().day();
      }
    },
    'same hour(new Date())': {
      run: function() { },
      assert: function() { 
        return new Date().same().hour();
      }
    },
    'same minute(new Date())': {
      run: function() { },
      assert: function() { 
        return new Date().same().minute();
      }
    },
    'same second(new Date())': {
      run: function() { },
      assert: function() { 
        return new Date().same().second();
      }
    },
    'same millisecond(new Date())': {
      run: function() { },
      assert: function() { 
        return new Date().same().millisecond();
      }
    },



    'same year2(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().year(Date.today());
      }
    },
    'same month2(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().month(Date.today());
      }
    },
    'same week2(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().week(Date.today());
      }
    },
    'same day2(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().day(Date.today());
      }
    },
    'same hour2(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().hour(Date.today());
      }
    },
    'same minute2(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().minute(Date.today());
      }
    },
    'same second2(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().second(Date.today());
      }
    },
    'same millisecond2(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().millisecond(Date.today());
      }
    },

      
      
    'same year2(new Date())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().year(new Date());
      }
    },
    'same month2(new Date())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().month(new Date());
      }
    },
    'same week2(new Date())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().week(new Date());
      }
    },
    'same day2(new Date())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().day(new Date());
      }
    },
    'same hour2(new Date())': {
      run: function() { },
      assert: function() { 
        return !Date.today().same().hour(new Date());
      }
    },
    'same minute2(new Date())': {
      run: function() { },
      assert: function() { 
        return !Date.today().same().minute(new Date());
      }
    },
    'same second2(new Date())': {
      run: function() { },
      assert: function() { 
        return !Date.today().same().second(new Date());
      }
    },
    'same millisecond2(new Date())': {
      run: function() { },
      assert: function() { 
        return !Date.today().same().millisecond(new Date());
      }
    }
          
  }
});

