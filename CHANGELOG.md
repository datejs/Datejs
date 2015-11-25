# CHANGE LOG

#### 2015-11-25 [@geoffreymcgill]

1. [#72](https://github.com/datejs/Datejs/issues/72) - Changed license to Apache 2.0. More permissive and less vague. 

#### 2008-05-12 [@geoffrey.mcgill]

1.  Added .same() function to sugarpak.js. The new .same() function will compare two date objects to 
	determine if they occur on/in exactly the same instance of the given date part.
	
	The function .same() must be followed by a date part function (example: .day(), .month(), .year(), etc).
	
	An optional Date can be passed in the date part function. If now date is passed as a parameter, 'Now' is used. 
	
	Scenario: Determine if two dates fall on the exact same day.
    
    Example
    
    var d1 = Date.today(); // today at 00:00
    var d2 = new Date();   // exactly now.

    // Do they occur on the same day?
    d1.same().day(d2); // true
    
     // Do they occur on the same hour?
    d1.same().hour(d2); // false, unless d2 hour is '00' (midnight).
    
    // What if it's the same day, but one year apart?
    var nextYear = Date.today().add(1).year();

    d1.same().day(nextYear); // false, because the dates must occur on the exact same day. 
    
    
    Scenario: Determine if a given date occurs during some week period 2 months from now. 
     
    Example
    
    var future = Date.today().add(2).months();
    return someDate.same().week(future); // true|false;
    
2.  Added Date.prototype.toObject() function to sugarpak.js. The .toObject will return an object literal of all the date parts.
	
	Example
	
	var o = new Date().toObject();
	
	// { year: 2008, month: 4, week: 20, day: 13, hour: 18, minute: 9, second: 32, millisecond: 812 }
	
	The object properties can be referenced directly from the object.
	
	alert(o.day);  // alerts "13"
	alert(o.year); // alerts "2008"

3.  Added Date.fromObject(config) to sugarpak.js. The .fromObject will return a new Date based on the config properties.

	Example
	
	var o = someDate.toObject();
	return Date.fromObject(o); // will return the same date as "someDate"

    var o2 = {month: 1, day: 20, hour: 18}; // birthday party!
    Date.fromObject(o2);
    
#### 2008-05-12 [@geoffreymcgill]

1.  Added .today() equality check function. Checks to determine if the current date instance occurs 
    during Today. Must be preceeded by the .is() function.

	Example
	
    someDate.is().today();    // true|false
    new Date().is().today();  // true
    Date.today().is().today();// true
    Date.today().add(-1).day().is().today(); // false
	
#### 2008-05-07 [@geoffreymcgill]

1.  Fixed bug in TimePeriod. See http://code.google.com/p/datejs/issues/detail?id=39

	Example
	
var start = new Date();
var end = Date.today().add(15).days();
var ts = new TimePeriod(start, end);

ts.getDays(); // 14

#### 2008-04-25 [@geoffreymcgill]

1.  Small correction in core.js and extras.js to add an extra space in a couple functions so they would
	pass JSLint (http://www.jslint.com) in white-space strict mode.

2.  Revised online wiki documentation style so it's easier to anchor link to specific functions. 

	Example
	
	http://code.google.com/p/datejs/wiki/APIDocumentation#isLeapYear

3.  Added cross linking (See Also) between some related documentation items. 

4.  Added Date.prototype.isAfter. Determines if this date occurs after the date to compare to.
	See http://code.google.com/p/datejs/wiki/APIDocumentation#isAfter
	
	Example

	var tomorrow = new Date().add(1).day();	
	Date.today().isAfter(tomorrow); // false
	Date.today().isBefore(tomorrow); // true

	var yesterday = new Date().add(-1).day();
	Date.today().isAfter(yesterday); // true
	Date.today().isBefore(yesterday); // false

	// No date to compare to...	
	Date.today().isAfter(); // false
	Date.today().isBefore(); // true

5.  Added Date.prototype.isBefore. Determines if this date occurs before the date to compare to.
	See http://code.google.com/p/datejs/wiki/APIDocumentation#isBefore

	Example

	var tomorrow = new Date().add(1).day();	
	Date.today().isAfter(tomorrow); // false
	Date.today().isBefore(tomorrow); // true

	var yesterday = new Date().add(-1).day();
	Date.today().isAfter(yesterday); // true
	Date.today().isBefore(yesterday); // false

	// No date to compare to...	
	Date.today().isAfter(); // false
	Date.today().isBefore(); // true

6.  Added .isAfter and .isBefore to online wiki documentation. See 
	http://code.google.com/p/datejs/wiki/APIDocumentation#isAfter
	http://code.google.com/p/datejs/wiki/APIDocumentation#isBefore

7.  Added feature to the Date.prototype.equals function that will use new Date() ("now") if no date is provided to 
	compare to. The functionality remains unchanged if a "date" parameter is provided.
	
	Example
	
	// Old
	Date.today().equals(); // error
	Date.today().equals(Date.today().add(1).day()); // false

	// New
	Date.today().equals(); // false
	new Date().equals(); // true (should be true, unless it takes more than one millisecond to compare)
	Date.today().equals(Date.today().add(1).day()); // false
	
8.  Added new "Release Notes" RSS feed. http://feeds.feedburner.com/DatejsReleaseNotes
	
#### 2008-04-13 [@geoffreymcgill]

1.  Made correction to APIDocumentation.wiki. getDayNumberFromName and getMonthNumberFromName.

#### 2008-04-13 [@geoffreymcgill]

1.  Fixed bug in sugarpak.js where .toISOString was not correctly checking the Date.prototype
    if an instance of .toISOString was already in the dom.

2.  Moved .toISOString() from sugarpak.js to core.js. Function remains otherwise unchanged.

3.  Renamed .getDayOfYear() function to the proper name of .getOrdinalNumber().

	Example
	
	// Old
	Date.today().getDayOfYear(); // 103
	
	// New
	Date.today().getOrdinalNumber(); // 103
	
4.  Fixed bug in core.js where .getOrdinalNumber() was not including the current day in the calculation.
	For example 1-Jan-2008 would return '0', although it is the 'first' day of the year. 
	The .getOrdinalNumber() function now includes the current day in the calculation.

	Example
	
	// Old (15-Jan-2008)
	new Date(2008, 0, 15).getOrdinalNumber(); // 14
	
	// New
	new Date(2008, 0, 15).getOrdinalNumber(); // 15

5.  Added new "S" format specifier as option in .toString(). The "S" format specifier will return 
	the ordinal suffix ("st, "nd", "rd" or "th") value of the Day.
	
	Example
	
	// Old
	Date.today().getOrdinal(); // "th"
	
	// New
	Date.today().toString("S"); // "th"
	
	It's also possible to use the ordinal format specifier as part of larger format string.
	
	Example
	
	Date.today().toString("MMMM dS, yyyy"); // "April 12th, 2008"
	
6.  Removed .getOrdinal function from sugarpak.js. Please use .toString("S").

7.  Contemplated adding "z", "zz" and "zzz" as format specifiers, but changed my mind.
	For future reference here's the code required if adding "z*" support to .toString().
	
	// Add to .toString()
    case "z":
        return x.toString("zz").replace("0", "");
    case "zz":
        return z.substring(0, z.length - 2);
    case "zzz":
        return z.substring(0, z.length - 2) + ":" + z.substring(z.length - 2);
        
    // Documentation
    z      The offset time zone from UTC in hours.                                      "–12" through "+13", "-6"
    zz     The offset time zone from UTC in hours with leading zero.                    "–12" through "+13", "-06"
    zzz    The offset time zone from UTC in hours and minutes.                          "–12:00" through "+13:00", "-06:00"    

8.  Contemplated add "fff" as format specifier option of .toString() but changed my mind. 
	For future reference, here's the code required if adding "fff" support to .toString().
	
	// Add to .toString()
    case "fff":
        var y = "00" + x.getMilliseconds();
        return y.substring(y.length - 3);	
        
    // Documentation
    fff    The milliseconds between 000-999.                                            "000" to "999"    

9.  Changed return type of .getISOWeek to String from Number. Returns values from "01" to "53".

10. Corrected bug where .getISOWeek() was not returning a string with a leading zero if the week was < 10.

	Example
	
	// Old
	Date.today().getISOWeek(); // "7"
	
	// New
	Date.today().getISOWeek(); // "07"

11. Added support for escaping ("\\") characters in a format specifier string.

	Example
	
	new Date().toString("\\da\\te: MMMM dS, yyyy"); // "date: April 12th, 2008"
	
12. Removed .toShortDateString() from sugarpak.js. Please use .toString("d").

13. Removed .toLongDateString() from sugarpak.js. Please use .toString("D").

14. Removed .toShortTimeString() from sugarpak.js. Please use .toString("t").

15. Removed .toLongTimeString() from sugarpak.js. Please use .toString("T").

16. Added support in .toString() for the following Standard Date and Time Format Specifiers. 
	The format pattern for each standard pattern is pulled from the CultureInfo file. 
	The pattern is culture specific and *may* be different for each CultureInfo class. 

    STANDARD DATE AND TIME FORMAT STRINGS
    Format  Description                                                                  Example ("en-US")
    ------  ---------------------------------------------------------------------------  -----------------------
     d      The CultureInfo shortDate Format Pattern                                     "M/d/yyyy"
     D      The CultureInfo longDate Format Pattern                                      "dddd, MMMM dd, yyyy"
     F      The CultureInfo fullDateTime Format Pattern                                  "dddd, MMMM dd, yyyy h:mm:ss tt"
     m      The CultureInfo monthDay Format Pattern                                      "MMMM dd"
     r      The CultureInfo rfc1123 Format Pattern                                       "ddd, dd MMM yyyy HH:mm:ss GMT"
     s      The CultureInfo sortableDateTime Format Pattern                              "yyyy-MM-ddTHH:mm:ss"
     t      The CultureInfo shortTime Format Pattern                                     "h:mm tt"
     T      The CultureInfo longTime Format Pattern                                      "h:mm:ss tt"
     u      The CultureInfo universalSortableDateTime Format Pattern                     "yyyy-MM-dd HH:mm:ssZ"
     y      The CultureInfo yearMonth Format Pattern                                     "MMMM, yyyy"

17. Fixed bug in .getUTCOffset().

18. Updated APIDocuemtation to ensure all core.js functions were documented. Enhanced GoogleCode wiki documentation 
	listing Parameters and Return Value.

19. Added parameter information to APIDocumentation (http://code.google.com/p/datejs/wiki/APIDocumentation).

20. Added Date.prototype.format(format). The .format function is similar to the .toString() function,
    but will accept a PHP/Unix style format string. See the following PHP documentation for reference.
    
	http://www.php.net/strftime
	http://www.php.net/manual/en/function.date.php

	Example
	
	Date.today().format("%m/%d/%y"); // "04/13/08"
	Date.today().format("c");        // "2008-04-13T06:00:00Z"
	
    If .format is already in the dom when the Datejs libary loads, the .format function will not be created. 
    A secondary .$format function is always created and available.

21. Added .normalizeFormat() to extras.js. The .normalizeFormat function will converts a PHP format 
	string to Java/.NET format string. 
	A PHP format string can be used with .$format or .format.
	A Java/.NET format string can be used with .toString().
    The .parseExact function will only accept a Java/.NET format string	

	Example
	
	Date.normalizeFormat("%m/%d/%y"); // "MM/dd/yy"
	
	var f1 = "%m/%d/%y"
	var f2 = Date.normalizeFormat(f1); // "MM/dd/yy"

	new Date().format(f1);    // "04/13/08"
	new Date().$format(f1);   // "04/13/08"
	new Date().toString(f2);  // "04/13/08"

	var date = Date.parseExact("04/13/08", f2); // Sun Apr 13 2008
	
22. Added .strftime() to extras.js. The .strftime() function will format a local Unix timestamp according 
	to locale settings.
	
	Example
	
	Date.strftime("%m/%d/%y", new Date());       // "04/13/08"
	Date.strftime("c", "2008-04-13T17:52:03Z");  // "04/13/08"

23. Added .strtotime() to extras.js. The .strotime() function will parse any textual datetime description 
	into a Unix timestamp. 
	A Unix timestamp is the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT).
	
	Example
	
	Date.strtotime("04/13/08");              // 1208044800
	Date.strtotime("1970-01-01T00:00:00Z");  // 0	

#### 2008-04-06 [@geoffreymcgill] 

1.  Added Date.prototype.getWeek(). Gets the week number. 
	The first week of the year is the week which contains the first Thursday. 
	Monday is considered the first day of the week.

	The .getWeek algorithm is a JavaScript port of the work presented by 
	Claus Tøndering at http://www.tonderingdk/claus/cal/node8.html#SECTION00880000000000000000
    .getWeek() Algorithm Copyright (c) Claus Tondering.
    
    The .getWeek() function does NOT convert the date to UTC. The local datetime is used. 
    Please use .getISOWeek() to get the week of the UTC converted date.
        
    Returns a number from 1 to (52 or 53) depending on the year.
    
	Example
	
	Date.today().getWeek();
	
2.  Added Date.prototype.getISOWeek(). Get the ISO 8601 week number. 
	Week one (1) is the week which contains the first Thursday of the year. 
	Monday is considered the first day of the week.	
	
	The .getISOWeek() function converts the date to it's UTC value. 
	Please use .getWeek() to get the week of the local date.
	
	Example
	
	Date.today().getISOWeek(); // "01" to "53"

3.  Added Date.prototype.setWeek(). Moves the date to Monday of the week set.
    Accepts a number (1 to 53) that represents the week of the year to move to. Returns the date instance (this). 

	Example
	
	Date.today().setWeek(1); // 1st week of year

4.  Added a series of tests to /trunk/test/core/ to test for new .getWeek() and .setWeek() functions.

5.  Removed non-plural config options from Date.prototype.add().

	Example 
	
	// Old
	
	Date.today().add({month: 1, day: 1, hours: 1}); // mixed pluralization was acceptable
	
	// New
	Date.today().add({months: 1, days: 1, hours: 1}); // Only plural config options now accepted.
	
6.  Added 'week' as config option to .set().

	Example
	
	Date.today().set({week: 26});

7.  Fixed bug where Date.parse("week 1") was not returning the correct date.

8.  Removed final sugarpak.js dependency from within parser.js. Now the modules can be included in the following
	order, with the preceding module required by the next. 
	
		1. CultureInfo
		2. core.js
		3. parser.js
		4. sugarpak.js 

9.  Removed .toJSONString() from sugarpak.js. Please use .toISOString(). The .toISOString() function will return
	an ISO 8601 string of the date that has been converted to it's UTC value. 
	
	The following example demonstrates passing a format to the .toString() function to return a string 
	whose date has NOT been converted to it's UTC value and does NOT include the wrapping double-quotes required by JSON.
	
	Example
	
	new Date().toString("yyyy-MM-ddTHH:mm:ssZ");

10. Confirmed core.js and sugarpak.js modules still validate JSLint (http://www.jslint.com) 100% in whitespace strict mode.

#### 2008-04-04 [@geoffreymcgill] 

1.  Fixed Parser.js bug where the parser was using the static month token to compare against the 
    abbreviatedMonthNames array in the CultureInfo file. This was causing problems when the
    abbreviatedMonthNames strings were not en-US based.

    Example
    
    // CultureInfo = "de-DE.js"
    Date.parse("mai"); // should return May 1st of current year, but was returning null
    
    
    The fix required changing the following (approx line #525) in Parser.js.

    // Old
    this.month = ((s.length == 3) ? $D.getMonthNumberFromName(s) : (Number(s) - 1));

    // New
    this.month = (s.length == 3) ? "jan feb mar apr may jun jul aug sep oct nov dec".indexOf(s)/4 : Number(s) - 1;

2.  Fixed bug in time.js inside the TimePeriod class. A prototype of TimeSpan was mistakingly being set 
	from within the TimePeriod class. 
	
	The following demonstrates using the TimePeriod class to get the difference between two dates.
	
	Example
	
	var future = new Date().add({months: 5, days: 4, hours: 3, minutes: 2, seconds: 1});
	var now = new Date();

	var tp = new TimePeriod(future, now);

	console.log(tp.getYears());
	console.log(tp.getMonths());
	console.log(tp.getDays());
	console.log(tp.getHours());
	console.log(tp.getMinutes());
	console.log(tp.getSeconds());
    
#### 2008-04-01 [@geoffreymcgill]

1.  Fixed bug where Date.nov().final().sunday() would return the second to last sunday.
	
	The bug was in the function moveToNthOccurrence (core.js). If the final day of the month
	matched the final day required, then the second-to-last instance of the day required 
	would be returned. 
	
	Example
	
	// Old - Final day of month is a Sunday
	Date.nov().final().sunday() // return 23-Nov-2008
	
	// New
	Date.nov().final().sunday() // return 30-Nov-2008
	
2.  Added several tests to /trunk/test/core/ to test for this scenario.	

#### 2008-03-27 [@geoffreymcgill]

1.  Fixed bug which caused the string "Jan 2008" to not be parsed correctly. The 'Day' value would be
	set to "today's" Day. For example, if Today is the 27th day of the month, Date.parse("Jan 2008")
	would return "27-Jan-2008", although "1-Jan-2008" was expected.
	 
	The bug was caused by a check to see if the value of this.month was existed within Parser.finish.
	If a variable is set to the Number "0", JavaScript appears to treat that as null or undefined 
	even though the Number "0" is valid.
	
	Required an explicit check for the Number "0" in addition to the variable existence check.
	
	Example
	
	// Old (line #727 in parser.js)
	if (this.month && !this.day) { 
	
	// New (line #727 in parser.js)
	if ((this.month || this.month === 0) && !this.day) { 
	
2.  Added about 100 new tests to /trunk/test/partial/ which test for vaiations on date strings 
	with no Day value and No Year-or-Month value. View online at http://www.datejs.com/test/partial/

#### 2008-03-24 [@geoffreymcgill]

1.  Fixed bug where a single digit minute or second value would not parse correctly. 
	See forum post http://tinyurl.com/3d8b57.
	
	Made the following revision:

	// Old
	g.hms = _.cache(_.sequence([g.H, g.mm, g.ss], g.timePartDelimiter));
		
	// New
	g.hms = _.cache(_.sequence([g.H, g.m, g.s], g.timePartDelimiter));
	
2.  Added a few tests to /trunk/test/time/ relating to above fix.

#### 2008-03-18 [@geoffreymcgill]

1.  Made small revision to .addDays() which should avoid addition/subtraction issues when 
    spanning over a Daylight Saving Time (Summer Time) change.

#### 2008-03-03 [@geoffreymcgill]

1.  Fixed .toString() bug where .toString would not return four characters if the year was less than 1000.
        
	// Old 
	console.log(Date.today().set({year: 10}).toString("yyyy"); // "10"
	
	// New
	console.log(Date.today().set({year: 10}).toString("yyyy"); // "0010"
	
	The fix also corrected the same issue with .toString("yy") if the year was less than 10.
	
	// Old 
	console.log(Date.today().set({year: 5}).toString("yy"); // "5"
	
	// New
	console.log(Date.today().set({year: 5}).toString("yy"); // "05"

#### 2008-02-26 [@geoffreymcgill]

1.  @dyoder fixed bug with timeContext pattern where if a date included "april" or "august", the parser thought the 'a' was the beginning of a time part (as in am/pm).
       
        "added a quick negative lookahead to the regexp to make sure the 'a' isn't followed by a 'u' or a 'p'."
        
	// Old 
	timeContext: /^\s*(\:|a|p)/i
	
	// New
	timeContext: /^\s*(\:|a(?!u|p)|p)/i
	
2.  Fixed bug in Parser.finish, which was causing "11 Aug 2007 7:15:00 am EDT" to fail.

#### 2008-02-21 [@geoffreymcgill]

1.  Fixed bug in .parseExact where if the month was January ('0') the Parser.finishExact function was resetting to the current month.
2.  Added several new tests to /trunk/test/parseExact/.

#### 2008-02-18 [@geoffreymcgill]

1.  Added .toISOString() back to sugarpak.js. Still investigating to figure out why/how this function was removed at Build 130-131.
2.  Fixed small bug in .is().weekday() where .weekday() was not returning 'this' if the .is() flag had not been set.

#### 2008-02-07 [@geoffreymcgill]

1.  Fixed bug in parser.js which prevented some strings from parsing when the 'day' of the date string was greater than the last day of the current month.

	Example
	
	// Today is 13-Feb-2008
	Date.parse("30 Apr 2008"); //FAIL
	
	Date strings which fall under this scenario should now parse correctly.

#### 2008-02-05 [@geoffreymcgill]

1.  Added .is().weekday() function to sugarpak.js. 
    The .weekday() function determines if the current date is a weekday. 
    The function must be preceded by the .is() function.
    
    Example

    Date.today().is().weekday(); // true|false    

#### 2008-02-04 [@geoffreymcgill]

1.  Added .getOrdinal() tests to the new sugarpak (/trunk/test/sugarpak/) test package.
    See http://www.datejs.com/test/sugarpak/index.html

#### 2008-01-02 [@geoffreymcgill]

1.  Added .toISOString() to sugarpak.js. Returns ISO 8601 formatted string of date.
2.  Changed .toJSONString() to return string value wrapped in double-quotes ("") as per
    JSON.org spec. 
   
    If you want an ISO/JSON date formatted string WITHOUT the double-quotes, please pass 
    a format to the .toString() function.
   
    Example
   
    new Date().toString("yyyy-MM-ddTHH:mm:ssZ");
   
3.  Fixed bug where Date.parse("monday") was not returning correct year when the current
    week overlapped the end of year.
4.  Fixed bug in .parseExact() where day was being initialized to '1' if no day was present in the date string.
    This was a problem when only parsing a Time.
5.  New tests added to /test/parseExact/.
6.  Found and fixed bug where if a string to be parsed was a digit with a trailing space.

    Example
    
    // Old
    Date.parse("5 "); // returned current day at 5 AM. Wrong.
    
    // New
    Date.parse("5 "); // return 5th day of current month. Correct.
    
    Just trimming whitespace before sending string into parser fixed the problem.

7.  Added parser support for... 
		"3 years ago"
		"7 hours ago"

#### 2007-12-27 [@geoffreymcgill]

1.  Modified the offset values of Date.CultureInfo.timezones.
2.  Added <static> Date.compare(date1, date2).
        
        Example
        
        var date1 = Date.today();
        var date2 = Date.today().add(1).day();
        
        Date.compare(date1, date2); // returns -1

3.  Added <static> Date.equals(date1, date2).        

        Example
        
        var date1 = Date.today();
        var date2 = Date.today().add(1).day();
        
        Date.equals(date1, date2); // returns false

4.  Fixed bug in Date.getDayNumberFromName() where it was not checking against the Date.CultureInfo.shortestDayNames array.
5.  Removed <static> Date.getDayName(dayOfWeek). Please use Date.CultureInfo.dayNames[dayOfWeek]. Other options include:
        Date.CultureInfo.dayNames[dayOfWeek]
        Date.CultureInfo.abbreviatedDayNames[dayOfWeek]
        Date.CultureInfo.shortestDayNames[dayOfWeek]

    If you have a Date instance, please use .toString().
        
        Example
        
        Date.today().toString("dddd"); // "Thursday"
        Date.today().toString("ddd"); // "Thu"
        
5.  Removed <static> Date.getMonthName(month). Please use Date.CultureInfo.monthNames[month]. 
    Other options include:
        Date.CultureInfo.monthNames[month]
        Date.CultureInfo.abbreviatedMonthNames[month]

    If you have a Date instance, please use .toString().
        
        Example
        
        Date.today().toString("MMMM"); // "December"
        Date.today().toString("MMM"); // "Dec"

6.  Added Date.prototype.hasDaylightSavingTime(). 
    Returns a boolean value indicating whether Daylight Saving Time is observed in the current time zone.
7.  Added Date.prototype.isDaylightSavingTime(). 
    Returns a boolean value indicating whether this Date instance is within the Daylight Saving Time range for the current time zone.
8.  Verified core.js, sugarpak.js, and time.js are passing JSLint (http://www.jslint/) in "Strict whitespace" mode.

#### 2007-12-23 [@geoffreymcgill]

1.  Moved all minified files to the /build/ folder. Now all the original source files are 
    located in the /src/ folder, and all minified files are located in the /build/ folder. 
2.  Removed /trunk/doc/ folder. 
3.  Added CHANGELOG.txt file to /trunk/ folder.
4.  Added README.txt file to /trunk/ folder.
5.  Added LICENSE.txt file to /trunk/ folder.
6.  Added TODO.txt file to /trunk/ folder.
