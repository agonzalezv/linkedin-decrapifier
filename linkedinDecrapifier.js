// ==UserScript==
// @name         LinkedIn decrapifier
// @namespace    https://github.com/agonzalezv/linkedin-decrapifier
// @version      0.1
// @description  A simple LinkedIn cleaner
// @author       Andres Gonzalez
// @match        https://www.linkedin.com/feed/*
// ==/UserScript==

(function () {
    'use strict';

    const decrapify = () => {
        const iDontCareAboutThose = document.getElementsByClassName('feed-shared-header--with-control-menu')

        for (const post of iDontCareAboutThose) {
            let container = post.parentNode;
            while (!container.hasAttribute("data-id")) {
                container = container.parentNode;
            }
            container.style.opacity = '0.1';
        }
    }

    const observer = new MutationObserver(decrapify);
    observer.observe(document.body, {
        'childList': true,
        'subtree': true
    });

    decrapify();
})();
