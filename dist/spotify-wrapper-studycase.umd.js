!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.spotifyWrapper=n():t.spotifyWrapper=n()}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n),e.d(n,"search",(function(){return c})),e.d(n,"searchArtists",(function(){return f})),e.d(n,"searchAlbums",(function(){return i})),e.d(n,"searchPlaylists",(function(){return s})),e.d(n,"searchTracks",(function(){return a})),e.d(n,"getAlbum",(function(){return l})),e.d(n,"getAlbums",(function(){return p})),e.d(n,"getAlbumTracks",(function(){return d}));var r="https://api.spotify.com/v1",o={headers:{Authorizarion:"Bearer BQBMfiDVRYWKoVuO9zNWRYxKUEXygSZKq9fUTx7gG1ZrST4Y-0yf3LbJ_LHZl2GAjaXICX3jirxipfo0e8_hwh0dF9YSoURmwCz4dbIbN1rzOsfdhzspPcuh9AjJ6sCJpslUNSS4quhCoQ"}},u=function(t){return t.json()},c=function(t,n){return fetch("".concat(r,"/search?q=").concat(t,"&type=").concat(n),o).then(u)},f=function(t){return c(t,"artist")},i=function(t){return c(t,"album")},a=function(t){return c(t,"track")},s=function(t){return c(t,"playlist")},l=function(t){return fetch("".concat(r,"/albums/").concat(t),o).then(u)},p=function(t){return fetch("".concat(r,"/albums/?ids=").concat(t),o).then(u)},d=function(t){return fetch("".concat(r,"/albums/").concat(t,"/tracks"),o).then(u)}}])}));
//# sourceMappingURL=spotify-wrapper-studycase.umd.js.map