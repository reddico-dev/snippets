!function(e){var n;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var t=window.Cookies,r=window.Cookies=e();r.noConflict=function(){return window.Cookies=t,r}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var r in t)n[r]=t[r]}return n}function n(t){function r(n,o,i){if("undefined"!=typeof document){if(arguments.length>1){i=e({path:"/"},r.defaults,i),"number"==typeof i.expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var c=JSON.stringify(o);/^[\{\[]/.test(c)&&(o=c)}catch(a){}o=t.write?t.write(o,n):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var u in i)i[u]&&(f+="; "+u,i[u]!==!0&&(f+="="+i[u].split(";")[0]));return document.cookie=n+"="+o+f}for(var s={},p=function(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)},d=document.cookie?document.cookie.split("; "):[],l=0;l<d.length;l++){var v=d[l].split("="),g=v.slice(1).join("=");this.json||'"'!==g.charAt(0)||(g=g.slice(1,-1));try{var m=p(v[0]);if(g=(t.read||t)(g,m)||p(g),this.json)try{g=JSON.parse(g)}catch(a){}if(s[m]=g,n===m)break}catch(a){}}return n?s[n]:s}}return r.set=r,r.get=function(e){return r.call(r,e)},r.getJSON=function(e){return r.call({json:!0},e)},r.remove=function(n,t){r(n,"",e(t,{expires:-1}))},r.defaults={},r.withConverter=n,r}return n(function(){})});

function acceptCookies(thelem){
    jQuery('#cookie-content').hide( function(){
       Cookies.set('cookies_accepted', 'true', { expires: 20 });
       jQuery('a#cookie-toggle').delay(100).css('display', 'inline-block');
    });
}

function denyCookies(thelem){
    var $cookies = Cookies.get();
    for (var $name in $cookies){
        if ($cookies.hasOwnProperty($name)) {
            console.log($name);
            Cookies.remove($name);
        }
    }
}

function toggleCookiePrefs(thelem){
    jQuery('a#cookie-toggle').toggle();
    jQuery('#cookie-prefs').delay(600).toggle();
}