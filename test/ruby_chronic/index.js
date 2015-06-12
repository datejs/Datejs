if(typeof require !== 'undefined') {
  var Specification = require('../scripts/specification-converter.js');
}


Date.Specification = new Specification({
  'Pass': {
    setup: function() { 
        this.now = new Date();
        this.now.setMilliseconds(0);
    },
    'thursday': {
      run: function() { },
      assert: function() { return Date.thursday().equals( Date.parse('thursday') ) }
    },

    'november': {
      run: function() { },
      assert: function() { return Date.november().equals( Date.parse('november') ) }
    },    
    'friday 1pm': {
      run: function() { },
      assert: function() { return Date.friday().set({hour:13}).equals( Date.parse('friday 1pm') ) }
    },    
    'mon 2:35': { 
        run: function() { },
        assert: function() { return Date.monday().set({hour:2, minute:35}).equals( Date.parse('mon 2:35') ) }
    },
    '4pm': {
      run: function() { },
      assert: function() { return Date.today().set({hour:16}).equals( Date.parse('4pm') ) }
    },
    'yesterday': {
      run: function() { },
      assert: function() { return Date.today().add(-1).day().equals( Date.parse('yesterday') ) }
    }, 
    'today': {
      run: function() { },
      assert: function() { return Date.today().equals( Date.parse('today') ) }
    },
    'tomorrow': {
      run: function() { },
      assert: function() { return Date.today().add(1).day().equals( Date.parse('tomorrow') ) }
    },  
    'next month': {
      run: function() { },
      assert: function() { return Date.today().next().month().equals( Date.parse('next month') ) }
    },                     
   '5 months before now': {
      run: function() { },
      assert: function() { return new Date().set({ millisecond: 0 }).add(-5).months().equals(Date.parse('5 months before now').set({millisecond: 0})) }
    },         
   '7 days from now': {
      run: function() { },
      assert: function() { return new Date().add(7).days().set({millisecond: 0}).equals(Date.parse('7 days from now').set({millisecond:0})) }
    },
   '3 years ago': {
      run: function() { },
      assert: function() { return Date.today().add(-3).years().equals( Date.parse('3 years ago') ) }
    },   
   '7 hours ago': {
      run: function() { },
      assert: function() { return (new Date()).add(-7).hours().set({millisecond: 0}).equals(Date.parse('7 hours ago').set({millisecond: 0})) }
    },     
   '1 week hence': {
      run: function() { },
      assert: function() { return Date.today().add(7).days().equals(Date.parse('1 week hence')) }
    },
   '1 year ago tomorrow': {
      run: function() { },
      assert: function() { return Date.today().add({years: -1, days: 1}).equals(Date.parse('1 year ago tomorrow')) }
    },
   'January 5': {
      run: function() { },
      assert: function() { return Date.january().set({day: 5}).equals(Date.parse('January 5')) }
    },
   'dec 25': {
      run: function() { },
      assert: function() { return Date.december().set({day: 25}).equals(Date.parse('dec 25')) }
    },
   'may 27th': {
      run: function() { },
      assert: function() { return Date.may().set({day: 27}).equals(Date.parse('may 27th')) }
    },  
   'October 2006': {
      run: function() { },
      assert: function() { return Date.october().set({year: 2006}).equals(Date.parse('October 2006')) }
    },   
   'jan 3 2010': {
      run: function() { },
      assert: function() { return new Date(2010,0,3).equals(Date.parse('jan 3 2010')) }
    },
   'february 14, 2004': {
      run: function() { },
      assert: function() { return new Date(2004,1,14).equals(Date.parse('february 14, 2004')) }
    },
   '3 jan 2000': {
      run: function() { },
      assert: function() { return new Date(2000,0,3).equals(Date.parse('3 jan 2000')) }
    },

   '5/27/1979': {
      run: function() { },
      assert: function() { return new Date(1979,4,27).equals(Date.parse('5/27/1979')) }
    },
   
   '27/5/1979': {
      run: function() { },
      assert: function() { return new Date(1979,4,27).equals(Date.parse('27/5/1979')) }
    },                                   
   
    '05/06': {
      run: function() { },
      assert: function() { return Date.may().set({day: 6}).equals(Date.parse('05/06')) }
    },
    '1979-05-27': {
      run: function() { },
      assert: function() { return new Date(1979,4,27).equals(Date.parse('1979-05-27')) }
    },
    'Friday': {
      run: function() { },
      assert: function() { return Date.friday().equals(Date.parse('Friday')) }
    },
    '5': {
      run: function() { },
      assert: function() { return Date.today().set({day: 5}).equals(Date.parse('5')) }
    }, 
    '4:00': {
      run: function() { },
      assert: function() { return Date.today().set({hour: 4}).equals(Date.parse('4:00')) }
    }, 
    '17:00': {
      run: function() { },
      assert: function() { return Date.today().set({hour: 17}).equals(Date.parse('17:00')) }
    },
    '0800': {
      run: function() { },
      assert: function() { return Date.today().set({year: 800, day: 1}).equals(Date.parse('0800')) }
    }, 
   '17 april 85': {
      run: function() { },
      assert: function() { return new Date(1985,3,17).equals(Date.parse('17 april 85')) }
    },  
    '1979-05-27 05:00': {
      run: function() { },
      assert: function() { return new Date(1979,4,27,5,0,0).equals(Date.parse('1979-05-27 05:00')) }
    },
    'January 5 @ 7pm': {
      run: function() { },
      assert: function() { return Date.january().set({day: 5, hour: 19}).equals(Date.parse('January 5 @ 7pm')) }
    },
    'this second : The term "this" is not supported': {
      run: function() { },
      assert: function() { return new Date().equals( Date.parse('this second') ) }
    }   
  },
'Fail': {
    setup: function() { 
        this.now = new Date();
        this.now.setMilliseconds(0);
    },
    'summer : Not really sure what "summer" should return.': {
      run: function() { },
      assert: function() { return Date.july().equals( Date.parse('summer') ) }
    },    
    'friday 13:00 : Both "friday 1pm" and "13:00" pass.': {
      run: function() { },
      assert: function() { return Date.friday().set({hour:13}).equals( Date.parse('friday 13:00') ) }
    },
    '6 in the morning : The term "morning" is not supported': {
      run: function() { },
      assert: function() { return Date.today().set({hour:6}).equals( Date.parse('6 in the morning') ) }
    }, 
    'sat 7 in the evening : The term "evening" is not supported': {
      run: function() { },
      assert: function() { return Date.today().set({hour:6}).equals( Date.parse('sat 7 in the evening') ) }
    },
    'this tuesday : The term "this" is not supported': {
      run: function() { },
      assert: function() { return Date.tuesday().equals( Date.parse('this tuesday') ) }
    },  
    'last winter : The term "winter" is not supported': {
      run: function() { },
      assert: function() { return Date.today().set({ month: 11, day: 21 }).add(-1).year().equals( Date.parse('last winter') ) }
    }, 
    'thursday last week -- last not supported': {
      run: function() { },
      assert: function() { 
        return Date.thursday().last().week().equals( Date.parse('thursday last week') ) 
      }
    },
    'last week tuesday -- last not supported': {
      run: function() { },
      assert: function() { return Date.tuesday().last().week().equals( Date.parse('last week tuesday') ) }
    },  
        'yesterday at 4:00 -- at not supported': {
      run: function() { 
          this.parsed = Date.parse('yesterday at 4:00');
          this.computed = Date.today().addDays(-1).set({ hour: 4 });
      },
      assert: function() { 
        return this.parsed.equals(this.computed); 
      }
    },           
    'tomorrow at 6:45pm -- at not supported': {
      run: function() { },
      assert: function() { return Date.today().addDays(1).set({ hour: 18, minute: 45}).equals( Date.parse('tomorrow at 6:45pm') ) }
    },
    'last friday at 20:00 -- last not supported': {
      run: function() { },
      assert: function() { return Date.today().last().friday().set({ hour: 20 }).equals( Date.parse('last friday at 20:00') ) }
    },
    'this morning : The term "morning" is not supported': {
      run: function() { },
      assert: function() { return Date.today().set({ hour: 9 }).equals( Date.parse('this morning') ) }
    },
    'last night : The term "night" is not supported': {
      run: function() { },
      assert: function() { return Date.today().set({ hour: 18 }).equals( Date.parse('last night') ) }
    },         
    'afternoon yesterday : The term "afternoon" is not supported': {
      run: function() { },
      assert: function() { return Date.today().add(1).day().set({ hour: 12 }).equals( Date.parse('afternoon yesterday') ) }
    },    
   // 'in 3 hours : problem with "in"': {
   //    run: function() { },
   //    assert: function() { return new Date().set({millisecond:0}).add(3).hours().equals(Date.parse('in 3 hours').set({millisecond:0})) }
   //  },
   '3 months ago saturday at 5:00 pm': {
      run: function() { },
      assert: function() { return Date.saturday().add({month: -3}).set({hour: 17}).equals(Date.parse('3 months ago saturday at 5:00 pm')) }
    },
   '7 hours before tomorrow at noon': {
      run: function() { },
      assert: function() { return Date.today().add({day: 1}).set({hour: 5}).equals(Date.parse('7 hours before tomorrow at noon')) }
    }, 
   '3rd wednesday in november': {
      run: function() { },
      assert: function() { return Date.november().third().wednesday().equals(Date.parse('3rd wednesday in november')) }
    }, 
   '3rd month next year': {
      run: function() { },
      assert: function() { return Date.today().add(1).year().set({month: 2}).equals(Date.parse('3rd month next year')) }
    },                                 
   '3rd thursday this september': {
      run: function() { },
      assert: function() { return Date.september().third().thursday().equals(Date.parse('3rd thursday this september')) }
    },      
   '4th day last week': {
      run: function() { },
      assert: function() { return Date.sunday().add(3).days().equals(Date.parse('4th day last week')) }
    },  
   'oct 06 : Currently returns 6th of October, not October 2006': {
      run: function() { },
      assert: function() { return Date.october().set({year: 2006}).equals(Date.parse('oct 06')) }
    }
 }       
});

