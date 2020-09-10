"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADERS = exports.API_URL = void 0;
var TOKEN_API = 'BQBMfiDVRYWKoVuO9zNWRYxKUEXygSZKq9fUTx7gG1ZrST4Y-0yf3LbJ_LHZl2GAjaXICX3jirxipfo0e8_hwh0dF9YSoURmwCz4dbIbN1rzOsfdhzspPcuh9AjJ6sCJpslUNSS4quhCoQ';
var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
var HEADERS = {
  headers: {
    Authorizarion: 'Bearer ' + TOKEN_API
  }
};
exports.HEADERS = HEADERS;