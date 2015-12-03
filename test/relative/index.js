if(typeof require !== 'undefined') {
  var Specification = require('../scripts/specification-converter.js');
}


Date.Specification = new Specification({
  'Overview': {
    setup: function() { },
    'Today': {
      run: function() { this.date = Date.parse('Today'); },
      assert: function() { return Date.today().equals( this.date ) }
    },
    'Yesterday': {
      run: function() { this.date = Date.parse('Yesterday') },
      assert: function() {  return Date.today().addDays(-1).equals( this.date ) }      
    },
    'Tomorrow': {
      run: function() { this.date = Date.parse('Tomorrow') },
      assert: function() { return Date.today().addDays(1).equals( this.date ) }
    }, 
    't = "Today"': {
      run: function() { },
      assert: function() { return Date.today().equals(Date.parse('t')) }
    },
    'tod = "Today"': {
      run: function() { },
      assert: function() { return Date.today().equals(Date.parse('tod')) }
    },
    'yes = "Yesterday"': {
      run: function() { },
      assert: function() {  return Date.today().add(-1).days().equals(Date.parse('yes')) }      
    },
    'tom = "Tomorrow"': {
      run: function() { },
      assert: function() { return Date.today().add(1).day().equals(Date.parse('tom')) }
    }
  },
'Relative Days': {
    setup: function() { },
    'last monday': {
      run: function() { },
      assert: function() {  return Date.today().last().monday().equals(Date.parse('last monday')) }
    },
    'last mon': {
      run: function() { },
      assert: function() {  return Date.today().last().monday().equals(Date.parse('last mon')) }
    },
    'last mo': {
      run: function() { },
      assert: function() {  return Date.today().last().monday().equals(Date.parse('last mo')) }
    },    
    'last tuesday': {
      run: function() { },
      assert: function() {  return Date.today().last().tuesday().equals(Date.parse('last tuesday')) }
    },
    'last tues': {
      run: function() { },
      assert: function() {  return Date.today().last().tuesday().equals(Date.parse('last tues')) }
    },
    'last tue': {
      run: function() { },
      assert: function() {  return Date.today().last().tuesday().equals(Date.parse('last tue')) }
    },
    'last tu': {
      run: function() { },
      assert: function() {  return Date.today().last().tuesday().equals(Date.parse('last tu')) }
    },     
    'last wednesday': {
      run: function() { },
      assert: function() {  return Date.today().last().wednesday().equals(Date.parse('last wednesday')) }
    },
    'last wed': {
      run: function() { },
      assert: function() {  return Date.today().last().wednesday().equals(Date.parse('last wed')) }
    }, 
    'last we': {
      run: function() { },
      assert: function() {  return Date.today().last().wednesday().equals(Date.parse('last we')) }
    },       
    'last thursday': {
      run: function() { },
      assert: function() {  return Date.today().last().thursday().equals(Date.parse('last thursday')) }
    },
    'last thurs': {
      run: function() { },
      assert: function() {  return Date.today().last().thursday().equals(Date.parse('last thurs')) }
    },  
    'last thur': {
      run: function() { },
      assert: function() {  return Date.today().last().thursday().equals(Date.parse('last thur')) }
    },
    'last thu': {
      run: function() { },
      assert: function() {  return Date.today().last().thursday().equals(Date.parse('last thu')) }
    },
//    'last th': {
//      run: function() { },
//      assert: function() {  return Date.today().last().thursday().equals(Date.parse('last th')) }
//    },    
    'last friday': {
      run: function() { },
      assert: function() {  return Date.today().last().friday().equals(Date.parse('last friday')) }
    },
    'last fri': {
      run: function() { },
      assert: function() {  return Date.today().last().friday().equals(Date.parse('last fri')) }
    },
    'last fr': {
      run: function() { },
      assert: function() {  return Date.today().last().friday().equals(Date.parse('last fr')) }
    },    
    'last saturday': {
      run: function() { },
      assert: function() {  return Date.today().last().saturday().equals(Date.parse('last saturday')) }
    },
    'last sat': {
      run: function() { },
      assert: function() {  return Date.today().last().saturday().equals(Date.parse('last sat')) }
    }, 
    'last sa': {
      run: function() { },
      assert: function() {  return Date.today().last().saturday().equals(Date.parse('last sa')) }
    },         
    'last sunday': {
      run: function() { },
      assert: function() {  return Date.today().last().sunday().equals(Date.parse('last sunday')) }
    },
    'last sun': {
      run: function() { },
      assert: function() {  return Date.today().last().sunday().equals(Date.parse('last sun')) }
    }, 
    'last su': {
      run: function() { },
      assert: function() {  return Date.today().last().sunday().equals(Date.parse('last su')) }
    },     
'prev monday': {
      run: function() { },
      assert: function() {  return Date.today().prev().monday().equals(Date.parse('prev monday')) }
    },
    'prev mon': {
      run: function() { },
      assert: function() {  return Date.today().prev().monday().equals(Date.parse('prev mon')) }
    },
'prev mo': {
      run: function() { },
      assert: function() {  return Date.today().prev().monday().equals(Date.parse('prev mo')) }
    },    
    'prev tuesday': {
      run: function() { },
      assert: function() {  return Date.today().prev().tuesday().equals(Date.parse('prev tuesday')) }
    },
    'prev tues': {
      run: function() { },
      assert: function() {  return Date.today().prev().tuesday().equals(Date.parse('prev tues')) }
    },
    'prev tue': {
      run: function() { },
      assert: function() {  return Date.today().prev().tuesday().equals(Date.parse('prev tue')) }
    }, 
    'prev tu': {
      run: function() { },
      assert: function() {  return Date.today().prev().tuesday().equals(Date.parse('prev tu')) }
    },     
    'prev wednesday': {
      run: function() { },
      assert: function() {  return Date.today().prev().wednesday().equals(Date.parse('prev wednesday')) }
    },
    'prev wed': {
      run: function() { },
      assert: function() {  return Date.today().prev().wednesday().equals(Date.parse('prev wed')) }
    }, 
    'prev we': {
      run: function() { },
      assert: function() {  return Date.today().prev().wednesday().equals(Date.parse('prev we')) }
    },       
    'prev thursday': {
      run: function() { },
      assert: function() {  return Date.today().prev().thursday().equals(Date.parse('prev thursday')) }
    },
    'prev thurs': {
      run: function() { },
      assert: function() {  return Date.today().prev().thursday().equals(Date.parse('prev thurs')) }
    },  
    'prev thur': {
      run: function() { },
      assert: function() {  return Date.today().prev().thursday().equals(Date.parse('prev thur')) }
    },
    'prev thu': {
      run: function() { },
      assert: function() {  return Date.today().prev().thursday().equals(Date.parse('prev thu')) }
    },
//    'prev th': {
//      run: function() { },
//      assert: function() {  return Date.today().prev().thursday().equals(Date.parse('prev th')) }
//    },    
    'prev friday': {
      run: function() { },
      assert: function() {  return Date.today().prev().friday().equals(Date.parse('prev friday')) }
    },
    'prev fri': {
      run: function() { },
      assert: function() {  return Date.today().prev().friday().equals(Date.parse('prev fri')) }
    },
    'prev fr': {
      run: function() { },
      assert: function() {  return Date.today().prev().friday().equals(Date.parse('prev fr')) }
    },    
    'prev saturday': {
      run: function() { },
      assert: function() {  return Date.today().prev().saturday().equals(Date.parse('prev saturday')) }
    },
    'prev sat': {
      run: function() { },
      assert: function() {  return Date.today().prev().saturday().equals(Date.parse('prev sat')) }
    }, 
    'prev sa': {
      run: function() { },
      assert: function() {  return Date.today().prev().saturday().equals(Date.parse('prev sa')) }
    },         
    'prev sunday': {
      run: function() { },
      assert: function() {  return Date.today().prev().sunday().equals(Date.parse('prev sunday')) }
    },
    'prev sun': {
      run: function() { },
      assert: function() {  return Date.today().prev().sunday().equals(Date.parse('prev sun')) }
    },
    'prev su': {
      run: function() { },
      assert: function() {  return Date.today().prev().sunday().equals(Date.parse('prev su')) }
    },     
    
'previous monday': {
      run: function() { },
      assert: function() {  return Date.today().previous().monday().equals(Date.parse('previous monday')) }
    },
    'previous mon': {
      run: function() { },
      assert: function() {  return Date.today().previous().monday().equals(Date.parse('previous mon')) }
    },
   'previous mo': {
      run: function() { },
      assert: function() {  return Date.today().previous().monday().equals(Date.parse('previous mo')) }
    },    
    'previous tuesday': {
      run: function() { },
      assert: function() {  return Date.today().previous().tuesday().equals(Date.parse('previous tuesday')) }
    },
    'previous tues': {
      run: function() { },
      assert: function() {  return Date.today().previous().tuesday().equals(Date.parse('previous tues')) }
    },
    'previous tue': {
      run: function() { },
      assert: function() {  return Date.today().previous().tuesday().equals(Date.parse('previous tue')) }
    }, 
    'previous tu': {
      run: function() { },
      assert: function() {  return Date.today().previous().tuesday().equals(Date.parse('previous tu')) }
    },     
    'previous wednesday': {
      run: function() { },
      assert: function() {  return Date.today().previous().wednesday().equals(Date.parse('previous wednesday')) }
    },
    'previous wed': {
      run: function() { },
      assert: function() {  return Date.today().previous().wednesday().equals(Date.parse('previous wed')) }
    }, 
    'previous we': {
      run: function() { },
      assert: function() {  return Date.today().previous().wednesday().equals(Date.parse('previous we')) }
    },       
    'previous thursday': {
      run: function() { },
      assert: function() {  return Date.today().previous().thursday().equals(Date.parse('previous thursday')) }
    },
    'previous thurs': {
      run: function() { },
      assert: function() {  return Date.today().previous().thursday().equals(Date.parse('previous thurs')) }
    },  
    'previous thur': {
      run: function() { },
      assert: function() {  return Date.today().previous().thursday().equals(Date.parse('previous thur')) }
    },
    'previous thu': {
      run: function() { },
      assert: function() {  return Date.today().previous().thursday().equals(Date.parse('previous thu')) }
    },
//    'previous th': {
//      run: function() { },
//      assert: function() {  return Date.today().previous().thursday().equals(Date.parse('previous th')) }
//    },    
    'previous friday': {
      run: function() { },
      assert: function() {  return Date.today().previous().friday().equals(Date.parse('previous friday')) }
    },
    'previous fri': {
      run: function() { },
      assert: function() {  return Date.today().previous().friday().equals(Date.parse('previous fri')) }
    },
    'previous fr': {
      run: function() { },
      assert: function() {  return Date.today().previous().friday().equals(Date.parse('previous fr')) }
    },    
    'previous saturday': {
      run: function() { },
      assert: function() {  return Date.today().previous().saturday().equals(Date.parse('previous saturday')) }
    },
    'previous sat': {
      run: function() { },
      assert: function() {  return Date.today().previous().saturday().equals(Date.parse('previous sat')) }
    },
'previous sa': {
      run: function() { },
      assert: function() {  return Date.today().previous().saturday().equals(Date.parse('previous sa')) }
    },         
    'previous sunday': {
      run: function() { },
      assert: function() {  return Date.today().previous().sunday().equals(Date.parse('previous sunday')) }
    },
    'previous sun': {
      run: function() { },
      assert: function() {  return Date.today().previous().sunday().equals(Date.parse('previous sun')) }
    },
    'previous su': {
      run: function() { },
      assert: function() {  return Date.today().previous().sunday().equals(Date.parse('previous su')) }
    },    
'next monday': {
      run: function() { },
      assert: function() {  return Date.today().next().monday().equals(Date.parse('next monday')) }
    },
    'next mon': {
      run: function() { },
      assert: function() {  return Date.today().next().monday().equals(Date.parse('next mon')) }
    },
   'next mo': {
      run: function() { },
      assert: function() {  return Date.today().next().monday().equals(Date.parse('next mo')) }
    },    
    'next tuesday': {
      run: function() { },
      assert: function() {  return Date.today().next().tuesday().equals(Date.parse('next tuesday')) }
    },
    'next tues': {
      run: function() { },
      assert: function() {  return Date.today().next().tuesday().equals(Date.parse('next tues')) }
    },
    'next tue': {
      run: function() { },
      assert: function() {  return Date.today().next().tuesday().equals(Date.parse('next tue')) }
    }, 
    'next tu': {
      run: function() { },
      assert: function() {  return Date.today().next().tuesday().equals(Date.parse('next tu')) }
    },     
    'next wednesday': {
      run: function() { },
      assert: function() {  return Date.today().next().wednesday().equals(Date.parse('next wednesday')) }
    },
    'next wed': {
      run: function() { },
      assert: function() {  return Date.today().next().wednesday().equals(Date.parse('next wed')) }
    }, 
    'next we': {
      run: function() { },
      assert: function() {  return Date.today().next().wednesday().equals(Date.parse('next we')) }
    },       
    'next thursday': {
      run: function() { },
      assert: function() {  return Date.today().next().thursday().equals(Date.parse('next thursday')) }
    },
    'next thurs': {
      run: function() { },
      assert: function() {  return Date.today().next().thursday().equals(Date.parse('next thurs')) }
    },  
    'next thur': {
      run: function() { },
      assert: function() {  return Date.today().next().thursday().equals(Date.parse('next thur')) }
    },
    'next thu': {
      run: function() { },
      assert: function() {  return Date.today().next().thursday().equals(Date.parse('next thu')) }
    },
//    'next th': {
//      run: function() { },
//      assert: function() {  return Date.today().next().thursday().equals(Date.parse('next th')) }
//    },    
    'next friday': {
      run: function() { },
      assert: function() {  return Date.today().next().friday().equals(Date.parse('next friday')) }
    },
    'next fri': {
      run: function() { },
      assert: function() {  return Date.today().next().friday().equals(Date.parse('next fri')) }
    },
    'next fr': {
      run: function() { },
      assert: function() {  return Date.today().next().friday().equals(Date.parse('next fr')) }
    },
    'next saturday': {
      run: function() { },
      assert: function() {  return Date.today().next().saturday().equals(Date.parse('next saturday')) }
    },
    'next sat': {
      run: function() { },
      assert: function() {  return Date.today().next().saturday().equals(Date.parse('next sat')) }
    }, 
    'next sa': {
      run: function() { },
      assert: function() {  return Date.today().next().saturday().equals(Date.parse('next sa')) }
    },         
    'next sunday': {
      run: function() { },
      assert: function() {  return Date.today().next().sunday().equals(Date.parse('next sunday')) }
    },
    'next sun': {
      run: function() { },
      assert: function() {  return Date.today().next().sunday().equals(Date.parse('next sun')) }
    },
    'next su': {
      run: function() { },
      assert: function() {  return Date.today().next().sunday().equals(Date.parse('next su')) }
    } 
                 
  },
'Relative Months': {
    setup: function() { },
    'last january': {
      run: function() { },
      assert: function() { return Date.today().last().january().equals(Date.parse('last january')) }
    },
    'last jan': {
      run: function() { },
      assert: function() { return Date.today().last().january().equals(Date.parse('last jan')) }
    },    
    'last february': {
      run: function() { },
      assert: function() { return Date.today().last().february().equals(Date.parse('last february')) }
    }, 
    'last feb': {
      run: function() { },
      assert: function() { return Date.today().last().february().equals(Date.parse('last feb')) }
    },        
    'last march': {
      run: function() { },
      assert: function() { return Date.today().last().march().equals(Date.parse('last march')) }
    }, 
    'last mar': {
      run: function() { },
      assert: function() { return Date.today().last().march().equals(Date.parse('last mar')) }
    },
    'last april': {
      run: function() { },
      assert: function() { return Date.today().last().april().equals(Date.parse('last april')) }
    },
    'last apr': {
      run: function() { },
      assert: function() { return Date.today().last().apr().equals(Date.parse('last apr')) }
    },
    'last may': {
      run: function() { },
      assert: function() { return Date.today().last().may().equals(Date.parse('last may')) }
    },     
    'last june': {
      run: function() { },
      assert: function() { return Date.today().last().june().equals(Date.parse('last june')) }
    },     
    'last jun': {
      run: function() { },
      assert: function() { return Date.today().last().june().equals(Date.parse('last jun')) }
    },    
    'last july': {
      run: function() { },
      assert: function() { return Date.today().last().july().equals(Date.parse('last july')) }
    },
    'last jul': {
      run: function() { },
      assert: function() { return Date.today().last().july().equals(Date.parse('last july')) }
    },
    'last august': {
      run: function() { },
      assert: function() { return Date.today().last().august().equals(Date.parse('last august')) }
    },
    'last aug': {
      run: function() { },
      assert: function() { return Date.today().last().august().equals(Date.parse('last aug')) }
    },
    'last september': {
      run: function() { },
      assert: function() { return Date.today().last().september().equals(Date.parse('last september')) }
    },
    'last sept': {
      run: function() { },
      assert: function() { return Date.today().last().september().equals(Date.parse('last sept')) }
    },
    'last sep': {
      run: function() { },
      assert: function() { return Date.today().last().sep().equals(Date.parse('last sep')) }
    },
    'last october': {
      run: function() { },
      assert: function() { return Date.today().last().october().equals(Date.parse('last october')) }
    },     
    'last oct': {
      run: function() { },
      assert: function() { return Date.today().last().october().equals(Date.parse('last oct')) }
    },
    'last november': {
      run: function() { },
      assert: function() { return Date.today().last().november().equals(Date.parse('last november')) }
    }, 
    'last nov': {
      run: function() { },
      assert: function() { return Date.today().last().november().equals(Date.parse('last nov')) }
    },     
    'last december': {
      run: function() { },
      assert: function() { return Date.today().last().december().equals(Date.parse('last december')) }
    },
    'last dec': {
      run: function() { },
      assert: function() { return Date.today().last().december().equals(Date.parse('last dec')) }
    },
'prev january': {
      run: function() { },
      assert: function() { return Date.today().prev().january().equals(Date.parse('prev january')) }
    },
    'prev jan': {
      run: function() { },
      assert: function() { return Date.today().prev().january().equals(Date.parse('prev jan')) }
    },    
    'prev february': {
      run: function() { },
      assert: function() { return Date.today().prev().february().equals(Date.parse('prev february')) }
    }, 
    'prev feb': {
      run: function() { },
      assert: function() { return Date.today().prev().february().equals(Date.parse('prev feb')) }
    },        
    'prev march': {
      run: function() { },
      assert: function() { return Date.today().prev().march().equals(Date.parse('prev march')) }
    }, 
    'prev mar': {
      run: function() { },
      assert: function() { return Date.today().prev().march().equals(Date.parse('prev mar')) }
    },
    'prev april': {
      run: function() { },
      assert: function() { return Date.today().prev().april().equals(Date.parse('prev april')) }
    },
    'prev apr': {
      run: function() { },
      assert: function() { return Date.today().prev().apr().equals(Date.parse('prev apr')) }
    },
    'prev may': {
      run: function() { },
      assert: function() { return Date.today().prev().may().equals(Date.parse('prev may')) }
    },     
    'prev june': {
      run: function() { },
      assert: function() { return Date.today().prev().june().equals(Date.parse('prev june')) }
    },     
    'prev jun': {
      run: function() { },
      assert: function() { return Date.today().prev().june().equals(Date.parse('prev jun')) }
    },    
    'prev july': {
      run: function() { },
      assert: function() { return Date.today().prev().july().equals(Date.parse('prev july')) }
    },
    'prev jul': {
      run: function() { },
      assert: function() { return Date.today().prev().july().equals(Date.parse('prev july')) }
    },
    'prev august': {
      run: function() { },
      assert: function() { return Date.today().prev().august().equals(Date.parse('prev august')) }
    },
    'prev aug': {
      run: function() { },
      assert: function() { return Date.today().prev().august().equals(Date.parse('prev aug')) }
    },
    'prev september': {
      run: function() { },
      assert: function() { return Date.today().prev().september().equals(Date.parse('prev september')) }
    },
    'prev sept': {
      run: function() { },
      assert: function() { return Date.today().prev().september().equals(Date.parse('prev sept')) }
    },
    'prev sep': {
      run: function() { },
      assert: function() { return Date.today().prev().sep().equals(Date.parse('prev sep')) }
    },
    'prev october': {
      run: function() { },
      assert: function() { return Date.today().prev().october().equals(Date.parse('prev october')) }
    },     
    'prev oct': {
      run: function() { },
      assert: function() { return Date.today().prev().october().equals(Date.parse('prev oct')) }
    },
    'prev november': {
      run: function() { },
      assert: function() { return Date.today().prev().november().equals(Date.parse('prev november')) }
    }, 
    'prev nov': {
      run: function() { },
      assert: function() { return Date.today().prev().november().equals(Date.parse('prev nov')) }
    },     
    'prev december': {
      run: function() { },
      assert: function() { return Date.today().prev().december().equals(Date.parse('prev december')) }
    },
    'prev dec': {
      run: function() { },
      assert: function() { return Date.today().prev().december().equals(Date.parse('prev dec')) }
    },

'previous january': {
      run: function() { },
      assert: function() { return Date.today().previous().january().equals(Date.parse('previous january')) }
    },
    'previous jan': {
      run: function() { },
      assert: function() { return Date.today().previous().january().equals(Date.parse('previous jan')) }
    },    
    'previous february': {
      run: function() { },
      assert: function() { return Date.today().previous().february().equals(Date.parse('previous february')) }
    }, 
    'previous feb': {
      run: function() { },
      assert: function() { return Date.today().previous().february().equals(Date.parse('previous feb')) }
    },        
    'previous march': {
      run: function() { },
      assert: function() { return Date.today().previous().march().equals(Date.parse('previous march')) }
    }, 
    'previous mar': {
      run: function() { },
      assert: function() { return Date.today().previous().march().equals(Date.parse('previous mar')) }
    },
    'previous april': {
      run: function() { },
      assert: function() { return Date.today().previous().april().equals(Date.parse('previous april')) }
    },
    'previous apr': {
      run: function() { },
      assert: function() { return Date.today().previous().apr().equals(Date.parse('previous apr')) }
    },
    'previous may': {
      run: function() { },
      assert: function() { return Date.today().previous().may().equals(Date.parse('previous may')) }
    },     
    'previous june': {
      run: function() { },
      assert: function() { return Date.today().previous().june().equals(Date.parse('previous june')) }
    },     
    'previous jun': {
      run: function() { },
      assert: function() { return Date.today().previous().june().equals(Date.parse('previous jun')) }
    },    
    'previous july': {
      run: function() { },
      assert: function() { return Date.today().previous().july().equals(Date.parse('previous july')) }
    },
    'previous jul': {
      run: function() { },
      assert: function() { return Date.today().previous().july().equals(Date.parse('previous july')) }
    },
    'previous august': {
      run: function() { },
      assert: function() { return Date.today().previous().august().equals(Date.parse('previous august')) }
    },
    'previous aug': {
      run: function() { },
      assert: function() { return Date.today().previous().august().equals(Date.parse('previous aug')) }
    },
    'previous september': {
      run: function() { },
      assert: function() { return Date.today().previous().september().equals(Date.parse('previous september')) }
    },
    'previous sept': {
      run: function() { },
      assert: function() { return Date.today().previous().september().equals(Date.parse('previous sept')) }
    },
    'previous sep': {
      run: function() { },
      assert: function() { return Date.today().previous().sep().equals(Date.parse('previous sep')) }
    },
    'previous october': {
      run: function() { },
      assert: function() { return Date.today().previous().october().equals(Date.parse('previous october')) }
    },     
    'previous oct': {
      run: function() { },
      assert: function() { return Date.today().previous().october().equals(Date.parse('previous oct')) }
    },
    'previous november': {
      run: function() { },
      assert: function() { return Date.today().previous().november().equals(Date.parse('previous november')) }
    }, 
    'previous nov': {
      run: function() { },
      assert: function() { return Date.today().previous().november().equals(Date.parse('previous nov')) }
    },     
    'previous december': {
      run: function() { },
      assert: function() { return Date.today().previous().december().equals(Date.parse('previous december')) }
    },
    'previous dec': {
      run: function() { },
      assert: function() { return Date.today().previous().december().equals(Date.parse('previous dec')) }
    },


    'next january': {
      run: function() { },
      assert: function() { return Date.today().next().january().equals(Date.parse('next january')) }
    },
    'next jan': {
      run: function() { },
      assert: function() { return Date.today().next().january().equals(Date.parse('next jan')) }
    },    
    'next february': {
      run: function() { },
      assert: function() { return Date.today().next().february().equals(Date.parse('next february')) }
    }, 
    'next feb': {
      run: function() { },
      assert: function() { return Date.today().next().february().equals(Date.parse('next feb')) }
    },        
    'next march': {
      run: function() { },
      assert: function() { return Date.today().next().march().equals(Date.parse('next march')) }
    }, 
    'next mar': {
      run: function() { },
      assert: function() { return Date.today().next().march().equals(Date.parse('next mar')) }
    },
    'next april': {
      run: function() { },
      assert: function() { return Date.today().next().april().equals(Date.parse('next april')) }
    },
    'next apr': {
      run: function() { },
      assert: function() { return Date.today().next().apr().equals(Date.parse('next apr')) }
    },
    'next may': {
      run: function() { },
      assert: function() { return Date.today().next().may().equals(Date.parse('next may')) }
    },     
    'next june': {
      run: function() { },
      assert: function() { return Date.today().next().june().equals(Date.parse('next june')) }
    },     
    'next jun': {
      run: function() { },
      assert: function() { return Date.today().next().june().equals(Date.parse('next jun')) }
    },    
    'next july': {
      run: function() { },
      assert: function() { return Date.today().next().july().equals(Date.parse('next july')) }
    },
    'next jul': {
      run: function() { },
      assert: function() { return Date.today().next().july().equals(Date.parse('next july')) }
    },
    'next august': {
      run: function() { },
      assert: function() { return Date.today().next().august().equals(Date.parse('next august')) }
    },
    'next aug': {
      run: function() { },
      assert: function() { return Date.today().next().august().equals(Date.parse('next aug')) }
    },
    'next september': {
      run: function() { },
      assert: function() { return Date.today().next().september().equals(Date.parse('next september')) }
    },
    'next sept': {
      run: function() { },
      assert: function() { return Date.today().next().september().equals(Date.parse('next sept')) }
    },
    'next sep': {
      run: function() { },
      assert: function() { return Date.today().next().sep().equals(Date.parse('next sep')) }
    },
    'next october': {
      run: function() { },
      assert: function() { return Date.today().next().october().equals(Date.parse('next october')) }
    },     
    'next oct': {
      run: function() { },
      assert: function() { return Date.today().next().october().equals(Date.parse('next oct')) }
    },
    'next november': {
      run: function() { },
      assert: function() { return Date.today().next().november().equals(Date.parse('next november')) }
    }, 
    'next nov': {
      run: function() { },
      assert: function() { return Date.today().next().november().equals(Date.parse('next nov')) }
    },     
    'next december': {
      run: function() { },
      assert: function() { return Date.today().next().december().equals(Date.parse('next december')) }
    },
    'next dec': {
      run: function() { },
      assert: function() { return Date.today().next().december().equals(Date.parse('next dec')) }
    }       
  },
'Relative Date Element Parts': {
    setup: function() { },
    'last seconds': {
      run: function() { },
      assert: function() { return new Date().last().second().set({millisecond: 0}).equals(Date.parse('last seconds').set({millisecond: 0})) }
    }, 
    'last second': {
      run: function() { },
      assert: function() { return new Date().last().second().set({millisecond: 0}).equals(Date.parse('last second').set({millisecond: 0})) }
    },
    'last sec': {
      run: function() { },
      assert: function() { return new Date().last().second().set({millisecond: 0}).equals(Date.parse('last sec').set({millisecond: 0})) }
    },
    'last minutes': {
      run: function() { },
      assert: function() { return new Date().last().minute().set({millisecond: 0}).equals(Date.parse('last minutes').set({millisecond: 0})) }
    },
    'last minute': {
      run: function() { },
      assert: function() { return new Date().last().minute().set({millisecond: 0}).equals(Date.parse('last minute').set({millisecond: 0})) }
    },
    'last min': {
      run: function() { },
      assert: function() { return new Date().last().minute().set({millisecond: 0}).equals(Date.parse('last min').set({millisecond: 0})) }
    },
    'last mn': {
      run: function() { },
      assert: function() { return new Date().last().minute().set({millisecond: 0}).equals(Date.parse('last mn').set({millisecond: 0})) }
    },    
    'last hours': {
      run: function() { },
      assert: function() { return new Date().last().hour().set({millisecond: 0}).equals(Date.parse('last hours').set({millisecond: 0})) }
    },
    'last hour': {
      run: function() { },
      assert: function() { return new Date().last().hour().set({millisecond: 0}).equals(Date.parse('last hour').set({millisecond: 0})) }
    },
    'last days': {
      run: function() { },
      assert: function() { return Date.today().last().day().equals(Date.parse('last days')) }
    },
    'last day': {
      run: function() { },
      assert: function() { return Date.today().last().day().equals(Date.parse('last day')) }
    },
    'last weeks': {
      run: function() { },
      assert: function() { return Date.today().last().week().equals(Date.parse('last weeks')) }
    },    
    'last week': {
      run: function() { },
      assert: function() { return Date.today().last().week().equals(Date.parse('last week')) }
    },
    'last months': {
      run: function() { },
      assert: function() { return Date.today().last().month().equals(Date.parse('last months')) }
    },
    'last month': {
      run: function() { },
      assert: function() { return Date.today().last().month().equals(Date.parse('last month')) }
    },
    'last years': {
      run: function() { },
      assert: function() { return Date.today().last().year().equals(Date.parse('last years')) }
    },
    'last year': {
      run: function() { },
      assert: function() { return Date.today().last().year().equals(Date.parse('last year')) }
    },
'prev seconds': {
      run: function() { },
      assert: function() { return new Date().prev().second().set({millisecond: 0}).equals(Date.parse('prev seconds').set({millisecond: 0})) }
    }, 
    'prev second': {
      run: function() { },
      assert: function() { return new Date().prev().second().set({millisecond: 0}).equals(Date.parse('prev second').set({millisecond: 0})) }
    },
    'prev sec': {
      run: function() { },
      assert: function() { return new Date().prev().second().set({millisecond: 0}).equals(Date.parse('prev sec').set({millisecond: 0})) }
    },
    'prev minutes': {
      run: function() { },
      assert: function() { return new Date().prev().minute().set({millisecond: 0}).equals(Date.parse('prev minutes').set({millisecond: 0})) }
    },
    'prev minute': {
      run: function() { },
      assert: function() { return new Date().prev().minute().set({millisecond: 0}).equals(Date.parse('prev minute').set({millisecond: 0})) }
    },
    'prev min': {
      run: function() { },
      assert: function() { return new Date().prev().minute().set({millisecond: 0}).equals(Date.parse('prev min').set({millisecond: 0})) }
    },
    'prev mn': {
      run: function() { },
      assert: function() { return new Date().prev().minute().set({millisecond: 0}).equals(Date.parse('prev mn').set({millisecond: 0})) }
    },    
    'prev hours': {
      run: function() { },
      assert: function() { return new Date().prev().hour().set({millisecond: 0}).equals(Date.parse('prev hours').set({millisecond: 0})) }
    },
    'prev hour': {
      run: function() { },
      assert: function() { return new Date().prev().hour().set({millisecond: 0}).equals(Date.parse('prev hour').set({millisecond: 0})) }
    },
    'prev days': {
      run: function() { },
      assert: function() { return Date.today().prev().day().equals(Date.parse('prev days')) }
    },
    'prev day': {
      run: function() { },
      assert: function() { return Date.today().prev().day().equals(Date.parse('prev day')) }
    },
    'prev weeks': {
      run: function() { },
      assert: function() { return Date.today().prev().week().equals(Date.parse('prev weeks')) }
    },    
    'prev week': {
      run: function() { },
      assert: function() { return Date.today().prev().week().equals(Date.parse('prev week')) }
    },
    'prev months': {
      run: function() { },
      assert: function() { return Date.today().prev().month().equals(Date.parse('prev months')) }
    },
    'prev month': {
      run: function() { },
      assert: function() { return Date.today().prev().month().equals(Date.parse('prev month')) }
    },
    'prev years': {
      run: function() { },
      assert: function() { return Date.today().prev().year().equals(Date.parse('prev years')) }
    },
    'prev year': {
      run: function() { },
      assert: function() { return Date.today().prev().year().equals(Date.parse('prev year')) }
    }, 
    
'previous seconds': {
      run: function() { },
      assert: function() { return new Date().previous().second().set({millisecond: 0}).equals(Date.parse('previous seconds').set({millisecond: 0})) }
    }, 
    'previous second': {
      run: function() { },
      assert: function() { return new Date().previous().second().set({millisecond: 0}).equals(Date.parse('previous second').set({millisecond: 0})) }
    },
    'previous sec': {
      run: function() { },
      assert: function() { return new Date().previous().second().set({millisecond: 0}).equals(Date.parse('previous sec').set({millisecond: 0})) }
    },
    'previous minutes': {
      run: function() { },
      assert: function() { return new Date().previous().minute().set({millisecond: 0}).equals(Date.parse('previous minutes').set({millisecond: 0})) }
    },
    'previous minute': {
      run: function() { },
      assert: function() { return new Date().previous().minute().set({millisecond: 0}).equals(Date.parse('previous minute').set({millisecond: 0})) }
    },
    'previous min': {
      run: function() { },
      assert: function() { return new Date().previous().minute().set({millisecond: 0}).equals(Date.parse('previous min').set({millisecond: 0})) }
    },
    'previous mn': {
      run: function() { },
      assert: function() { return new Date().previous().minute().set({millisecond: 0}).equals(Date.parse('previous mn').set({millisecond: 0})) }
    },    
    'previous hours': {
      run: function() { },
      assert: function() { return new Date().previous().hour().set({millisecond: 0}).equals(Date.parse('previous hours').set({millisecond: 0})) }
    },
    'previous hour': {
      run: function() { },
      assert: function() { return new Date().previous().hour().set({millisecond: 0}).equals(Date.parse('previous hour').set({millisecond: 0})) }
    },
    'previous days': {
      run: function() { },
      assert: function() { return Date.today().previous().day().equals(Date.parse('previous days')) }
    },
    'previous day': {
      run: function() { },
      assert: function() { return Date.today().previous().day().equals(Date.parse('previous day')) }
    },
    'previous weeks': {
      run: function() { },
      assert: function() { return Date.today().previous().week().equals(Date.parse('previous weeks')) }
    },    
    'previous week': {
      run: function() { },
      assert: function() { return Date.today().previous().week().equals(Date.parse('previous week')) }
    },
    'previous months': {
      run: function() { },
      assert: function() { return Date.today().previous().month().equals(Date.parse('previous months')) }
    },
    'previous month': {
      run: function() { },
      assert: function() { return Date.today().previous().month().equals(Date.parse('previous month')) }
    },
    'previous years': {
      run: function() { },
      assert: function() { return Date.today().previous().year().equals(Date.parse('previous years')) }
    },
    'previous year': {
      run: function() { },
      assert: function() { return Date.today().previous().year().equals(Date.parse('previous year')) }
    },
           
    'next seconds': {
      run: function() { },
      assert: function() { return new Date().next().second().set({millisecond: 0}).equals(Date.parse('next seconds').set({millisecond: 0})) }
    }, 
    'next second': {
      run: function() { },
      assert: function() { return new Date().next().second().set({millisecond: 0}).equals(Date.parse('next second').set({millisecond: 0})) }
    },
    'next sec': {
      run: function() { },
      assert: function() { return new Date().next().second().set({millisecond: 0}).equals(Date.parse('next sec').set({millisecond: 0})) }
    },
    'next minutes': {
      run: function() { },
      assert: function() { return new Date().next().minute().set({millisecond: 0}).equals(Date.parse('next minutes').set({millisecond: 0})) }
    },
    'next minute': {
      run: function() { },
      assert: function() { return new Date().next().minute().set({millisecond: 0}).equals(Date.parse('next minute').set({millisecond: 0})) }
    },
    'next min': {
      run: function() { },
      assert: function() { return new Date().next().minute().set({millisecond: 0}).equals(Date.parse('next min').set({millisecond: 0})) }
    },
    'next mn': {
      run: function() { },
      assert: function() { return new Date().next().minute().set({millisecond: 0}).equals(Date.parse('next mn').set({millisecond: 0})) }
    },    
    'next hours': {
      run: function() { },
      assert: function() { return new Date().next().hour().set({millisecond: 0}).equals(Date.parse('next hours').set({millisecond: 0})) }
    },
    'next hour': {
      run: function() { },
      assert: function() { return new Date().next().hour().set({millisecond: 0}).equals(Date.parse('next hour').set({millisecond: 0})) }
    },
    'next days': {
      run: function() { },
      assert: function() { return Date.today().next().day().equals(Date.parse('next days')) }
    },
    'next day': {
      run: function() { },
      assert: function() { return Date.today().next().day().equals(Date.parse('next day')) }
    },
    'next weeks': {
      run: function() { },
      assert: function() { return Date.today().next().week().equals(Date.parse('next weeks')) }
    },    
    'next week': {
      run: function() { },
      assert: function() { return Date.today().next().week().equals(Date.parse('next week')) }
    },
    'next months': {
      run: function() { },
      assert: function() { return Date.today().next().month().equals(Date.parse('next months')) }
    },
    'next month': {
      run: function() { },
      assert: function() { return Date.today().next().month().equals(Date.parse('next month')) }
    },
    'next years': {
      run: function() { },
      assert: function() { return Date.today().next().year().equals(Date.parse('next years')) }
    },
    'next year': {
      run: function() { },
      assert: function() { return Date.today().next().year().equals(Date.parse('next year')) }
    }    
  }   
});

