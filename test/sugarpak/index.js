Date.Specification = new Specification({
  '.getOrdinal()': {
    setup: function() {},
    '1st': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 1).getOrdinal() == "st"); }
    },
    '2nd': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 2).getOrdinal() == "nd"); }
    },
    '3rd': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 3).getOrdinal() == "rd"); }
    },
    '4th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 4).getOrdinal() == "th"); }
    },
    '5th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 5).getOrdinal() == "th"); }
    },
    '6th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 6).getOrdinal() == "th"); }
    },
    '7th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 7).getOrdinal() == "th"); }
    },
    '8th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 8).getOrdinal() == "th"); }
    },
    '9th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 9).getOrdinal() == "th"); }
    },
    '10th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 10).getOrdinal() == "th"); }
    },
    '11th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 11).getOrdinal() == "th"); }
    },
    '12th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 12).getOrdinal() == "th"); }
    },
    '13th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 13).getOrdinal() == "th"); }
    },
    '14th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 14).getOrdinal() == "th"); }
    },
    '15th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 15).getOrdinal() == "th"); }
    },
    '16th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 16).getOrdinal() == "th"); }
    },
    '17th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 17).getOrdinal() == "th"); }
    },
    '18th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 18).getOrdinal() == "th"); }
    },
    '19th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 19).getOrdinal() == "th"); }
    },
    '20th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 20).getOrdinal() == "th"); }
    },
    '21th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 21).getOrdinal() == "st"); }
    },
    '22th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 22).getOrdinal() == "nd"); }
    },
    '23rd': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 23).getOrdinal() == "rd"); }
    },
    '24th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 24).getOrdinal() == "th"); }
    },
    '25th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 25).getOrdinal() == "th"); }
    },
    '26th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 26).getOrdinal() == "th"); }
    },
    '27th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 27).getOrdinal() == "th"); }
    },
    '28th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 28).getOrdinal() == "th"); }
    },
    '29th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 29).getOrdinal() == "th"); }
    },
    '30th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 30).getOrdinal() == "th"); }
    },
    '31th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 31).getOrdinal() == "st"); }
    }
  }
});

$(document).ready( function() { Date.Specification.validate().show() } );