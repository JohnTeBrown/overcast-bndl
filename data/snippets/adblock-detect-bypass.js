// ==UserScript==
// @name         bypass
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  rekt youtube
// @author       You
// @match        https://www.tampermonkey.net/index.php?version=4.19.0&ext=dhdg&updated=true
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    (function() { if (window.location.hostname === "www.youtube.com") { const adBlocksFound=false } })();
})();