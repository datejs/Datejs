## TODO

1. More work to be done on Timezone, Timezone offsets and DST (Summer Time)
2. Add `.getFriendly()` to TimeSpan and TimePeriod. 

If a date was 3 days and 5 hours away from now, the TimeSpan `getFriendly()` function would return the following.

```javascript
var future = new Date().add({days: 3, hours: 5});
var ts = new TimeSpan(future - new Date());
    
console.log(ts.getFriendly()); // "3 days and 5 hours from now"
```
3.  More tests!

## CUTTING ROOM FLOOR

The following items were at one time tested for inclusion into the library, but were cut. They are documented here for reference. 

1.  Removed `Date.now()` because of potential collision with the future ECMA 4 spec, which will include a `Date.now()` function.
2.  Removed `Date.getDayName(dayOfWeek)`. Please use `Date.CultureInfo.dayNames[dayOfWeek]`.
3.  Removed `Date.getMonthName(month)`. Please use `Date.CultureInfo.monthNames[month]`.
4.  `Date.prototype.getQuarter()`
```javascript
/**
 * Get the Year Quarter number for the currect date instance.
 * @return {Number}  1 to 4
 */
$P.getQuarter = function () {
    return Math.ceil((this.getMonth() + 1)/3);
}; 
```
5.  `Date.isDate()`, Please use `instanceof`.
```javascript
var d1 = null;
d1 = Date.today();
console.log(d1 instanceof Date);
```
```javascript
/** 
 * Determines if an object is a Date object.
 * @return {Boolean} true if object is a Date, otherwise false.
 */ 
$D.isDate = function (obj) {
    return (obj instanceof Date);
};
```
Another Version...
```javascript
/** 
 * Determines if an object is a Date object.
 * @return {Boolean} true if object is a Date, otherwise false.
 */ 
$D.isDate = function (obj) {
    return (obj !== null) ? obj.constructor.toString().match(/Date/i) == "Date" : false;
};
```