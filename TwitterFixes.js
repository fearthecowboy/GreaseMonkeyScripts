// ==UserScript==
// @name         Twitter Layout Fixes
// @namespace    http://FearTheCowboy.com/
// @version      2.1
// @description  Fixes some crappy things about twitter
// @author       FearTheCowboy [Garrett Serack]
// @include     https://twitter.com/
// @include     https://twitter.com/search
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

document.styleSheets[document.styleSheets.length-1].insertRule('.content-main { float: left; !important }', 0);

function embed()
{
    
    if (typeof($) == "function")
    {
        $(document).ready(function()
        {
            $(".topbar.js-topbar").prependTo(".content-header");
            $(".content-header").removeClass("visuallyhidden");
            $(".timeline-tweet-box").appendTo(".DashboardProfileCard-content");
            $(".top-timeline-tweet-box-user-image").hide();
            
        });
    }
    else
    {
        setTimeout(embed, 400);
    }

}

var inject = document.createElement("script");

inject.setAttribute("type", "text/javascript");
inject.appendChild(document.createTextNode("(" + embed + ")()"));

document.body.appendChild(inject);
