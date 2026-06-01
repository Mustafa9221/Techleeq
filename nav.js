// nav.js — Shared hamburger menu logic for all pages
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var hamburger = document.getElementById('nav-hamburger');
        var navLinks  = document.querySelector('.nav-links');
        var overlay   = document.getElementById('nav-overlay');

        if (!hamburger || !navLinks) return;

        function openMenu() {
            hamburger.classList.add('open');
            hamburger.setAttribute('aria-expanded', 'true');
            navLinks.classList.add('open');
            if (overlay) overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('open');
            if (overlay) overlay.classList.remove('open');
            document.body.style.overflow = '';
        }

        hamburger.addEventListener('click', function () {
            if (navLinks.classList.contains('open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Close on overlay click
        if (overlay) {
            overlay.addEventListener('click', closeMenu);
        }

        // Close when a nav link is clicked (navigating away)
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });

        // Close on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navLinks.classList.contains('open')) {
                closeMenu();
                hamburger.focus();
            }
        });

        // Close on resize back to desktop
        window.addEventListener('resize', function () {
            if (window.innerWidth > 1024) {
                closeMenu();
            }
        });
    });
}());
