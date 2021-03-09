// ==UserScript==
// @name         LinkedIn decrapifier
// @namespace    http://github.com/agonzalezv
// @version      0.2
// @description  A simple LinkedIn cleaner
// @author       Andres Gonzalez
// @match        https://www.linkedin.com/feed/*
// ==/UserScript==

(function () {
    'use strict';

    const decrapify = () => {
        // Stuff "liked" by other people.
        const likedByOthers = document.getElementsByClassName('feed-shared-header--with-control-menu')
        for (const post of likedByOthers) {
            let container = post.parentNode;
            while (!container.hasAttribute("data-id")) {
                container = container.parentNode;
            }
            container.style.opacity = '0.1';
            // container.style.display = 'none';
        }

        // Stuff promoted by LI
        let potentiallyPromotedPosts = document.getElementsByClassName("feed-shared-actor__sub-description")
        for (const post of potentiallyPromotedPosts) {
            let promotedTag = post.innerHTML.trim()
            if (promotedTag === 'Promoted') {
                let container = post.parentNode
                while (!container.hasAttribute("data-id")) {
                    container = container.parentNode;
                }
                container.style.opacity = '0.1';
                container.style.display = 'none';
            }
        }
    }

    const observer = new MutationObserver(decrapify);
    observer.observe(document.body, {
        'childList': true,
        'subtree': true
    });

    decrapify();
})();