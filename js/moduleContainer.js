import {
    toggleSidebar,
    setupBackToTop,
    copyText,
    setupCursorMovement,
    animateWords,
    setupButtonHover
} from './testModule.js';

onload = function () {
    console.log("moduleContainer: onload event triggered");

    // Loader
    // const loader = document.getElementById('loader');
    // if (loader) {
    //     console.log("moduleContainer: Initializing loader");
    //     initializeLoader(loader);
    // }

    // Sidebar Toggle
    const toggleSidebarButton = document.querySelector("#toggleSidebar");
    const sidebar = document.querySelector("#sidebar");
    const closeSidebarButton = document.querySelector("#closeSidebar");
    if (toggleSidebarButton && sidebar && closeSidebarButton) {
        console.log("moduleContainer: Setting up sidebar toggle");
        toggleSidebar(toggleSidebarButton, sidebar, closeSidebarButton);
    }

    // Back to Top Button
    const backToTopButton = document.querySelector("#backToTop");
    if (backToTopButton) {
        console.log("moduleContainer: Setting up back-to-top button");
        setupBackToTop(backToTopButton);
    }

    // Copy Text
    const copyButton = document.querySelector("#copyButton");
    const numberToCopy = document.querySelector("#numberToCopy");
    if (copyButton && numberToCopy) {
        console.log("moduleContainer: Setting up copy text");
        copyText(copyButton, numberToCopy);
    }

    // Cursor Movement
    const cursor = document.querySelector(".cursor");
    if (cursor) {
        console.log("moduleContainer: Setting up cursor movement");
        setupCursorMovement(cursor);
    }

    // Word Animation
    const words = document.getElementsByClassName('word');
    if (words.length > 0) {
        console.log("moduleContainer: Setting up word animation");
        animateWords(words);
    }

    // Button Hover Animation
    const circleButtons = document.querySelectorAll('.btn-circle');
    if (circleButtons.length > 0) {
        console.log("moduleContainer: Setting up button hover animation");
        setupButtonHover(circleButtons);
    }
};
