/**
 * @version: 1.0 Alpha-1
 * @author: Coolite Inc. http://www.coolite.com/
 * @date: 2008-04-04
 * @copyright: Copyright (c) 2006-2008, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * @license: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 * @website: http://www.datejs.com/
 */
 
(function () {
    var $D = Date, $P = $D.prototype, $C = $D.CultureInfo;

    /**
     * Converts the value of the current Date object to its equivalent string representation using a PHP/Unix style of date format specifiers.
     *
     * Format Specifiers
    <pre>
    Format  Description                                                                  Example
    ------  ---------------------------------------------------------------------------  -----------------------
     s      The seconds of the minute between 0-59.                                      "0" to "59"
     ss     The seconds of the minute with leading zero if required.                     "00" to "59"
     
     m      The minute of the hour between 0-59.                                         "0"  or "59"
     mm     The minute of the hour with leading zero if required.                        "00" or "59"
     
     h      The hour of the day between 1-12.                                            "1"  to "12"
     hh     The hour of the day with leading zero if required.                           "01" to "12"
     
     H      The hour of the day between 0-23.                                            "0"  to "23"
     HH     The hour of the day with leading zero if required.                           "00" to "23"
     
     d      The day of the month between 1 and 31.                                       "1"  to "31"
     dd     The day of the month with leading zero if required.                          "01" to "31"
     ddd    Abbreviated day name. $C.abbreviatedDayNames.                                "Mon" to "Sun" 
     dddd   The full day name. $C.dayNames.                                              "Monday" to "Sunday"
     
     M      The month of the year between 1-12.                                          "1" to "12"
     MM     The month of the year with leading zero if required.                         "01" to "12"
     MMM    Abbreviated month name. $C.abbreviatedMonthNames.                            "Jan" to "Dec"
     MMMM   The full month name. $C.monthNames.                                          "January" to "December"

     yy     Displays the year as a two-digit number.                                     "99" or "08"
     yyyy   Displays the full four digit year.                                           "1999" or "2008"
     
     t      Displays the first character of the A.M./P.M. designator.                    "A" or "P"
            $C.amDesignator or $C.pmDesignator
     tt     Displays the A.M./P.M. designator.                                           "AM" or "PM"
            $C.amDesignator or $C.pmDesignator
    </pre>
     * @param {String}   A format string consisting of one or more format spcifiers [Optional].
     * @return {String}  A string representation of the current Date object.
     */
    $P["$format"] = function(format) { 
        var x = this;

        var p = function p(s) {
            return s < 10 ? '0' + s : s;
        };

        return format ? format.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g, 
        function (format) {
            switch (format) {
            case "hh":
                return p(x.getHours() < 13 ? (x.getHours() === 0 ? 12 : x.getHours()) : (x.getHours() - 12));
            case "h":
                return x.getHours() < 13 ? (x.getHours() === 0 ? 12 : x.getHours()) : (x.getHours() - 12);
            case "HH":
                return p(x.getHours());
            case "H":
                return x.getHours();
            case "mm":
                return p(x.getMinutes());
            case "m":
                return x.getMinutes();
            case "ss":
                return p(x.getSeconds());
            case "s":
                return x.getSeconds();
            case "yyyy":
                var y = "000" + x.getFullYear();
                return y.substring(y.length - 4);
            case "yy":
                return x.toString("yyyy").substring(2);
            case "dddd":
                return $C.dayNames[x.getDay()];
            case "ddd":
                return $C.abbreviatedDayNames[x.getDay()];
            case "dd":
                return p(x.getDate());
            case "d":
                return x.getDate().toString();
            case "MMMM":
                return $C.monthNames[x.getMonth()];
            case "MMM":
                return $C.abbreviatedMonthNames[x.getMonth()];
            case "MM":
                return p((x.getMonth() + 1));
            case "M":
                return x.getMonth() + 1;
            case "t":
                return x.getHours() < 12 ? $C.amDesignator.substring(0, 1) : $C.pmDesignator.substring(0, 1);
            case "tt":
                return x.getHours() < 12 ? $C.amDesignator : $C.pmDesignator;
            }
        }
        ) : this._toString();
    };
    
    if (!$P.format) {
        $P.format = $P.$format;
    }
}());    