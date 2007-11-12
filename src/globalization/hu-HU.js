/**
 * Version: 1.0 Alpha-1 
 * Build Date: 12-Nov-2007
 * Copyright (c) 2006-2007, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * License: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 * Website: http://www.datejs.com/ or http://www.coolite.com/datejs/
 */
Date.CultureInfo = {
	/* Culture Name */
    name:"hu-HU",
    englishName: "Hungarian (Hungary)",
    nativeName: "magyar (Magyarország)",
    
    /* Day Name Strings */
    dayNames: ["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"],
    abbreviatedDayNames: ["V","H","K","Sze","Cs","P","Szo"],
    shortestDayNames: ["V","H","K","Sze","Cs","P","Szo"],
    firstLetterDayNames: ["V","H","K","S","C","P","S"],
    
    /* Month Name Strings */
    monthNames: ["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"],
    abbreviatedMonthNames: ["jan.","febr.","márc.","ápr.","máj.","jún.","júl.","aug.","szept.","okt.","nov.","dec."],

	/* AM/PM Designators */
    amDesignator: "de.",
    pmDesignator: "du.",

    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    
    /**
     * The dateElementOrder is based on the order of the 
     * format specifiers in the formatPatterns.DatePattern. 
     *
     * Example:
     <pre>
     shortDatePattern    dateElementOrder
     ------------------  ---------------- 
     "M/d/yyyy"          "mdy"
     "dd/MM/yyyy"        "dmy"
     "yyyy-MM-dd"        "ymd"
     </pre>
     * The correct dateElementOrder is required by the parser to
     * determine the expected order of the date elements in the
     * string being parsed.
     * 
     * NOTE: It is VERY important this value be correct for each Culture.
     */
    dateElementOrder: "ymd",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "yyyy. MM. dd.",
        longDate: "yyyy. MMMM d.",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "yyyy. MMMM d. H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM d.",
        yearMonth: "yyyy. MMMM"
    },

    /**
     * NOTE: If a string format is not parsing correctly, but
     * you would expect it parse, the problem likely lies below. 
     * 
     * The following regex patterns control most of the string matching
     * within the parser.
     * 
     * The Month name and Day name patterns were automatically generated
     * and in general should be (mostly) correct. 
     *
     * Beyond the month and day name patterns are natural language strings.
     * Example: "next", "today", "months"
     *
     * These natural language string may NOT be correct for this culture. 
     * If they are not correct, please translate and edit this file
     * providing the correct regular expression pattern. 
     *
     * If you modify this file, please post your revised CultureInfo file
     * to the Datejs Discussions located at
     *     http://groups.google.com/group/date-js
     *
     * Please mark the subject with [CultureInfo]. Example:
     *    Subject: [CultureInfo] Translated "da-DK" Danish(Denmark)
     * 
     * We will add the modified patterns to the master source files.
     *
     * As well, please review the list of "Future Strings" section below. 
     */	
    regexPatterns: {
		jan: /^jan(.(uár)?)?/i,
        feb: /^febr(.(uár)?)?/i,
        mar: /^márc(.(ius)?)?/i,
        apr: /^ápr(.(ilis)?)?/i,
        may: /^máj(.(us)?)?/i,
        jun: /^jún(.(ius)?)?/i,
        jul: /^júl(.(ius)?)?/i,
        aug: /^aug(.(usztus)?)?/i,
        sep: /^szept(.(ember)?)?/i,
        oct: /^okt(.(óber)?)?/i,
        nov: /^nov(.(ember)?)?/i,
        dec: /^dec(.(ember)?)?/i,

        sun: /^vasárnap/i,
        mon: /^hétfő/i,
        tue: /^kedd/i,
        wed: /^szerda/i,
        thu: /^csütörtök/i,
        fri: /^péntek/i,
        sat: /^szombat/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
		shortMeridian: /^(a|p)/i,
		longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
		timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
		ordinalSuffix: /^\s*(st|nd|rd|th)/i,
		timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }
    
};

/********************
 ** Future Strings **
 ********************
 * 
 * The following list of strings are not currently being used, but 
 * may be incorporated later. We would appreciate any help translating
 * the strings below.
 * 
 * If you modify this file, please post your revised CultureInfo file
 * to the Datejs Discussions located at
 *     http://groups.google.com/group/date-js
 *
 * Please mark the subject with [CultureInfo]. Example:
 *    Subject: [CultureInfo] Translated "da-DK" Danish(Denmark)
 *
 * English Name        Translated
 * ------------------  -----------------
 * date                date
 * time                time
 * calendar            calendar
 * show                show
 * hourly              hourly
 * daily               daily
 * weekly              weekly
 * bi-weekly           bi-weekly
 * monthly             monthly
 * bi-monthly          bi-monthly
 * quarter             quarter
 * quarterly           quarterly
 * yearly              yearly
 * annual              annual
 * annually            annually
 * annum               annum
 * again               again
 * between             between
 * after               after
 * from now            from now
 * repeat              repeat
 * times               times
 * per                 per
 */
