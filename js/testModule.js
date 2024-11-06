// testModule.js

// export function initializeLoader(loader) {
//      console.log("testModule: Initializing loader");
//     loader.style.transform = 'translateY(0)';
//     setTimeout(() => {
//         loader.style.transform = 'translateY(-100%)';
//         setTimeout(() => {
//             loader.style.display = 'none';
//         }, 1000);
//     }, 3000);
// }

export function toggleSidebar(toggleButton, sidebar, closeButton) {
    // console.log("testModule: Setting up sidebar toggle");
    toggleButton.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
    closeButton.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
    document.addEventListener("click", (event) => {
        if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });
}

export function setupBackToTop(button) {
    // console.log("testModule: Setting up back-to-top button");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            button.classList.add("show");
        } else {
            button.classList.remove("show");
        }
    });
    button.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}

export function copyText(button, target) {
    // console.log("testModule: Setting up copy text functionality");
    function copyHandler() {
        const text = target.innerText;
        navigator.clipboard.writeText(text).then(() => {
            button.innerText = "COPIED!";
        }).catch(err => console.error("Failed to copy:", err));
    }
    button.addEventListener("click", copyHandler);
    target.addEventListener("click", copyHandler);
}

export function setupCursorMovement(cursor) {
    // console.log("testModule: Setting up cursor movement");
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
}

export function animateWords(words) {
    // console.log("testModule: Setting up word animation");
    let wordArray = [], currentWord = 0;
    words[currentWord].style.opacity = 1;

    for (let word of words) {
        splitLetters(word);
    }

    function changeWord() {
        let cw = wordArray[currentWord];
        let nw = currentWord === words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
        for (let i = 0; i < cw.length; i++) {
            animateLetterOut(cw, i);
        }
        for (let i = 0; i < nw.length; i++) {
            nw[i].className = 'letter behind';
            nw[0].parentElement.style.opacity = 1;
            animateLetterIn(nw, i);
        }
        currentWord = (currentWord === wordArray.length - 1) ? 0 : currentWord + 1;
    }

    function animateLetterOut(cw, i) {
        setTimeout(() => cw[i].className = 'letter out', i * 20);
    }

    function animateLetterIn(nw, i) {
        setTimeout(() => nw[i].className = 'letter in', 340 + (i * 20));
    }

    function splitLetters(word) {
        var content = word.textContent;  // Use textContent instead of innerHTML
        word.innerHTML = '';  // Clear the content
        var letters = [];
        for (var i = 0; i < content.length; i++) {
            var letter = document.createElement('span');
            letter.className = 'letter';
            if (content.charAt(i) === ' ') {
                letter.innerHTML = '&nbsp;';  // Add non-breaking space
            } else {
                letter.innerHTML = content.charAt(i);
            }
            word.appendChild(letter);
            letters.push(letter);
        }
    
        wordArray.push(letters);
    }

    changeWord();
    setInterval(changeWord, 2000);
}

export function setupButtonHover(buttons) {
    // console.log("testModule: Setting up button hover effect");
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - button.offsetWidth / 2;
            const y = e.clientY - rect.top - button.offsetHeight / 2;
            button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}
