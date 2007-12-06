/**
 * @version: 1.0 Alpha-1
 * @author: Coolite Inc. http://www.coolite.com/
 * @date: 5-Dec-2007
 * @copyright: Copyright (c) 2006-2007, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * @license: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 * @website: http://www.datejs.com/
 */
(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo,$N=Number.prototype,_isSecond=false;$D.yesterday=$D.yes=function(){return $D.tod().addDays(-1);};$D.tomorrow=$D.tom=function(){return $D.tod().addDays(1);};$P._orient=+1;$P._nth=null;$P._is=false;$N._dateElement="day";$P.next=function(){this._orient=+1;return this;};$D.next=function(){return Date.tod().next();};$P.last=$P.prev=$P.previous=function(){this._orient=-1;return this;};$D.last=$D.prev=$D.previous=function(){return Date.tod().last();};$P.is=function(){this._is=true;return this;};$P.at=function(time){if(typeof time==="string"){return $D.parse(this.toShortDateString()+" "+time);}
return this.set(time);};$N.fromNow=$N.after=function(date){var c={};c[this._dateElement]=this;return((!date)?new Date():date.clone()).add(c);};$N.ago=$N.before=function(date){var c={};c[this._dateElement]=this*-1;return((!date)?new Date():date.clone()).add(c);};var dx=("sunday monday tuesday wednesday thursday friday saturday").split(/\s/),mx=("january february march april may june july august september october november december").split(/\s/),px=("Millisecond Second Minute Hour Day Week Month Year").split(/\s/),nth=("final first second third forth fifth").split(/\s/),de;var df=function(n){return function(){if(this._is){this._is=false;return this.getDay()==n;}
if(this._nth!==null){if(this._isSecond){this.addSeconds(this._orient*-1);}
this._isSecond=false;var ntemp=this._nth;this._nth=null;var temp=this.clone().moveToLastDayOfMonth();this.moveToNthOccurrence(n,ntemp);if(this>temp){throw new RangeError($D.getDayName(n)+" does not occur "+ntemp+" times in the month of "+temp.getMonthName()+" "+temp.getFullYear()+".");}
return this;}
return this.moveToDayOfWeek(n,this._orient);};};var sdf=function(n){return function(){var t=$D.tod(),shift=n-t.getDay();if(n===0&&$C.firstDayOfWeek===1&&t.getDay()!==0){shift=shift+7;}
return t.addDays(shift);};};for(var i=0;i<dx.length;i++){Date[dx[i].toUpperCase()]=Date[dx[i].toUpperCase().substring(0,3)]=i;Date[dx[i]]=Date[dx[i].substring(0,3)]=sdf(i);$P[dx[i]]=$P[dx[i].substring(0,3)]=df(i);}
var mf=function(n){return function(){if(this._is){this._is=false;return this.getMonth()===n;}
return this.moveToMonth(n,this._orient);};};var smf=function(n){return function(){return $D.tod().set({month:n,day:1});};};for(var j=0;j<mx.length;j++){Date[mx[j].toUpperCase()]=Date[mx[j].toUpperCase().substring(0,3)]=j;Date[mx[j]]=Date[mx[j].substring(0,3)]=smf(j);$P[mx[j]]=$P[mx[j].substring(0,3)]=mf(j);}
var ef=function(j){return function(){if(this._isSecond){this._isSecond=false;return this;}
if(j.substring(j.length-1)!="s"){j+="s";}
return this["add"+j](this._orient);};};var nf=function(n){return function(){this._dateElement=n;return this;};};for(var k=0;k<px.length;k++){de=px[k].toLowerCase();$P[de]=$P[de+"s"]=ef(px[k]);$N[de]=$N[de+"s"]=nf(de);}
var nthfn=function(n){return function(dayOfWeek){if(dayOfWeek||dayOfWeek===0){return this.moveToNthOccurrence(dayOfWeek,n);}
this._nth=n;if(n===2&&(dayOfWeek===undefined||dayOfWeek===null)){this._isSecond=true;return this.addSeconds(this._orient);}
return this;};};for(var l=0;l<nth.length;l++){$P[nth[l]]=(l===0)?nthfn(-1):nthfn(l);}
$P.toJSONString=function(){return this.toString("yyyy-MM-ddThh:mm:ssZ");};$P.toShortDateString=function(){return this.toString($C.formatPatterns.shortDate);};$P.toLongDateString=function(){return this.toString($C.formatPatterns.longDate);};$P.toShortTimeString=function(){return this.toString($C.formatPatterns.shortTime);};$P.toLongTimeString=function(){return this.toString($C.formatPatterns.longTime);};$P.getOrdinal=function(){switch(this.getDate()){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th";}};}());
